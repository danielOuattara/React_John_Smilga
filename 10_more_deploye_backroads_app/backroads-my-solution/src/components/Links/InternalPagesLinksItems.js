import React from "react";

function InternalPagesLinksItems(props) {
  return (
    <li className={props.liClassName}>
      <a href={props.href} className={props.anchorClassName}>
        {props.text}
      </a>
    </li>
  );
}

export default InternalPagesLinksItems;
