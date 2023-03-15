// import { createContext, useContext, useState } from "react";
// import NavLinks from "./NavLinks";

// // returns two components
// // Provider - wrap return in Parent Component
// // Consumer - replaced by useContext() hook

// export const NavbarContext = createContext();

// export default function Navbar() {
//   const [user, setUser] = useState({ name: "bob" });
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <NavbarContext.Provider value={{ user, logout, isLoggedIn, setIsLoggedIn }}>
//       <nav className="navbar">
//         <h5>CONTEXT API</h5>
//         <NavLinks />
//       </nav>
//     </NavbarContext.Provider>
//   );
// }

//
// //---------------------- 2 : John's technic: using a custom hook to handle context
//

import { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";

// returns two components
// Provider - wrap return in Parent Component
// Consumer - replaced by useContext() hook

const NavbarContext = createContext();

// custom hook
export const useAppContext = () => useContext(NavbarContext);

export default function Navbar() {
  const [user, setUser] = useState({ name: "bob" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout, isLoggedIn, setIsLoggedIn }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}
