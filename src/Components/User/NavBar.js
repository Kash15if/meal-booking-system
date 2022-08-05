import { useState } from "react";
import NavBar from "../../CustomComponents/NavBar/NavBar";

const ClientNav = () => {
  const [menu, setMenu] = useState([
    { compRoute: "/user/login", compLabel: "Login" },
    { compRoute: "/user/dashboard", compLabel: "Dashboard" },

    { compRoute: "/user/bookmeal", compLabel: "Book Meal" },
    { compRoute: "/user/allmeals", compLabel: "My Meals" },
    { compRoute: "/user/create-conflicts", compLabel: "Create Conflicts" },
  ]);
  return <NavBar menu={menu} />;
};

export default ClientNav;