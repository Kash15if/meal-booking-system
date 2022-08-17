import { useEffect, useState } from "react";
import BsTable from "../../../CustomComponents/Table/Table";
import CreateUser from "./UserForm";
import axios from "axios";

const UserTab = () => {
  const [tabData, setTabData] = useState();
  const [selectedRow, setSelectedRow] = useState({
    userid: "",
    password: "",
    name: "",
    dept: "",
  });

  const [tabHeader, setTabHeader] = useState();

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
      // logOut();
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
      setSelectedRow();
      fetchMenuData({
        userid: "",
        password: "",
        name: "",
        dept: "",
      });
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
        backgroundColor: "#D6F4DE",
        padding: "1rem",
      }}
    >
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
