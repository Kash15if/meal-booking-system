import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./LoginForm.css";
import LogoImg from "../../images/login.svg";

const LoginForm = ({ header, handleAuth, handleLogout, userType }) => {
  const [loginCreds, setLoginCreds] = useState({
    user: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginCreds({
      ...loginCreds,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSubmit = async () => {
    const userIn = loginCreds.user;
    const passIn = loginCreds.password;
    const res = await axios({
      method: "post",
      url: process.env.REACT_APP_AUTH_ROUTE + "/" + userType + "/login",
      data: {
        user: {
          user: userIn,
          password: passIn,
        },
      },
    });

    if (res.status !== 200) {
      logOut();
      return;
    }

    console.log(res.data);
    const data = res.data;

    // const timeRemainingStored = localStorage.getItem("timeRemaining");

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", data.user);

    // if (!timeRemainingStored || timeRemainingStored <= 0) {
    //   localStorage.setItem("timeRemaining", data.totaltime * 60);
    // }

    handleAuth({ user: data.user, token: data.token });
    console.log(process.env.REACT_APP_AUTH_ROUTE + "/login");
  };

  return (
    <div className="boxLogin container">
      <h4 style={{ textAlign: "center", marginTop: "1rem" }}>{header}</h4>
      <form className="formLogin">
        <img src={LogoImg} alt="" class="profileLogo" />

        <div className="form-group fgLogin">
          <label for="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="user"
          />
        </div>
        <div className="form-group fgLogin">
          <label for="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
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
