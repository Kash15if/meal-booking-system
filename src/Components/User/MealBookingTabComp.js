import { useState } from "react";
import "./MealBooking.css";

import CartCounter from "../../CustomComponents/Cards/CartCounters";

const MealTabRows = ({ index, row, handleToggleChange }) => {

  // console.log(row)
  const [mealOn, setMealOn] = useState(row.Meal_On === 0 ? false : true);

  const [extra, setExtra] = useState(row.Extra_Meal === 0 ? false : true);

  const handleMealOnChange = (e) => {
    const { name, checked } = e.target;



    let tempObj = { ...row, [name]: checked ? 1 : 0 };

    if(name === "roti" && checked){
      tempObj = { ...tempObj, Meal_On: 1};
    }

    if(name === "Meal_On" && !checked){
      tempObj = { ...tempObj, roti: 0};
    }


    // console.log(tempObj);
    handleToggleChange(tempObj, index);
    // setMealOn(!mealOn);
  };

  const handleExtraMeal = (val) => {
    // const { name, value } = e.target;

    const tempObj = { ...row, Extra_Meal: val };
    // console.log(tempObj);
    handleToggleChange(tempObj, index);
    // setMealOn(!mealOn);
  };

  const handleExtra = (e) => {
    setExtra(!extra);
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  return (
    <tr key={index}>
      <td>{row.Date}</td>
      <td>{days[new Date(row.Date).getDay()]}</td>
      <td>{row.Time}</td>
      {/* <td>{row.Menu}</td> */}
      <td>
        <div className="switchBtn">
          <label className="switch">
            <input
              name="Meal_On"
              type="checkbox"
              checked={row.Meal_On === 1 ? true : false}
              onChange={(e) => handleMealOnChange(e)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </td>
      <td>
        <div className="switchBtn">
          <label className="switch">
            <input
              name="roti"
              type="checkbox"
              checked={row.roti === 1 ? true : false}
              onChange={(e) => handleMealOnChange(e)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </td>
      <td>
        <div className="extraMeal">
          <CartCounter count={row.Extra_Meal} setCount={handleExtraMeal} />
          {/* <input
            name="Extra_Meal"
            type="number"
            min={0}
            max={5}
            value={row.Extra_Meal}
            onChange={(e) => handleExtraMeal(e)}
          /> */}
        </div>
      </td>
    </tr>
  );
};

export default MealTabRows;
