// //
// //---------------------- 1 : Classic case
// import { useContext } from "react";
// import { NavbarContext } from "./Navbar";

// export default function UserContainer() {
//   const { user, logout, isLoggedIn, setIsLoggedIn } = useContext(NavbarContext);

//   return (
//     <div className="user-container">
//       {user ? (
//         <>
//           <p>Hello There, {user.name.toUpperCase()}</p>
//           <button type="button" className="btn" onClick={logout}>
//             logout
//           </button>
//         </>
//       ) : (
//         <p>Please Login</p>
//       )}

//       <button
//         type="button"
//         className="btn"
//         onClick={() => setIsLoggedIn(!isLoggedIn)}
//       >
//         toggle
//       </button>

//       <p> {isLoggedIn ? "log out" : " login"}</p>
//     </div>
//   );
// }

//----------------------------------------------------------------------

//
// //---------------------- 2 : John's technic: using a custom hook to handle context
//
import { useAppContext } from "./Navbar";

export default function UserContainer() {
  const { user, logout, isLoggedIn, setIsLoggedIn } = useAppContext();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}

      <button
        type="button"
        className="btn"
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        toggle
      </button>

      <p> {isLoggedIn ? "log out" : " login"}</p>
    </div>
  );
}
