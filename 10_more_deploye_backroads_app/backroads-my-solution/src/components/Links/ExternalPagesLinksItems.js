import React from "react";

function ExternalPagesLinksItems(props) {
  return (
    <li>
      <a
        href={props.href}
        target="_blank"
        className={props.anchorClassName}
        rel="noreferrer"
      >
        <i className={props.icon}></i>
      </a>
    </li>
  );
}

export default ExternalPagesLinksItems;
