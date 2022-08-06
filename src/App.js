import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { RequireAuth } from "./Services/AuthServices";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//admin pages
import AdminDashboard from "./Pages/Admin/Dashboard";
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
import Dashboard from "./Pages/Admin/Dashboard";
import BarChart from "./CustomComponents/Charts/BarChart";
import FilterableTable from "./CustomComponents/Table/FilterableTable";
import MyMeals from "./Components/User/YouMeals";
import AdminNav from "./Components/Admin/Navbar";
import ClientNav from "./Components/User/NavBar";
import { useEffect, useState } from "react";
import UserTab from "./Components/Admin/ManageTabs/UserTable";
import AllMeals from "./Pages/Admin/AllMeals";

function App() {
  const [usrType, setUserType] = useState("user");

  let location = useLocation();

  useEffect(() => {
    let routeArray = location.pathname.split("/");

    // console.log(routeArray[1]);
    setUserType(routeArray[1]);
  }, [location]);
  return (
    <div className="App">
      {usrType === "admin" ? <AdminNav /> : <ClientNav />}
      <Routes>
        {/* Admin Routes */}

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <RequireAuth userType={usrType}>
              <Dashboard />
            </RequireAuth>
          }
        />

        <Route
          path="/admin/menus"
          element={
            <RequireAuth userType={usrType}>
              <MenuTab />
            </RequireAuth>
          }
        />

        <Route
          path="/admin/users"
          element={
            <RequireAuth userType={usrType}>
              <ManageUser />
            </RequireAuth>
          }
        />

        <Route
          path="/admin/allmeals"
          element={
            <RequireAuth userType={usrType}>
              <AllMeals />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/resolve-conflicts"
          element={
            <RequireAuth userType={usrType}>
              <Dashboard />
            </RequireAuth>
          }
        />

        {/* User Routes */}
        <Route
          path="/"
          element={
            <RequireAuth userType={usrType}>
              <UserLogin />
            </RequireAuth>
          }
        />
        <Route
          path="/user/dashboard"
          element={
            <RequireAuth userType={usrType}>
              <UserDashboard />
            </RequireAuth>
          }
        />

        <Route
          path="/user/bookmeal"
          element={
            <RequireAuth userType={usrType}>
              <MealBooking />
            </RequireAuth>
          }
        />
        <Route
          path="/user/allmeals"
          element={
            <RequireAuth userType={usrType}>
              <MyMeals />
            </RequireAuth>
          }
        />

        <Route
          path="/user/create-conflicts"
          element={
            <RequireAuth userType={usrType}>
              <MealBooking />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
