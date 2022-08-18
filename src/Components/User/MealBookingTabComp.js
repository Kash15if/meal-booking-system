import { useState } from "react";
import "./MealBooking.css";

const MealTabRows = ({ index, row, handleToggleChange }) => {
  const [mealOn, setMealOn] = useState(row.Meal_On === 0 ? false : true);

  const [extra, setExtra] = useState(row.Extra_Meal === 0 ? false : true);

  const handleMealOnChange = (e) => {
    const { name, checked } = e.target;

    const tempObj = { ...row, [name]: checked ? 1 : 0 };
    // console.log(tempObj);
    handleToggleChange(tempObj, index);
    // setMealOn(!mealOn);
  };

  const handleExtraMeal = (e) => {
    const { name, value } = e.target;

    const tempObj = { ...row, [name]: value };
    // console.log(tempObj);
    handleToggleChange(tempObj, index);
    // setMealOn(!mealOn);
  };

  const handleExtra = (e) => {
    setExtra(!extra);
  };

  return (
    <tr key={index}>
      <td>{row.Date}</td>
      <td>{row.Time}</td>
      <td>{row.Menu}</td>
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
        <div className="extraMeal">
          <input
            name="Extra_Meal"
            type="number"
            min={0}
            max={5}
            value={row.Extra_Meal}
            onChange={(e) => handleExtraMeal(e)}
          />
        </div>
      </td>
    </tr>
  );
};

export default MealTabRows;
