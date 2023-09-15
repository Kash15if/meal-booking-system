import { useState } from "react";

const CreateMenu = ({ formData, setFormData, handleFormSubmit }) => {
  // const handleSubmit = () => {
  //   handleFormSubmit(formData);

  //   // setSelectedData(formData);
  // };

  const handleInput = (e) => {
    var { name, value } = e.target;
    // console.log(name + " " + value);
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);
  return (
    <div
      className="col-md-4 col-sm-12 container p-5 border rounded-3 text-left my-5"
      style={{ backgroundColor: "#1e1e1e" }}
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
        <select
          id="time"
          className="form-select"
          aria-label="Default select example"
          value={formData.Time}
          name="Time"
          onChange={handleInput}
        >
          <option value="" selected={formData.Time === ""}>
            Select Time
          </option>
          <option value="Lunch" selected={formData.Time === "Lunch"}>
            Lunch
          </option>
          <option value="ES" selected={formData.Time === "ES"}>
            Evening Snacks
          </option>
        </select>
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
        <button
          onClick={() => handleFormSubmit()}
          className="btn btn-outline-success"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateMenu;
