/* Dashboard page is inside ProtectedRoute page 
------------------------------------------------ */

// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children, user }) {
//   if (!user) {
//     return <Navigate to="/" />;
//   }
//   return children;
// }

//-------------------------------------------------------------

/* Dashboard page is children of ProtectedRoute page 
-------------------------------------------------- */
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ user }) {
  if (!user) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
