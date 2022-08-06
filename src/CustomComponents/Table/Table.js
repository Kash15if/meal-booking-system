import Table from "react-bootstrap/Table";
import { PencilSquare } from "react-bootstrap-icons";

import { TrashFill } from "react-bootstrap-icons";

const BSTable = ({ data, header, handleEditRow, deleteRow }) => {
  //props
  //selectedData , setSelectedData , data , header , deleteData

  //header
  // const header = ["id", "name", "ph"];
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

  // let selectedRow = {};

  const handleEditTable = (oneRow) => {
    // console.log(oneRow);

    handleEditRow(oneRow);
    //setData(data)
  };

  const handleDeleteTable = (oneRow) => {
    // console.log(oneRow);'
    deleteRow(oneRow);
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
