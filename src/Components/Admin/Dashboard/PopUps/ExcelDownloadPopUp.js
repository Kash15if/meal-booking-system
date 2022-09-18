import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";

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

  const downloadexcel = ({ id, label }) => {
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
                id="inputdefault"
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
