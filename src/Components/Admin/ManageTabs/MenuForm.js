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
    <div className="col-md-4 col-sm-12 container p-5 bg-light border rounded-3 text-left">
      <div className="mb-3">
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

      <div>
        {" "}
        <label className="form-label">Time</label>
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
        <button onClick={() => handleFormSubmit()} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateMenu;