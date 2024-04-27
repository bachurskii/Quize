import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const user = useSelector((state) => state.session.user);
  return user ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
