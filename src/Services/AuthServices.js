import { useLocation, Navigate } from "react-router-dom";
import axios from "axios";

export function RequireAuth({ children, userType }) {
  let token = localStorage.getItem("token");
  let auth = localStorage.getItem("auth");

  let location = useLocation();

  if (!auth) {
    if (userType === "admin") {
      return <Navigate to="/admin/login" state={{ from: location }} replace />;
    } else {
      return <Navigate to="/user/login" state={{ from: location }} replace />;
    }
  }

  return children;
}

export async function logInFun(endpint, user, password) {
  try {
    const res = await axios({
      method: "post",
      url: endpint,
      data: {
        user: user,
        password: password,
      },
    });

    const data = res.data;

    // firstdelete old datas
    // admin, token, name
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    localStorage.removeItem("name");
    localStorage.removeItem("auth");

    // add user login , token and other details to localstorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("admin", data.admin);
    localStorage.setItem("name", data.name);
    localStorage.setItem("auth", data.auth);

    return true;
  } catch (error) {
    console.log(error);
    let warningString = "";
    if (error.response.status === 405) {
      warningString = "Wrong password , Try again!";
    } else {
      warningString = "No user with this Id found";
    }

    alert(warningString);
  }

  return false;
}

export function logOutFun({ user, tokeon }) {
  // delete all datats from locastorage
}

export function CheckIfNoAuth({ children, userType }) {
  let token = localStorage.getItem("token");
  let auth = localStorage.getItem("auth");

  let location = useLocation();

  if (auth) {
    if (userType === "admin") {
      return (
        <Navigate to="/admin/dashboard" state={{ from: location }} replace />
      );
    } else {
      return (
        <Navigate to="/user/dashboard" state={{ from: location }} replace />
      );
    }
  }

  return children;
}
