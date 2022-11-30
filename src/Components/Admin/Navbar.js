import { useState } from "react";
import NavBar from "../../CustomComponents/NavBar/NavBar";

const AdminNav = () => {
  const [menu, setMenu] = useState([
    { compRoute: "/admin/dashboard", compLabel: localStorage.getItem("name") },
    { compRoute: "/admin/dashboard", compLabel: "Dashboard" },
    { compRoute: "/admin/expenses", compLabel: "Expenses" },
    { compRoute: "/admin/users", compLabel: "Manage Users" },
    { compRoute: "/admin/menus", compLabel: "Manage Menu" },
    { compRoute: "/admin/allmeals", compLabel: "AllMeals" },
    { compRoute: "/admin/post-booking", compLabel: "Report" },
  ]);

  return <NavBar menu={menu} />;
};

export default AdminNav;
