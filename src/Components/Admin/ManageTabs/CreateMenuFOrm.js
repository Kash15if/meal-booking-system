import { useState } from "react";

const CreateMenu = ({ selectedData, setSelectedData }) => {
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    time: "",
    menu: "",
  });

  const handleSubmit = () => {
    setSelectedData(formData);
  };

  const handleInput = (e) => {
    var { name, value } = e.target;
    console.log(name + " " + value);
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="col-md-4 col-sm-12 container p-5 bg-light border rounded-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Date
          </label>
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

        <div>
          {" "}
          <label for="exampleInputEmail1" className="form-label">
            Time
          </label>
          <input
            type="text"
            className="form-control"
            id="time"
            aria-describedby="emailHelp"
            value={formData.time}
            name="time"
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            className="form-control"
            value={formData.menu}
            onChange={handleInput}
            name="menu"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMenu;
