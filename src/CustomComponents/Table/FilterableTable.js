import { useState } from "react";
import Table from "react-bootstrap/Table";

const TableWithFilter = () => {
  //props
  //selectedData , setSelectedData , data , header , deleteData

  //   test vars
  const [header, setHeader] = useState(["id", "name", "ph"]);
  const [data, setData] = useState([
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
  ]);
  const [filterText, setFilterText] = useState("");
  //header
  const filterableColumn = ["name", "ph"];
  //   const header = ["id", "name", "ph"];
  //   const data = [
  //     {
  //       id: 1,
  //       name: "Kashif",
  //       ph: "90909001",
  //     },
  //     {
  //       id: 2,
  //       name: "Faraz",
  //       ph: "90909001",
  //     },
  //     {
  //       id: 3,
  //       name: "Rayan",
  //       ph: "90909001",
  //     },
  //   ];

  //   let filterText = "";

  // let selectedRow = {};

  const handleFilter = (oneRow) => {
    let filteredData = data.filter((itemRow) => {
      let res = true;
      filterableColumn.forEach((colName) => {
        let cellData = data[colName];
        if (!cellData.contains(filterText)) {
          res = false;
        }
      });

      return res;
    });

    setData(filteredData);
    // console.log(oneRow);
    // handleEditRow(oneRow);
    //setData(data)
  };

  return (
    <div>
      <div>
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          id="date"
          aria-describedby="emailHelp"
          value={formData.date}
          name="date"
          onChange={handleInput}
        />
      </div>

      <Table striped bordered hover>
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

export default TableWithFilter;
