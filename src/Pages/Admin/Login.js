//Login Form
import LoginForm from "../../CustomComponents/Forms/LoginForm";
import { logInFun } from "../../Services/AuthServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [loginCreds, setLoginCreds] = useState({
    user: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginSuccess = await logInFun(
      process.env.REACT_APP_BASE_URL_ADMIN + "login",
      loginCreds.user,
      loginCreds.password
    );

    if (loginSuccess) {
      navigate("/admin/dashboard", { replace: true });
    }
  };

  return (
    <div>
      <LoginForm
        header="Admin Login"
        userType={"admin"}
        loginCreds={loginCreds}
        setLoginCreds={setLoginCreds}
        handleAuth={handleLogin}
      />
      ;
    </div>
  );
};

export default AdminLogin;
