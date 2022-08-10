//Login Form
import LoginForm from "../../CustomComponents/Forms/LoginForm";

const userLogin = () => {
  return (
    <div>
      <LoginForm header="Admin Login" userType={"user"} />;
    </div>
  );
};

export default userLogin;
