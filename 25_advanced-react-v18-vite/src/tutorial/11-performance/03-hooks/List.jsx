import { memo } from "react";
import Item from "./Person";

function List({ people, removePerson }) {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
}

export default memo(List);
