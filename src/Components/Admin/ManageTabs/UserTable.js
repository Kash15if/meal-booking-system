import { useEffect, useState } from "react";
import BsTable from "../../../CustomComponents/Table/Table";
import CreateUser from "./UserForm";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { logOutFun } from "../../../Services/AuthServices";

import Alerts from "../../../CustomComponents/Alerts/Alerts";

const UserTab = () => {
  const [tabData, setTabData] = useState();
  const [selectedRow, setSelectedRow] = useState({
    userid: "",
    password: "",
    name: "",
    dept: "",
  });

  const [alert, setAlert] = useState(false);

  const [tabHeader, setTabHeader] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const endPoint = process.env.REACT_APP_BASE_URL_ADMIN + "user";

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

    const endPoint = process.env.REACT_APP_BASE_URL_ADMIN + "user";

    try {
      const res = await axios({
        method: "DELETE",
        url: endPoint,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
        data: delRow,
      });

      console.log(res);
      fetchMenuData();
    } catch (err) {
      console.log(err);
      // logOut();
    }
  };

  const addOrUpdateRow = async (newData) => {
    const endPoint = process.env.REACT_APP_BASE_URL_ADMIN + "user";

    try {
      const res = await axios({
        method: "POST",
        url: endPoint,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
        data: selectedRow,
      });

      console.log(res);
      setSelectedRow({
        userid: "",
        password: "",
        name: "",
        dept: "",
      });

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
    <div
      style={{
        backgroundColor: "#1e1e1e",
        padding: "1rem",
      }}
    >
      {alert && (
        <Alerts
          variant="danger"
          children="Expense has been updated"
          setAlert={setAlert}
        />
      )}
      {tabHeader && tabData ? (
        <div>
          <CreateUser
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

export default UserTab;
