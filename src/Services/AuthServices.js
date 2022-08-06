export function RequireAuth({ children, userType }) {
  //   let auth = useAuth();
  //   let location = useLocation();

  if (userType !== "admin") {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    // return <Navigate to="/login" state={{ from: location }} replace />;
    console.log("forlop");
  }

  return children;
}
