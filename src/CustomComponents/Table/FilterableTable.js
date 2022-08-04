import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const TableWithFilter = ({ tabData, header, filterableColumn }) => {
  //props
  //selectedData , setSelectedData , data , header , deleteData

  const [data, setData] = useState();
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    let filteredData = tabData.filter((itemRow) => {
      return filterableColumn.some((colName, index) =>
        itemRow[colName].includes(filterText)
      );
    });

    setData(filteredData);
  }, [filterText, filterableColumn, tabData]);
  //header
  // const filterableColumn = ["name", "ph"];
  //   const header = ["id", "name", "ph"];
  // const data = [
  //   {
  //     id: 1,
  //     name: "Kashif",
  //     ph: "90909001",
  //   },
  //   {
  //     id: 2,
  //     name: "Faraz",
  //     ph: "90909001",
  //   },
  //   {
  //     id: 3,
  //     name: "Rayan",
  //     ph: "90909001",
  //   },
  // ];

  //   let filterText = "";

  // let selectedRow = {};

  const handleFilterChange = (e) => {
    var { value } = e.target;
    setFilterText(value);
  };

  return (
    <div className="p-3">
      <div className="row my-3">
        <div className="col-md-4 col-lg-3 col-sm-12 offset-md-8 offset-lg-9">
          <input
            type="text"
            className="form-control"
            id="filter-text"
            placeholder="Search"
            aria-describedby="Filter-text"
            value={filterText}
            name="date"
            onChange={handleFilterChange}
          />
        </div>
      </div>

      {tabData && data && (
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              {header.map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((oneRow, index) => (
              <tr key={index}>
                <td>{index}</td>
                {header.map((item) => (
                  <td key={index + item}>{oneRow[item]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default TableWithFilter;
