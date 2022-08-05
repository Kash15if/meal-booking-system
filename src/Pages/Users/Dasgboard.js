//3 buttons

//book meals
//dashboard
//you all meals

//meals consumed
// per meal charge till now
//meals charge avg till now
//meals charge last month
//extra meals this month
//Bar chart meals per day
//All meals this month till including others as well

import { useState } from "react";
import MealBooking from "../../Components/User/MealBooking";
import FilterableTable from "../../CustomComponents/Table/FilterableTable";
import Dashboard from "../../Components/User/Dashboard";

const UserDashboard = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default UserDashboard;
