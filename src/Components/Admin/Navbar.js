import { useState } from "react";
import NavBar from "../../CustomComponents/NavBar/NavBar";

const AdminNav = () => {
  const [menu, setMenu] = useState([
    { compRoute: "/admin/login", compLabel: "Login" },
    { compRoute: "/admin/dashboard", compLabel: "Dashboard" },
    { compRoute: "/admin/users", compLabel: "Manage Users" },
    { compRoute: "/admin/menus", compLabel: "Manage Menu" },
    { compRoute: "/admin/allmeals", compLabel: "AllMeals" },
    { compRoute: "/admin/report", compLabel: "Report" },
  ]);

  return <NavBar menu={menu} />;
};

export default AdminNav;
