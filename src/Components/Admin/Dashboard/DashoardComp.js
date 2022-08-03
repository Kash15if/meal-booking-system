import "./DashboardComp.css";

import Card from "./../../../CustomComponents/Cards/NumberCards";

const DadhboarComp = () => {
  return (
    <div className="Dashboard">
      <div className="container">
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

      <div class="container mt-2">
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
    </div>
  );
};

export default DadhboarComp;
