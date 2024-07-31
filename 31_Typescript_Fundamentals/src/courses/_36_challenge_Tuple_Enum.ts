export {};

/*------- challenge Tuple Enum ---------*/

enum EnumUserRole {
  Admin,
  Manager,
  Employee,
}

type TUser = {
  id: number;
  name: string;
  role: EnumUserRole;
  contact: [string, string]; // [email, phone]
};

// function createUser(user: TUser): TUser {
//   return user;
// }

const createUser = (user: TUser): TUser => user;

//-------------------------------
const user1 = createUser({
  id: 1,
  name: "John Doe",
  role: EnumUserRole.Employee,
  contact: ["john_doe@email.com", "555-1-345-78-98"],
});

console.log("user1 = ", user1);

//-------------------------------
const user2 = createUser({
  id: 1,
  name: "Anna Lee",
  role: EnumUserRole.Manager,
  contact: ["an_lee_na@email.com", "555-1-244-78-03"],
});

console.log("user2 = ", user2);

//-------------------------------
const user3 = createUser({
  id: 1,
  name: "Roger Regor",
  role: EnumUserRole.Admin,
  contact: ["rog_reg@email.com", "577-7-177-77-77"],
});

console.log("user3 = ", user3);
