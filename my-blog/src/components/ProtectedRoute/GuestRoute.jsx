import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../data/auth";

function GuestRoute({ children }) {
  const isAuth = useSelector(isAuthSelector);

  if (isAuth) {
    return <Navigate to="/" replace />
  }
  return children;
}

export default GuestRoute;
