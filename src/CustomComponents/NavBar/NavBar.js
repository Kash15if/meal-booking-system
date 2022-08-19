import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logOutFun } from "../../Services/AuthServices";

const NavBar = ({ menu }) => {
  //get usertype from path
  let location = useLocation();
  const pathArray = location.pathname.split("/");
  const userType = pathArray[1];
  const auth = localStorage.getItem("auth");

  //logout fun
  const navigate = useNavigate();
  const handleLogOut = () => {
    const logSuccess = logOutFun();
    navigate("/admin/dashboard", { replace: true });
  };

  //css class for selected Routes
  const activeStyle = {
    color: "white",
    textDecoration: "none",
    margin: "2rem",
  };

  const normalStyle = {
    color: "rgba(244, 255, 244, 0.65)",
    textDecoration: "none",
    margin: "2rem",
  };

  const conditionalBtn = !auth ? (
    userType === "admin" ? (
      <li className={"nav-item "}>
        <a className="nav-link">
          <NavLink
            to="/admin/login"
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            <b>{"Admin Login"}</b>
          </NavLink>
        </a>
      </li>
    ) : (
      <li className={"nav-item "}>
        <a className="nav-link">
          <NavLink
            to="/user/login"
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            <b>{"User Login"}</b>
          </NavLink>
        </a>
      </li>
    )
  ) : (
    <span className="navbar-text">
      <button className="btn btn-danger" onClick={handleLogOut}>
        Log Out
      </button>
    </span>
  );

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-success px-3 py-1">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse py-2" id="navbarText">
        <ul className="navbar-nav me-auto">
          {menu.map((item, index) => (
            <li className={"nav-item " + index === 0 ? "active" : ""}>
              <a className="nav-link">
                <NavLink
                  to={item.compRoute}
                  style={({ isActive }) =>
                    isActive ? activeStyle : normalStyle
                  }
                >
                  <b>{item.compLabel}</b>
                </NavLink>
              </a>
            </li>
          ))}
        </ul>

        <ul className="navbar-nav">{conditionalBtn}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
