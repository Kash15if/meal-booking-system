import { useState } from "react";

const ExpenseForm = ({ formData, setFormData, handleFormSubmit }) => {
  // const handleSubmit = () => {
  //   handleFormSubmit();
  //   // setSelectedData(formData);
  // };

  const handleInput = (e) => {
    var { name, value } = e.target;
    // console.log(name + " " + value);
    setFormData({ ...formData, [name]: value });
  };

  //   {
  //     date: "",
  // time : "",
  //     expense: "",
  //     breakup: "",
  //     details: "",
  //   }

  console.log(formData);
  return (
    <div
      className="col-md-4 col-sm-12 container p-5 border rounded-3 text-left  my-5"
      style={{ backgroundColor: "#D6F4DE" }}
    >
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
          disabled={formData.time !== ""}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Time</label>

        <select
          id="time"
          className="form-select"
          aria-label="Default select example"
          value={formData.time}
          name="time"
          onChange={handleInput}
          disabled={formData.time !== ""}
        >
          <option value="" selected={formData.time === ""}>
            Select Time
          </option>
          <option value="Lunch" selected={formData.time === "Lunch"}>
            Lunch
          </option>
          <option value="ES" selected={formData.time === "ES"}>
            Evening Snacks
          </option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Expense</label>
        <input
          type="number"
          className="form-control"
          id="expense"
          aria-describedby="emailHelp"
          value={formData.expense}
          name="expense"
          onChange={handleInput}
	  min={0}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Expense Breakup</label>
        <input
          type="text"
          className="form-control"
          id="breakup"
          aria-describedby="emailHelp"
          value={formData.breakup}
          name="breakup"
          onChange={handleInput}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Expense Details</label>
        <input
          type="text"
          className="form-control"
          id="details"
          aria-describedby="emailHelp"
          value={formData.details}
          name="details"
          onChange={handleInput}
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

export default ExpenseForm;
