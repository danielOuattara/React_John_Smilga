import React from "react";
import { externalLinksData } from "../../data/externalLinksData";
import ExternalPagesLinksItems from "./ExternalPagesLinksItems";

function ExternalPagesLinks(props) {
  return (
    <>
      <ul className={props.ulClassName}>
        {externalLinksData.map((link) => (
          <ExternalPagesLinksItems
            key={link.id}
            href={link.href}
            anchorClassName={props.anchorClassName}
            icon={link.icon}
          />
        ))}
      </ul>
    </>
  );
}

export default ExternalPagesLinks;
