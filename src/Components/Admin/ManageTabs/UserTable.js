import { useEffect, useState } from "react";
import BsTable from "../../../CustomComponents/Table/Table";
import CreateMenu from "./MenuForm";

const UserTab = () => {
  const [tabData, setTabData] = useState();
  const [selectedRow, setSelectedRow] = useState({
    id: "",
    date: "",
    time: "",
    menu: "",
  });

  const [tabHeader, setTabHeader] = useState();

  useEffect(() => {
    let tempData = [
      {
        date: "2022-07-01",
        time: "Lunch",
        menu: "sfd ijjvi ijij jsafas joj0 0sfcas",
      },
      {
        date: "2022-07-02",
        time: "Lunch",
        menu: "sfd ijjvi ijij jsafas joj0 0sfcas",
      },
      {
        date: "2022-07-03",
        time: "Lunch",
        menu: "sfd ijjvi ijij jsafas joj0 0sfcas",
      },
    ];

    let tempHeader = Object.keys(tempData[0]);

    setTabData(tempData);
    setTabHeader(tempHeader);
  }, []);

  const deleteOneRow = (delRow) => {
    //delete and update using api
    console.log(delRow);
    let delData = tabData.filter((item) => item.id !== delRow.id);
    setTabData(delData);
    // setSelectedRow();
  };

  const addOrUpdateRow = (newData) => {
    if (selectedRow.id === "") {
      //call create api and ret data
      console.log(newData);
    } else {
      //call update api and ret data
      console.log(newData);
    }
  };

  const handleEditRow = (editRowData) => {
    // console.log(editRowData);
    setSelectedRow(editRowData);
    // console.log(selectedRow);
  };

  return (
    <div>
      {tabHeader && tabData ? (
        <div>
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

export default UserTab;
