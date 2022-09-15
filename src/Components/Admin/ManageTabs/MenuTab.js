import { useEffect, useState } from "react";
import BsTable from "../../../CustomComponents/Table/Table";
import CreateMenu from "./MenuForm";
import axios from "axios";

import Alerts from "../../../CustomComponents/Alerts/Alerts";

import { useNavigate } from "react-router-dom";
import { logOutFun } from "../../../Services/AuthServices";

const MenuTab = () => {
  const [tabData, setTabData] = useState();
  const [selectedRow, setSelectedRow] = useState({
    Date: "",
    Time: "",
    Menu: "",
  });

  const [tabHeader, setTabHeader] = useState();

  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();

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
      logOut();
    }
  };

  const logOut = async () => {
    const logoutSuccess = await logOutFun();

    if (logoutSuccess) {
      navigate("/admin/login", { replace: true });
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
          date: selectedRow.Date,
          time: selectedRow.Time,
          menu: selectedRow.Menu,
        },
      });

      console.log(res);

      setAlert(true);
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
      {alert && (
        <Alerts
          variant="danger"
          children="Expense has been updated"
          setAlert={setAlert}
        />
      )}

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
