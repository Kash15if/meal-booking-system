//book next 7 days meals
//using cart system +1 - 1 and num with menu

import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
import "./MealBooking.css";

import MealTabRows from "./MealBookingTabComp";

const MealBooking = () => {
  const [mealStatus, setMealStatus] = useState();

  useEffect(() => {
    getMealData();
  }, []);

  const getMealData = async () => {
    const endPoint = process.env.REACT_APP_BASE_URL_USER + "meal";

    try {
      const res = await axios({
        method: "GET",
        url: endPoint,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
      });

      let allData = res.data;

      setMealStatus(allData);
    } catch (err) {
      console.log(err);
      // logOut();
    }
  };

  const handleSubmitMeals = async () => {
    const endPoint = process.env.REACT_APP_BASE_URL_USER + "meal";

    try {
      const res = await axios({
        method: "PUT",
        url: endPoint,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
        data: mealStatus,
      });

      console.log(res);
      getMealData();
    } catch (err) {
      console.log(err);
      // logOut();
    }
  };
  // const handleInputChange = (e, index) => {
  //   const { value } = e.target;

  //   let tempData = mealStatus;
  //   let tempObj = { ...tempData[index], Extra_Meal: value };
  //   tempData[index] = tempObj;
  //   console.log(tempObj);
  //   setMealStatus(tempData);
  //   console.log(value);
  // };

  const handleToggleChange = (selectedRow, index) => {
    // const { name, checked } = e.target;

    let tempData = mealStatus;
    tempData[index] = selectedRow;
    setMealStatus([...tempData]);
    // console.log(tempData);
  };

  useEffect(() => {
    console.log(mealStatus);
  }, [mealStatus]);

  return (
    <div className="jumbotron jumbotron-fluid">
      <h4 style={{ textAlign: "center", margin: "2rem 0 4rem 0" }}>
        My Next 7 days booking
      </h4>
      <div className="container" style={{ overflowX: "scroll" }}>
        {mealStatus && (
          <table style={{ width: "70%", margin: "auto" }}>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Menu</th>
              <th>ON/OFF</th>
              <th>Additional Meals</th>
            </tr>
            {mealStatus.map((row, index) => (
              <MealTabRows
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

export default MealBooking;
