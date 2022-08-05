//button dashboard 2 reports

//admin dashboard
//total meals this month till now
//total charge
//per meal chaerge

//report
//search particular month data
//line chart and table along

import { useState } from "react";
import DashboarComp from "../../Components/Admin/Dashboard/DashoardComp";

import "./AdminPage.css";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <DashboarComp />
    </div>
  );
};

export default Dashboard;
