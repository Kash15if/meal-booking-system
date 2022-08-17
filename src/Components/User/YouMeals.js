//your meals last month/ this month or particular month
// Calener
//table -> Date , No of Meals , Charge/Meal , Menu
import { useState, useEffect } from "react";
import FilterableTable from "./../../CustomComponents/Table/FilterableTable";
import axios from "axios";

const YearMeals = () => {
  const [meals, setMeals] = useState();
  const [header, setHeader] = useState();

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

      setMeals(allData);

      if (allData.length > 0) {
        setHeader(Object.keys(allData[0]));
      }
      console.log(allData);
    } catch (err) {
      console.log(err);
      // logOut();
    }
  };
  return (
    <div>
      {meals && header && (
        <FilterableTable
          tabData={meals}
          header={header}
          filterableColumn={["Extra_Meal", "Date"]}
        />
      )}
    </div>
  );
};

export default YearMeals;
