//your meals last month/ this month or particular month
// Calener
//table -> Date , No of Meals , Charge/Meal , Menu
import { useState, useEffect } from "react";
import FilterableTable from "./../../CustomComponents/Table/FilterableTable";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { logOutFun } from "../../Services/AuthServices";

const YearMeals = () => {
  const [meals, setMeals] = useState();
  const [header, setHeader] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    const endPoint = process.env.REACT_APP_BASE_URL_USER + "mymeals";

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

      setMeals(
        allData.map((item) => ({
          ...item,
          Date: new Date(item.Date).toISOString().split("T")[0],
        }))
      );

      if (allData.length > 0) {
        setHeader(Object.keys(allData[0]));
      }
      // console.log(allData);
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

  return (
    <div>
      {meals && header && (
        <FilterableTable
          tabData={meals}
          header={header}
          filterableColumn={["Extra_Meal", "Date"]}
          tableHeading="My Meals(Last 3 months)"
        />
      )}
    </div>
  );
};

export default YearMeals;
