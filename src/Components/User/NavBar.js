import { useState } from "react";
import NavBar from "../../CustomComponents/NavBar/NavBar";

const ClientNav = () => {
  const [menu, setMenu] = useState([
    { compRoute: "/user/dashboard", compLabel: localStorage.getItem("name") },
    { compRoute: "/user/dashboard", compLabel: "Dashboard" },
    { compRoute: "/user/bookmeal", compLabel: "Lunch" },
    { compRoute: "/user/booksnacks", compLabel: "Snacks" },
    { compRoute: "/user/allmeals", compLabel: "My Meals" },
    { compRoute: "/user/create-conflicts", compLabel: "Create Conflicts" },
  ]);
  return <NavBar menu={menu} />;
};

export default ClientNav;
