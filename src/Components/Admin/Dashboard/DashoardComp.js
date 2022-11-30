import "./DashboardComp.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./../../../CustomComponents/Cards/NumberCards";
import BarChart from "../../../CustomComponents/Charts/BarChart";
import FilterableTable from "../../../CustomComponents/Table/FilterableTable";

import FileDownload from "js-file-download";

import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

import MailSend from "./PopUps/MailSender";
import ExcelDownloadPopUp from "./PopUps/ExcelDownloadPopUp";

import { useNavigate } from "react-router-dom";
import { logOutFun } from "..//../../Services/AuthServices";

const DadhboarComp = () => {
  //all datas for different components
  const [cardData, setCardData] = useState();
  const [tomMeal, setTomMeal] = useState();

  const [barData, setBarData] = useState();
  const [dailyMealsLabel, setDailyMealsLabel] = useState();

  const [userList, setUserList] = useState();

  const navigate = useNavigate();

  const contentStyle = {
    maxWidth: "600px",
    width: "90%",
    backgroundColor: "rgb(190, 132, 243)",
  };

  //calling api
  useEffect(() => {
    (async () => {
      const endPoint = process.env.REACT_APP_BASE_URL_ADMIN + "dashboard";

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
        let barDataTemp = allData[1].map((item) => ({
          ...item,
          Date: new Date(item.Date).toISOString().split("T")[0],
        }));
        let tom_TabData_temp = allData[3].map((item) => ({
          ...item,
          Date: new Date(item.Date).toISOString().split("T")[0],
        }));
        console.log(allData);
        console.log(barDataTemp);
        let cardDataTemp = [
          {
            label: "Tommorrow Lunch",
            value: cardDataArray[0].Tom_Lunch,
          },
          {
            label: "Todays Lunch",
            value: cardDataArray[0].Today_Lunch,
          },
          {
            label: "Todays Snacks",
            value: cardDataArray[0].Today_ES,
          },
          {
            label: "Yesterday Lunch",
            value: cardDataArray[0].Yest_Lunch,
          },
          {
            label: "Lunch Expense",
            value: cardDataArray[0].Lunch_Expense,
          },
          {
            label: "Lunch(this month)",
            value: cardDataArray[0].Total_Meal,
          },
          {
            label: "Cost/Lunch",
            value: cardDataArray[0].Lunch_Cost,
          },
          {
            label: "Snacks Expense",
            value: cardDataArray[0].Snacks_Expense,
          },
          {
            label: "Snacks(this month)",
            value: cardDataArray[0].Total_Snacks,
          },
          {
            label: "Cost/Snacks",
            value: cardDataArray[0].ES_Cost,
          },
          {
            label: "Last ES charge",
            value: cardDataArray[0].Last_Month_ESCharge,
          },
          {
            label: "Last Lunch Charge",
            value: cardDataArray[0].Last_Month_LunchCharge,
          },
          {
            label: "All Expense",
            value: cardDataArray[0].All_Expense,
          },
        ];

        console.log(tom_TabData_temp);
        setCardData(cardDataTemp);

        setTomMeal(tom_TabData_temp);

        let dailyMealsLabelTemp = [
          ...new Set(barDataTemp.map((row) => row.Date)),
        ];
        let dailyMealsDataTemp = barDataTemp;

        setUserList(allData[4]);
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
      navigate("/admin/login", { replace: true });
    }
  };

  const summaryExcelDownload = async () => {
    const endPoint = process.env.REACT_APP_BASE_URL_ADMIN + "getsummary";

    const d = new Date();
    let month = d.getMonth();

    try {
      const res = await axios({
        method: "POST",
        url: endPoint,
        responseType: "blob",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
        data: { month: month + 1 },
      });

      // //for creating download link
      FileDownload(res.data, `MealSummary_Month-${month + 1}.xlsx`);
      console.log(res);
    } catch (err) {
      console.log(err);
      // logOut();
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

      {/*----------------------------------------------------- Card End ------------------------------------------*/}

      {/* Action buttons */}

      <div class="container my-5">
        <div class="row p-2">
          <div class="col-lg-4 col-sm-12  ">
            <button
              class="btn btn-success downloadBtn"
              onClick={summaryExcelDownload}
            >
              Download Expense Summary
            </button>
          </div>

          <div class="col-lg-4 col-sm-12  ">
            <Popup
              trigger={
                <button class="btn btn-success downloadBtn">Send Bills</button>
              }
              position="right center"
              modal
              contentStyle={contentStyle}
            >
              {(close) => <MailSend close={close} tabData={userList} />}
            </Popup>
          </div>

          <div class="col-lg-4 col-sm-12  ">
            <Popup
              trigger={
                <button class="btn btn-success downloadBtn">
                  Download Emp. Data
                </button>
              }
              position="right center"
              modal
              contentStyle={contentStyle}
            >
              {(close) => (
                <ExcelDownloadPopUp close={close} tabData={userList} />
              )}
            </Popup>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------Action button Ends --------------------------------------------*/}

      {/* Barchart This month  Data */}
      <div className="my-5">
        {barData && dailyMealsLabel && (
          <BarChart data={barData} labels={dailyMealsLabel} />
        )}
      </div>

      {/* ---------------------------------------------BarCharts end ---------------------------------------------------------------*/}

      {/* Todays Meal -> Filterable table */}
      <div className="my-5">
        {tomMeal && (
          <FilterableTable
            tabData={tomMeal}
            header={["Date", "Name", "UserId", "Time", "Meal_On", "Extra_Meal"]}
            filterableColumn={["UserId"]}
          />
        )}
      </div>
      {/* --------------------------------------------------------Todays Meal Ends--------------------------------------------- */}
    </div>
  );
};

export default DadhboarComp;
