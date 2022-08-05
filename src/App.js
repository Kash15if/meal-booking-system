import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import MyMeals from "./Components/User/YouMeals";
import NavBar from "./CustomComponents/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

          <Route path="/menus" element={<UserDashboard />} />
          <Route path="/users" element={<Dashboard />} />

          <Route path="/user/resolve-conflicts" element={<Dashboard />} />

          {/* User Routes */}
          <Route path="/" element={<UserLogin />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />

          <Route path="/user/bookmeal" element={<MealBooking />} />
          <Route path="/user/allmeals" element={<MyMeals />} />

          <Route path="/user/create-conflicts" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
