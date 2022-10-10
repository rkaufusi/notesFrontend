import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  let value = true;
  if (!value) return <Navigate to="/" />;
  return children;
};

export default ProtectedRoute;
