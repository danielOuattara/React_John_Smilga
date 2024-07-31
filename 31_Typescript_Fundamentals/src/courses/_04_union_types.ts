export {};
/*-------------  union type  ----------------- */

let tax: number | string = 10;
tax = 100;
tax = "100";

let requestStatus: "pending" | "success" | "error" = "pending";
