export {};
/*------ challenge type predicate ------

A type predicate is a function whose return type is 
a special kind of type that can be used to narrow 
down types within conditional blocks. */

type TStudent = {
  name: string;
  study: () => void;
};

type TUser = {
  name: string;
  login: () => void;
};

type TPerson = TStudent | TUser;

//-----------------------

const randomPerson = (): TPerson => {
  return Math.random() > 0.5
    ? { name: "John Doe", study: () => console.log(`student is studying`) }
    : { name: "John Doe", login: () => console.log(`user is logging`) };
};

const person = randomPerson();

console.log(person);

//------------------------------------

/* `isStudent` returns a predicate */

function isStudent(person: TPerson): person is TStudent {
  return "study" in person;
  // OR
  // return (person as TStudent).study !== undefined;
}

if (isStudent(person)) {
  person.study();
} else {
  person.login();
}

//-------------

const john: TStudent = {
  name: "John Doe",
  study() {
    console.log(`${this.name} is studying`);
  },
};
const marie: TUser = {
  name: "Marie Stuart",
  login() {
    console.log(`${this.name} is logging`);
  },
};

john.study();
marie.login();

//---------------

console.log(isStudent(john)); // true
console.log(isStudent(marie)); // false
