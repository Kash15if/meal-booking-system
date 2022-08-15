import { useEffect, useState } from "react";
import BsTable from "../../../CustomComponents/Table/Table";
import CreateMenu from "./MenuForm";
import axios from "axios";

const MenuTab = () => {
  const [tabData, setTabData] = useState();
  const [selectedRow, setSelectedRow] = useState({
    Date: "",
    Time: "",
    Menu: "",
  });

  const [tabHeader, setTabHeader] = useState();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const endPoint = process.env.REACT_APP_BASE_URL_ADMIN + "menu";

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
      setTabData(allData);

      let tempHeader = Object.keys(allData[0]);
      setTabHeader(tempHeader);
    } catch (err) {
      console.log(err);
      // logOut();
    }
  };

  const deleteOneRow = async (delRow) => {
    //delete and update using api

    const endPoint = process.env.REACT_APP_BASE_URL_ADMIN + "menu";

    try {
      const res = await axios({
        method: "DELETE",
        url: endPoint,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
        data: {
          date: delRow.Date,
          time: delRow.Time,
          menu: delRow.Menu,
        },
      });

      console.log(res);
      fetchMenuData();
    } catch (err) {
      console.log(err);
      // logOut();
    }
  };

  const addOrUpdateRow = async (newData) => {
    const endPoint = process.env.REACT_APP_BASE_URL_ADMIN + "menu";

    try {
      const res = await axios({
        method: "POST",
        url: endPoint,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
        data: {
          date: newData.Date,
          time: newData.Time,
          menu: newData.Menu,
        },
      });

      console.log(res);
      fetchMenuData();
    } catch (err) {
      console.log(err);
      // logOut();
    }
  };

  const handleEditRow = (editRowData) => {
    console.log(editRowData);
    setSelectedRow(editRowData);
    // console.log(selectedRow);
  };

  return (
    <div>
      {tabHeader && tabData ? (
        <div
          style={{
            backgroundColor: "#D6F4DE",
            padding: "1rem",
          }}
        >
          <CreateMenu
            formData={selectedRow}
            setFormData={setSelectedRow}
            handleFormSubmit={addOrUpdateRow}
          />
          <BsTable
            data={tabData}
            header={tabHeader}
            handleEditRow={handleEditRow}
            deleteRow={deleteOneRow}
          />
        </div>
      ) : (
        <h6>No data in Table</h6>
      )}
    </div>
  );
};

export default MenuTab;
