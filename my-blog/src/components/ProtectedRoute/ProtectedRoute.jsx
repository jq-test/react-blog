import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {isAuthSelector } from "../../data/auth";
function ProtectedRoute({ children }) {
    // const isAuthenticated = useAuth();
    const isAuthenticated = useSelector(isAuthSelector);

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    
    return children;
  }
  
export default ProtectedRoute;