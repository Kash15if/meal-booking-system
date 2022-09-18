import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";

import axios from "axios";

import "./MailSender.css";

const MailSend = ({ tabData, close }) => {
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

  const contentStyle = {
    maxWidth: "600px",
    width: "90%",
    backgroundColor: "rgb(190, 132, 243)",
  };

  const changeSelectCB = (val, i) => {
    console.log(val, i);

    let tempData = data.map((item, index) =>
      index === i ? { ...item, selected: val === 1 ? 0 : 1 } : item
    );

    setData(tempData);
  };

  const filterChange = (e) => {
    const { value } = e.target;
    setFilterString(value);
  };

  const sendMail = async () => {
    const endPoint = process.env.REACT_APP_BASE_URL_ADMIN + "dashboard";

    try {
      const res = await axios({
        method: "POST",
        url: endPoint,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
        data: data,
      });
    } catch (err) {
      console.log(err);
      // logOut();
    }
    console.log(
      "sendMail to",
      data.filter((item) => item.selected === 1)
    );
  };

  console.log(tabData);

  return (
    <div className="modal1">
      <div className="close">
        <i
          className="bi bi-send-fill innerBtn"
          style={{ color: "rgb(29, 243, 29)" }}
          onClick={sendMail}
        ></i>
        <i
          onClick={close}
          className="bi bi-x-circle-fill innerBtn"
          style={{ color: "rgb(245, 30, 66)" }}
        ></i>
      </div>
      <div className="header"> Mail Details </div>
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
                    <input
                      className="checkBox"
                      type="checkbox"
                      id={index}
                      name="vehicle1"
                      checked={item.selected === 1 ? true : false}
                      onChange={() => changeSelectCB(item.selected, index)}
                    />
                    <label htmlFor={index}> {item.label}</label>
                    <br />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailSend;
