import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import FileDownload from "js-file-download";

import axios from "axios";

import "./MailSender.css";

const ExcelDownload = ({ tabData, close }) => {
  const [data, setData] = useState();

  const [filterString, setFilterString] = useState("");

  useEffect(() => {
    let filteredData = tabData.filter((itemRow) => {
      return itemRow.label
        .toString()
        .toLowerCase()
        .includes(filterString.toString().toLowerCase());
    });

    setData(filteredData);
  }, [filterString, tabData]);

  const filterChange = (e) => {
    const { value } = e.target;
    setFilterString(value);
  };

  const downloadexcel = async ({ id, label }) => {
    const endPoint = process.env.REACT_APP_BASE_URL_ADMIN + "getemp-excel";

    try {
      let month = 9;

      const res = await axios({
        method: "POST",
        url: endPoint,
        responseType: "blob",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
        data: { uid: 81, name: label, month: month },
      });

      // //for creating download link
      FileDownload(res.data, `DailyMeals_${id}-${month}.xlsx`);
      // console.log(res);
    } catch (err) {
      console.log(err);
      // logOut();
    }
    console.log("sendMail to", label, id);
  };
  const contentStyle = {
    maxWidth: "600px",
    width: "90%",
    backgroundColor: "rgb(190, 132, 243)",
  };

  return (
    <div className="modal1">
      <div className="close">
        <i
          onClick={close}
          className="bi bi-x-circle-fill innerBtn"
          style={{ color: "rgb(245, 30, 66)" }}
        ></i>
      </div>
      <div className="header"> Download Details (Excel) </div>
      <div className="content">
        <div className="popup">
          <div className="container">
            <div>
              <input
                className="form-control"
                id="searchBox"
                type="text"
                placeholder="Search"
                onChange={filterChange}
                value={filterString}
              />
            </div>

            {data &&
              data.map((item, index) => {
                return (
                  <div className="name-checkbox" key={index}>
                    {item.label}
                    <i
                      className="bi bi-arrow-down-circle downloadIcon"
                      onClick={() => downloadexcel(item)}
                    ></i>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelDownload;
