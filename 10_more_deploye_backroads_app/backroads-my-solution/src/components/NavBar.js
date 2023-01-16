import React from "react";
import logo from "./../images/logo.svg";
import InternalPagesLinks from "./../components/Links/InternalPagesLinks";
import ExternalPagesLinks from "./../components/Links/ExternalPagesLinks";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <InternalPagesLinks
          ulClassName="nav-links"
          ulId="nav-links"
          liClassName="nav-link"
        />

        <ExternalPagesLinks
          ulClassName="nav-icons"
          anchorClassName="nav-icon"
        />
      </div>
    </nav>
  );
}

export default NavBar;
