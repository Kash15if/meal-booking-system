import { useState } from "react";
import Table from "react-bootstrap/Table";
import { PencilSquare } from "react-bootstrap-icons";

import { TrashFill } from "react-bootstrap-icons";

const BSTable = ({ data, header, handleEditRow, deleteRow }) => {
  const [filterText, setFilterText] = useState("");
  const [tabData, setTabData] = useState();

  // useEffect(() => {
  //   let filteredData = tabData.filter((itemRow) => {
  //     return filterableColumn.some((colName, index) =>
  //       itemRow[colName].toString().includes(filterText.toString())
  //     );
  //   });

  //   setData(filteredData);
  // }, [filterText, filterableColumn, tabData]);

  const handleEditTable = (oneRow) => {
    // console.log(oneRow);

    handleEditRow(oneRow);
    //setData(data)
  };

  const handleDeleteTable = (oneRow) => {
    // console.log(oneRow);'
    deleteRow(oneRow);
  };

  const handleFilterChange = (e) => {
    var { value } = e.target;
    setFilterText(value);
  };

  return (
    <div
      style={{
        backgroundColor: "#D6F4DE",
        borderRadius: "0.5rem",
        minWidth: "100%",
        overflow: "auto",
        height: "60vh",
      }}
    >
      <div className="col-md-4 col-lg-3 col-sm-12 offset-md-8 offset-lg-9 my-3">
        <input
          type="text"
          className="form-control"
          id="filter-text"
          placeholder="Search"
          aria-describedby="Filter-text"
          value={filterText}
          name="date"
          // onChange={handleFilterChange}
        />
      </div>

      <Table bordered rounded-10 hover>
        <thead>
          <tr>
            <th>#</th>
            {header.map((item) => (
              <th>{item}</th>
            ))}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((oneRow, index) => (
            <tr key={index}>
              <td>{index}</td>
              {header.map((item) => (
                <td key={index + item}>{oneRow[item]}</td>
              ))}
              <td>
                <PencilSquare
                  color="royalblue"
                  onClick={() => handleEditTable(oneRow)}
                />
              </td>
              <td>
                <TrashFill
                  color="red"
                  onClick={() => handleDeleteTable(oneRow)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BSTable;
