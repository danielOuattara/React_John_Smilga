export {};

/*---- types alias challenge ----*/

type T_Employee = {
  id: number;
  name: string;
  department: string;
};

type T_Manager = {
  id: number;
  name: string;
  employees: T_Employee[];
};

type T_Staff = T_Employee | T_Manager;

function printStaffDetails(staff: T_Staff) {
  /* mine */
  // if (Object.keys(staff).includes("employees")) { }

  if ("employees" in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`,
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`,
    );
  }
}

const alice: T_Employee = {
  id: 23,
  name: "Alice",
  department: "Accounting",
};

const steeve: T_Employee = {
  id: 34,
  name: "Steeve",
  department: "Security",
};

const bob: T_Manager = {
  id: 11,
  name: "Bob",
  employees: [alice, steeve],
};

printStaffDetails(alice);
printStaffDetails(steeve);
printStaffDetails(bob);
