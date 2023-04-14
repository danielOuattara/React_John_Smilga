import { Outlet } from "react-router-dom";
import { StyledNavbar, Footer } from "./../components";

export default function SharedLayout() {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
