// import { memo } from "react";

function Person({ name, id, removePerson }) {
  return (
    <div>
      <h4>
        {name}{" "}
        <button className="btn" onClick={() => removePerson(id)}>
          remove
        </button>
      </h4>
    </div>
  );
}

// export default memo(Person);
export default Person;
