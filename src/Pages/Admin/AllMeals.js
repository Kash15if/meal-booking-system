import FilterableTable from "../../CustomComponents/Table/FilterableTable";
import axios from "axios";
import { useState, useEffect } from "react";
const AllMeals = () => {
  const [tabData, setTabData] = useState();

  const [tabHeader, setTabHeader] = useState();

  useEffect(() => {
    fetchAllMeals();
  }, []);

  const fetchAllMeals = async () => {
    const endPoint = process.env.REACT_APP_BASE_URL_ADMIN + "allmeals";

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
      console.log(allData);
      setTabData(
        allData.map((item) => ({
          ...item,
          Date: new Date(item.Date).toISOString().split("T")[0],
        }))
      );

      let tempHeader = Object.keys(allData[0]);
      setTabHeader(tempHeader);
    } catch (err) {
      console.log(err);
      // logOut();
    }
  };

  return (
    <div>
      {tabData && tabHeader && (
        <FilterableTable
          tabData={tabData}
          header={tabHeader}
          filterableColumn={["UserId", "Date"]}
        />
      )}
    </div>
  );
};

export default AllMeals;
