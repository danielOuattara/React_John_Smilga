export {};

/*--- function object excess property check ---*/

function createStudent(student: { id: number; name: string }) {
  console.log(
    `Welcome to the course ${student.name.toUpperCase()}. Your id is ${
      student.id
    }`,
  );
}

/**
 * case 1: here 'student' parameter in 'createStudent' is referenced
 * by an object. No warning on excess property
 */

const newStudent = {
  id: 5,
  name: "anna",
  email: "anna@email.com",
};
createStudent(newStudent); // done, no warning, even if not correct!

/**
 * case 2: here 'student' parameter in 'createStudent' is passed
 * an inline properties or object literals,  AND must conform to student type definition
 */
createStudent({ id: 1, name: "bob", email: "bob@gmail.com" }); // new !
