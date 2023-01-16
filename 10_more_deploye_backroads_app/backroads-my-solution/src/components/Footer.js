import React from "react";
import InternalPagesLinks from "./../components/Links/InternalPagesLinks";
import ExternalPagesLinks from "./../components/Links/ExternalPagesLinks";

function Footer() {
  return (
    <footer className="section footer">
      <InternalPagesLinks
        ulClassName="footer-links"
        ulId=""
        liClassName=""
        anchorClassName="footer-link"
      />

      <ExternalPagesLinks
        ulClassName="footer-icons"
        anchorClassName="footer-icon"
      />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
