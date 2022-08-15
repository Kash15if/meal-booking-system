import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useLogIn } from "../../Services/AuthServices";

//Login Form
import LoginForm from "../../CustomComponents/Forms/LoginForm";

const LogIn = () => {
  const handleLogout = () => {
    console.log("logOutclicked");
  };

  return <LoginForm header="Admin Login" userType="admin" />;
};

export default LogIn;
