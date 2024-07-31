export {};

/*---- types alias ----*/

const john: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "john",
  isActive: true,
};

//

const susan: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "susan",
  isActive: false,
};

//

function createUser(user: { id: number; name: string; isActive: boolean }): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

createUser(john);
createUser(susan);

//---------------------------------- utilizing types alias

type T_User = { id: number; name: string; isActive: boolean };

const john_2: T_User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan_2: T_User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser_2(user: T_User): T_User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

createUser_2(john_2);
createUser_2(susan_2);

//

/** Additional Infos
---------------------- */

type T_StringOrNumber = string | number; // Type alias for string | number

let value: T_StringOrNumber;
value = "hello"; // This is valid
value = 123; // This is also valid

type T_Theme = "light" | "dark"; // Type alias for theme

let theme: T_Theme;
theme = "light"; // This is valid
theme = "dark"; // This is also valid

// Function that accepts the T_Theme type alias
function setTheme(t: T_Theme) {
  theme = t;
}

setTheme("dark"); // This will set the theme to 'dark'
