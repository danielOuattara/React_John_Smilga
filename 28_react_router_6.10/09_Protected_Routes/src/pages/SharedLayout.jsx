import { Outlet } from "react-router-dom";
import { StyledNavbar } from "./../components";

export default function SharedLayout() {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
}
