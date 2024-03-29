import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { RequireAuth, CheckIfNoAuth } from "./Services/AuthServices";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//admin pages
import AdminDashboard from "./Pages/Admin/Dashboard";
import AdminLogin from "./Pages/Admin/Login";
import ManageMenu from "./Pages/Admin/Menu";
import ManageUser from "./Pages/Admin/User";

//user pages
import UserDashboard from "./Pages/Users/Dasgboard";
import UserLogin from "./Pages/Users/Login";

import Errorpage from "./Pages/Others/404";

//testing comps
import MenuTab from "./Components/Admin/ManageTabs/MenuTab";
import ManageExpense from "./Pages/Admin/Expenses";
import NumberCards from "./CustomComponents/Cards/NumberCards";
import MealBooking from "./Components/User/MealBooking";
import Dashboard from "./Pages/Admin/Dashboard";
import MyMeals from "./Components/User/YouMeals";
import AdminNav from "./Components/Admin/Navbar";
import ClientNav from "./Components/User/NavBar";
import { useEffect, useState } from "react";
import AllMeals from "./Pages/Admin/AllMeals";
import BookSnacks from "./Pages/Users/SnacksBooking";
import PostBookingTab from "./Pages/Admin/PostBooking";
function App() {
  const [usrType, setUserType] = useState("user");

  var navbar = document.getElementsByClassName("navbar-collapse");
  var navbarName = document.getElementsByClassName("nav-link");

  navbarName.onclick = function () {
    navbar.style.display = "none";
  };

  let location = useLocation();

  useEffect(() => {
    let routeArray = location.pathname.split("/");

    let tmpUser = routeArray[1] || "user";
    // console.log(tmpUser);
    setUserType(tmpUser);
  }, [location]);

  return (
    <div className="App">
      {usrType === "admin" ? <AdminNav /> : <ClientNav />}
      <Routes>
        {/* Admin Routes */}

        <Route
          index
          element={
            <CheckIfNoAuth userType={usrType}>
              <UserLogin />
            </CheckIfNoAuth>
          }
        />

        <Route
          path="/admin/login"
          element={
            <CheckIfNoAuth userType={usrType}>
              <AdminLogin />
            </CheckIfNoAuth>
          }
        />
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
          path="/admin/expenses"
          element={
            <RequireAuth userType={usrType}>
              <ManageExpense />
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
              <Errorpage />
            </RequireAuth>
          }
        />

        <Route
          path="/admin/post-booking"
          element={
            <RequireAuth userType={usrType}>
              <PostBookingTab />
            </RequireAuth>
          }
        />

        {/* User Routes */}
        <Route
          path="/user/login"
          element={
            <CheckIfNoAuth userType={usrType}>
              <UserLogin />
            </CheckIfNoAuth>
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
          path="/user/booksnacks"
          element={
            <RequireAuth userType={usrType}>
              <BookSnacks />
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
              <Errorpage />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
