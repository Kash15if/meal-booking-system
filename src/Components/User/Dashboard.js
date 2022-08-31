import Card from "./../../CustomComponents/Cards/NumberCards";
import BarChart from "../../CustomComponents/Charts/BarChart";
import FilterableTable from "../../CustomComponents/Table/FilterableTable";

import { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { logOutFun } from "../../Services/AuthServices";

const Dashboard = () => {
  //all datas for different components
  const [cardData, setCardData] = useState();
  const [tomMeal, setTomMeal] = useState();

  const [barData, setBarData] = useState();
  const [dailyMealsLabel, setDailyMealsLabel] = useState();

  const navigate = useNavigate();

  //calling api
  useEffect(() => {
    (async () => {
      const endPoint = process.env.REACT_APP_BASE_URL_USER + "dashboard";

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
        let cardDataArray = allData[0];
        let barDataTemp = allData[1];
        let tom_TabData_temp = allData[2].map((item) => ({
          ...item,
          Date: new Date(item.Date).toISOString().split("T")[0],
        }));
        console.log(allData);
        let cardDataTemp = [
          {
            label: "Total Meal",
            value: cardDataArray[0].Total_Meal,
          },
          {
            label: "Total Expense",
            value: cardDataArray[0].All_Expense,
          },
          {
            label: "Cost/Meal",
            value: cardDataArray[0].Meal_Cost,
          },
          {
            label: "My Meals this month",
            value: cardDataArray[0].MyMeals,
          },
        ];

        // console.log(tom_TabData_temp);
        setCardData(cardDataTemp);

        setTomMeal(tom_TabData_temp);

        let dailyMealsLabelTemp = barDataTemp.map(
          (row) => new Date(row.Date).toISOString().split("T")[0]
        );
        let dailyMealsDataTemp = barDataTemp.map((row) => row.Meals);

        setDailyMealsLabel(dailyMealsLabelTemp);
        setBarData(dailyMealsDataTemp);
      } catch (err) {
        console.log(err);
        logOut();
      }
    })();
  }, []);

  const logOut = async () => {
    const logoutSuccess = await logOutFun();

    if (logoutSuccess) {
      navigate("/user/login", { replace: true });
    }
  };

  return (
    <div className="Dashboard">
      <div className="container my-5">
        <div className="row p-2">
          {cardData &&
            cardData.map((cardItem) => (
              <div className="col-lg-6 col-sm-12">
                <Card label={cardItem.label} value={cardItem.value} />
              </div>
            ))}
        </div>
      </div>

      {/* Card End */}

      {/* Barchart This month  Data */}
      <div className="my-5">
        {" "}
        <BarChart data={barData} labels={dailyMealsLabel} />
      </div>

      {/* BarCharts end */}

      {/* Todays Meal -> Filterable table */}
      <div className="my-5">
        {tomMeal && (
          <FilterableTable
            tabData={tomMeal}
            header={["Date", "Time", "Menu", "Meal_On", "Extra_Meal"]}
            filterableColumn={["Meal_On", "Date"]}
            tableHeading="My Meals this month"
          />
        )}
      </div>
      {/* Todays Meal Ends */}
    </div>
  );
};

export default Dashboard;
