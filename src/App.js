import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//admin pages
import AdminDashboard from "./Pages/Admin/Dasgboard";
import AdminLogin from "./Pages/Admin/Login";
import ManageMenu from "./Pages/Admin/Menu";
import ManageUser from "./Pages/Admin/User";

//user pages
import UserDashboard from "./Pages/Users/Dasgboard";
import UserLogin from "./Pages/Users/Login";

//testing comps
import BSTable from "./CustomComponents/Table/Table";
import MenuTab from "./Components/Admin/ManageTabs/MenuTab";
import NumberCards from "./CustomComponents/Cards/NumberCards";
import MealBooking from "./Components/User/MealBooking";
import Dashboard from "./Pages/Admin/Dasgboard";
import BarChart from "./CustomComponents/Charts/BarChart";
import FilterableTable from "./CustomComponents/Table/FilterableTable";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
