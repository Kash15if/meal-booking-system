import { useEffect, useState } from "react";
import BsTable from "../../../CustomComponents/Table/Table";
import CreateMenu from "./CreateMenuFOrm";

const MenuTab = () => {
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
        id: 1,
        name: "Kashif",
        ph: "90909001",
      },
      {
        id: 2,
        name: "Faraz",
        ph: "90909001",
      },
      {
        id: 3,
        name: "Rayan",
        ph: "90909001",
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
    setSelectedRow(editRowData);
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

export default MenuTab;
