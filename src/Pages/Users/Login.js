//Login Form
import LoginForm from "../../CustomComponents/Forms/LoginForm";
import { logInFun } from "../../Services/AuthServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Alerts from "./../../CustomComponents/Alerts/Alerts.js";

const UserLogin = () => {
  const [loginCreds, setLoginCreds] = useState({
    user: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginSuccess = await logInFun(
      process.env.REACT_APP_BASE_URL_USER + "login",
      loginCreds.user,
      loginCreds.password
    );

    if (loginSuccess) {
      navigate("/user/dashboard", { replace: true });
    } else {
    }
  };

  return (
    <div>
      <LoginForm
        header="User Login"
        userType={"user"}
        loginCreds={loginCreds}
        setLoginCreds={setLoginCreds}
        handleAuth={handleLogin}
      />
      ;
    </div>
  );
};

export default UserLogin;
