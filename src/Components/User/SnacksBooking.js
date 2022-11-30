import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
import "./MealBooking.css";

import { useNavigate } from "react-router-dom";
import { logOutFun } from "../../Services/AuthServices";
import SnacksBookingComp from "./SnacksBookingComp";

import Alerts from "../../CustomComponents/Alerts/Alerts";

const EveningSnacks = () => {
  const [mealStatus, setMealStatus] = useState();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    getMealData();
  }, []);

  const navigate = useNavigate();

  const getMealData = async () => {
    const endPoint = process.env.REACT_APP_BASE_URL_USER + "meals";

    try {
      const res = await axios({
        method: "GET",
        url: endPoint,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          time: "ES",
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
      });

      let allData = res.data;

      setMealStatus(
        allData.map((item) => ({
          ...item,
          Date: new Date(item.Date).toISOString().split("T")[0],
        }))
      );
    } catch (err) {
      console.log(err);
      logOut();
    }
  };

  const logOut = async () => {
    const logoutSuccess = await logOutFun();

    if (logoutSuccess) {
      navigate("/user/login", { replace: true });
    }
  };

  const handleSubmitMeals = async () => {
    const endPoint = process.env.REACT_APP_BASE_URL_USER + "meals";

    try {
      const res = await axios({
        method: "PUT",
        url: endPoint,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          time: "ES",
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
        data: mealStatus,
      });

      getMealData();
      setAlert(true);
    } catch (err) {
      console.log(err);
      logOut();
    }
  };

  const handleToggleChange = (selectedRow, index) => {
    let tempData = mealStatus;
    tempData[index] = selectedRow;
    setMealStatus([...tempData]);
  };

  return (
    <div className="jumbotron jumbotron-fluid">
      {alert && (
        <Alerts
          variant="danger"
          children="Evening Snacks has been updated"
          setAlert={setAlert}
        />
      )}
      <h4
        className="TableHeader"
        style={{ textAlign: "center", margin: "2rem 0 4rem 0" }}
      >
        My Next 7 days booking
      </h4>
      <div className="container" style={{ overflowX: "scroll" }}>
        {mealStatus && (
          <table style={{ width: "97%", margin: "auto" }}>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Menu</th>
              <th>ON/OFF</th>
            </tr>
            {mealStatus.map((row, index) => (
              <SnacksBookingComp
                index={index}
                row={row}
                handleToggleChange={handleToggleChange}
              />
            ))}
          </table>
        )}
        <div className="saveBtn">
          <button className="btn btn-success" onClick={handleSubmitMeals}>
            Save Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default EveningSnacks;
