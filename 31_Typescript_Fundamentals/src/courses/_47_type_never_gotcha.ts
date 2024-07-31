export {};
/*------ type never gotcha ------*/

type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const person: Person = {
  name: "Anna",
  study() {
    console.log(`${person.name} is studying`);
  },
  login() {
    console.log(`${person.name} is logging`);
  },
};

function isStudent(person: Person): person is Student {
  // return 'study' in person;
  return (person as Student).study !== undefined;
}

if (isStudent(person)) {
  person.study(); // This is safe because TypeScript knows that 'person' is a Student.
} else {
  // in this case person is type "never" (What ??? LOL ! NO !)
  console.log(person);
}
