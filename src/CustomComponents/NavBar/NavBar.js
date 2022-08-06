import { NavLink } from "react-router-dom";

const NavBar = ({ menu }) => {
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

  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-success px-3 py-1">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          {menu.map((item, index) => (
            <li class={"nav-item " + index === 0 ? "active" : ""}>
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
          {/* <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li> */}
        </ul>
        <span class="navbar-text">
          <button className="btn btn-danger">Log Out</button>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
