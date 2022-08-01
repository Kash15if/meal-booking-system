import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./LoginForm.css";
import LogoImg from "../../images/login.svg";

const LoginForm = () => {
  return (
    <div className="boxLogin container">
      <form className="formLogin">
        <img src={LogoImg} alt="" class="profileLogo" />

        <div className="form-group fgLogin">
          <label for="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
          />
        </div>
        <div className="form-group fgLogin">
          <label for="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="pwd"
          />
        </div>
        <div class="form-group form-check fgLogin">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" /> Remember me
          </label>
        </div>

        <button type="submit" className="btn btn-success btnLogin fgLogin">
          Submit
        </button>

        <br />
        <br />
      </form>
    </div>
  );
};

export default LoginForm;
