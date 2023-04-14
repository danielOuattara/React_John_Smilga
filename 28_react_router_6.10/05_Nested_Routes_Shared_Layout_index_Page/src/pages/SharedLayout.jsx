import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./../components";

export default function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
