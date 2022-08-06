import { useLocation, Navigate } from "react-router-dom";

export function RequireAuth({ children, userType }) {
  let auth = true;
  let location = useLocation();

  if (userType === "admin" && auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

    // navigate(from, { replace: true });
    // After login replace

    return <Navigate to="/admin/login" state={{ from: location }} replace />;
    console.log("forlop");
  } else if (userType !== "user" && auth) {
    return <Navigate to="/user/login" state={{ from: location }} replace />;
  }

  return children;
}
