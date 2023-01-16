import React from "react";
import { internalLinksData } from "../../data/internalLinksData";
import InternalPagesLinksItems from "./InternalPagesLinksItems";

function InternalPagesLinks(props) {
  return (
    <ul className={props.ulClassName} id={props.ulId}>
      {internalLinksData.map((link) => (
        <InternalPagesLinksItems
          key={link.id}
          liClassName={props.liClassName}
          href={link.href}
          anchorClassName={props.anchorClassName}
          text={link.text}
        />
      ))}
    </ul>
  );
}

export default InternalPagesLinks;
