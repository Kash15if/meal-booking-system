import { useState } from "react";
import NavBar from "../../CustomComponents/NavBar/NavBar";

const ClientNav = () => {
  const [menu, setMenu] = useState([
    { compRoute: "/user/create-conflicts", compLabel: "Login" },
    { compRoute: "/", compLabel: "Login" },
  ]);
  return <NavBar menu={menu} />;
};

export default ClientNav;
