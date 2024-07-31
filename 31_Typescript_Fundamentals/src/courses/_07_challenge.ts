export {};

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
console.log("orderStatus = ", orderStatus);

orderStatus = "shipped";
console.log("orderStatus = ", orderStatus);

orderStatus = "delivered";
console.log("orderStatus = ", orderStatus);

//-------------------

let discount: number | string = 20;
console.log("discount = ", discount);

discount = "%20";
console.log("discount = ", discount);

//discount = true; // X Incorrect
