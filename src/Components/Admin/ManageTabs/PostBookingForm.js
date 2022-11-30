import { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { logOutFun } from "../../../Services/AuthServices";

const CreateMenu = ({ formData, setFormData, handleFormSubmit }) => {
  const [allids, setAllids] = useState();

  useEffect(() => {
    fetchAllIds();
  }, []);

  const navigate = useNavigate();

  const logOut = async () => {
    const logoutSuccess = await logOutFun();

    if (logoutSuccess) {
      navigate("/admin/login", { replace: true });
    }
  };

  const fetchAllIds = async () => {
    const endPoint = process.env.REACT_APP_BASE_URL_ADMIN + "getusers";

    try {
      const res = await axios({
        method: "GET",
        url: endPoint,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": "Bearer " + localStorage.getItem("token"),
        },
      });

      let allData = res.data;

      setAllids([...allData]);
      console.log(allData);
    } catch (err) {
      console.log(err);
      //   logOut();
    }
  };

  const handleInput = (e) => {
    var { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log({ ...formData, [name]: value });
  };

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
      <div>
        {" "}
        <label className="form-label">User Id</label>
        <select
          id="emp-id"
          className="form-select"
          aria-label="Default select example"
          value={formData.UserId}
          name="UserId"
          onChange={handleInput}
        >
          <option value="" selected={formData.UserId === ""}>
            Select User Id
          </option>
          {allids &&
            allids.length &&
            allids.map((item) => (
              <option
                value={item.id}
                selected={formData.UserId == item.id}
                key={item.id}
              >
                {item.id}
              </option>
            ))}
        </select>
      </div>
      <div>
        {" "}
        <label className="form-label">Meal_On</label>
        <select
          id="meal-on"
          className="form-select"
          aria-label="Default select example"
          value={formData.Meal_On}
          name="Meal_On"
          onChange={handleInput}
        >
          <option value="" selected={formData.Meal_On === ""}>
            Select Meals
          </option>
          <option value={1} selected={formData.Meal_On == 1}>
            1
          </option>
          <option value={0} selected={formData.Meal_On == 0}>
            0
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

export default CreateMenu;
