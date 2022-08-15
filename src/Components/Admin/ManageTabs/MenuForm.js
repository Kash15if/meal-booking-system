import { useState } from "react";

const CreateMenu = ({ formData, setFormData, handleFormSubmit }) => {
  const handleSubmit = () => {
    handleFormSubmit();
    // setSelectedData(formData);
  };

  const handleInput = (e) => {
    var { name, value } = e.target;
    // console.log(name + " " + value);
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);
  return (
    <div
      className="col-md-4 col-sm-12 container p-5 border rounded-3 text-left my-5"
      style={{ backgroundColor: "#D6F4DE" }}
    >
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          id="date"
          aria-describedby="emailHelp"
          value={formData.Date}
          name="Date"
          onChange={handleInput}
        />
      </div>

      <div>
        {" "}
        <label className="form-label">Time</label>
        <input
          type="text"
          className="form-control"
          id="time"
          aria-describedby="emailHelp"
          value={formData.Time}
          name="Time"
          onChange={handleInput}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Quantity</label>
        <input
          className="form-control"
          value={formData.Menu}
          onChange={handleInput}
          name="Menu"
        />
      </div>

      <div className="text-center">
        <button onClick={() => handleFormSubmit()} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateMenu;
