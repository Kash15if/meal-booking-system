import { useState } from "react";

const UserForm = ({ formData, setFormData, handleFormSubmit }) => {
  // const handleSubmit = () => {
  //   handleFormSubmit();
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
      className="col-md-4 col-sm-12 container p-5 border rounded-3 text-left  my-5"
      style={{ backgroundColor: "#1e1e1e" }}
    >
      <div className="mb-3">
        <label className="form-label">User Id</label>
        <input
          type="text"
          className="form-control"
          id="userid"
          aria-describedby="emailHelp"
          value={formData.userid}
          name="userid"
          onChange={handleInput}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="text"
          className="form-control"
          id="password"
          aria-describedby="emailHelp"
          value={formData.password}
          name="password"
          onChange={handleInput}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="date"
          aria-describedby="emailHelp"
          value={formData.name}
          name="name"
          onChange={handleInput}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Department</label>
        <select
          id="dept"
          className="form-select"
          aria-label="Default select example"
          value={formData.dept}
          name="dept"
          onChange={handleInput}
        >
          <option value="" selected={formData.Time === ""}>
            Select Department
          </option>
          <option value="Software" selected={formData.Time === "Software"}>
            Software
          </option>
          <option value="Automation" selected={formData.Time === "Automation"}>
            Automation
          </option>
          <option value="Factory" selected={formData.Time === "Factory"}>
            Factory
          </option>
        </select>
      </div>

      <div className="text-center">
        <button onClick={() => handleFormSubmit()} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserForm;
