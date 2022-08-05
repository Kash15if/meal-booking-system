import Card from "./../../CustomComponents/Cards/NumberCards";
import BarChart from "../../CustomComponents/Charts/BarChart";
import FilterableTable from "../../CustomComponents/Table/FilterableTable";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="container my-5">
        <div className="row p-2">
          <div className="col-lg-6 col-sm-12">
            <Card label={"Total Meal"} value={180} />
          </div>
          <div className="col-lg-6 col-sm-12">
            <Card label={"Total Expense"} value={5800} />
          </div>

          <div className="col-lg-6 col-sm-12">
            <Card label={"Cost/Meal"} value={60} />
          </div>

          <div className="col-lg-6 col-sm-12">
            <Card label={"Tomorrrows Booked Meal"} value={50} />
          </div>
        </div>
      </div>

      {/* Card End */}

      {/* Action buttons */}

      <div class="container my-5">
        <div class="row p-2">
          <div class="col-lg-4 col-sm-12  ">
            <button class="btn btn-success downloadBtn">
              Download Expense Summary
            </button>
          </div>

          <div class="col-lg-4 col-sm-12  ">
            <button class="btn btn-success downloadBtn">Send Bills</button>
          </div>

          <div class="col-lg-4 col-sm-12  ">
            <button class="btn btn-success downloadBtn">
              Download Emp. Data
            </button>
          </div>
        </div>
      </div>
      {/* Action button Ends */}

      {/* Barchart This month  Data */}
      <div className="my-5">
        {" "}
        <BarChart />
      </div>

      {/* BarCharts end */}

      {/* Todays Meal -> Filterable table */}
      <div className="my-5">
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
      </div>
      {/* Todays Meal Ends */}
    </div>
  );
};

export default Dashboard;
