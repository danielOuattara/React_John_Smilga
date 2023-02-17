import { people } from "./../../../data";
import Person from "./Person";

export default function List() {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
}
