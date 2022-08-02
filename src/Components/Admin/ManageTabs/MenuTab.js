import { useEffect, useState } from "react";
import BsTable from "../../../CustomComponents/Table/Table";
import CreateMenu from "./CreateMenuFOrm";

const MenuTab = () => {
  const [tabData, setTabData] = useState();
  const [selectedRow, setSelectedRow] = useState();
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

  const deleteOneRow = () => {
    //delete and update using api
    console.log(selectedRow);
    setSelectedRow();
  };

  return (
    <div>
      {tabHeader && tabData ? (
        <div>
          <CreateMenu />
          <BsTable
            data={tabData}
            header={tabHeader}
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
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
