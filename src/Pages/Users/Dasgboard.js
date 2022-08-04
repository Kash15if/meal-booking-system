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
import FilterableTable from "./../../CustomComponents/Table/FilterableTable";

const UserDashboard = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      {/* Buttons for  page selection */}

      <div className="row p-2">
        <div className="col-lg-6 offset-lg-3 col-sm-12">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-success btn-fullWidth"
                onClick={() => setPage(1)}
              >
                Dashboard
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-success btn-fullWidth"
                onClick={() => setPage(2)}
              >
                Meal Booking
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-success btn-fullWidth"
                onClick={() => setPage(3)}
              >
                My Meals
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard */}
      {page === 1 && <MealBooking />}

      {/* Dashboard */}
      {page === 2 && <MealBooking />}

      {/* Dashboard */}
      {page === 3 && (
        <FilterableTable
          tabData={[
            {
              id: 1,
              name: "Kashif",
              ph: "90909001",
            },
            {
              id: 2,
              name: "Faraz",
              ph: "90909002",
            },
            {
              id: 3,
              name: "Rayan",
              ph: "90909001",
            },
          ]}
          header={["id", "name", "ph"]}
          filterableColumn={["name", "ph"]}
        />
      )}
    </div>
  );
};

export default UserDashboard;
