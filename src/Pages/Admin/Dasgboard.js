//button dashboard 2 reports

//admin dashboard
//total meals this month till now
//total charge
//per meal chaerge

//report
//search particular month data
//line chart and table along

import { useState } from "react";
import DashboarComp from "./../../Components/Admin/Dashboard/DashoardComp";
import MenuTab from "../../Components/Admin/ManageTabs/MenuTab";
import UserTable from "../../Components/Admin/ManageTabs/UserTable";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      {/* Buttons for  page selection */}

      <div className="row p-2">
        <div className="col-lg-6 offset-lg-3 col-sm-12">
          <div className="row">
            <div className="col">
              <button className="btn btn-success" onClick={() => setPage(1)}>
                Dashboard
              </button>
            </div>
            <div className="col">
              <button className="btn btn-success" onClick={() => setPage(2)}>
                Menu
              </button>
            </div>
            <div className="col">
              <button className="btn btn-success" onClick={() => setPage(3)}>
                User
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard */}
      {page === 1 && <DashboarComp />}

      {/* Dashboard */}
      {page === 2 && <MenuTab />}

      {/* Dashboard */}
      {page === 3 && <UserTable />}
    </div>
  );
};

export default Dashboard;
