import { useState } from "react";
import "./MealBooking.css";

const SnacksBookingComp = ({ index, row, handleToggleChange }) => {
  const [mealOn, setMealOn] = useState(row.Meal_On === 0 ? false : true);

  const handleMealOnChange = (e) => {
    const { name, checked } = e.target;

    const tempObj = { ...row, [name]: checked ? 1 : 0 };
    handleToggleChange(tempObj, index);
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
    </tr>
  );
};

export default SnacksBookingComp;
