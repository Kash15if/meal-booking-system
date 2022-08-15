import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

import "./LoginForm.css";
import LogoImg from "../../images/login.svg";

const LoginForm = ({
  header,
  handleAuth,
  userType,
  loginCreds,
  setLoginCreds,
}) => {
  //
  //handle any change in forms
  const handleChange = (e) => {
    setLoginCreds({
      ...loginCreds,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleAuth();
    // console.log("handle submt");
  };

  return (
    <div className="boxLogin container">
      <h4 style={{ textAlign: "center", marginTop: "1rem" }}>{header}</h4>
      <form className="formLogin" onSubmit={handleSubmit}>
        <img src={LogoImg} alt="" class="profileLogo" />

        <div className="form-group fgLogin">
          <label for="email">Email address:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            id="user"
            value={loginCreds.user}
            onChange={handleChange}
          />
        </div>
        <div className="form-group fgLogin">
          <label for="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
            value={loginCreds.password}
            onChange={handleChange}
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
