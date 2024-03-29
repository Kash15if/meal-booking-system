import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const TableWithFilter = ({
  tabData,
  header,
  filterableColumn,
  tableHeading,
}) => {
  //props
  //selectedData , setSelectedData , data , header , deleteData

  const [data, setData] = useState();
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    let filteredData = tabData.filter((itemRow) => {
      return filterableColumn.some((colName, index) =>
        itemRow[colName].toString().includes(filterText.toString())
      );
    });

    setData(filteredData);
  }, [filterText, filterableColumn, tabData]);

  const handleFilterChange = (e) => {
    var { value } = e.target;
    setFilterText(value);
  };

  return (
    <div
      className="p-3"
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: "0.5rem",
        minWidth: "100%",
        overflow: "auto",
        minHeight: "75vh",
        color: "white",
      }}
    >
      <h4 style={{ textAlign: "center", marginTop: "2rem" }}>{tableHeading}</h4>
      <div className="row mt-3">
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
        <Table bordered>
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
                <td>{index + 1}</td>
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
