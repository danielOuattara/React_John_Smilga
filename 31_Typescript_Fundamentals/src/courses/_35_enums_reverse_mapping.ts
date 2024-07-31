export {};

/*------- enums: reverse mapping ------- */

enum EnumResponseStatus {
  Success = 200,
  Error = "Error",
}

console.log("EnumResponseStatus = ", EnumResponseStatus);

Object.values(EnumResponseStatus).forEach((value) => {
  console.log(value);
});

console.log("-------------------------");

enum EnumResponseStatus2 {
  Success = 200,
  Error = 500,
}

console.log("EnumResponseStatus2 = ", EnumResponseStatus2);

Object.values(EnumResponseStatus2).forEach((value) => {
  console.log(value);
});

console.log("-----");

Object.values(EnumResponseStatus2).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  }
});

console.log("-------------------------");

enum EnumResponseStatus3 {
  Success = "Success",
  Error = "Error",
}
console.log("EnumResponseStatus3 = ", EnumResponseStatus3);

Object.values(EnumResponseStatus3).forEach((value) => {
  console.log(value);
});

console.log("-------------------------");

enum NumericEnum {
  Member = 1,
}

enum StringEnum {
  Member = "Value",
}

let numericValue1: NumericEnum = NumericEnum.Member; // OK
console.log(numericValue1); // 1

let numericValue2: NumericEnum = 1; // OK
console.log(numericValue2); // 1

let stringValue1: StringEnum = StringEnum.Member; // OK
console.log(stringValue1);

// let stringEnumValue: StringEnum = "Value"; // This is not allowed

console.log("-------------------------");

interface IServerResponse {
  result: EnumResponseStatus;
  data: string[];
}

//---

function getServerResponseOK(): IServerResponse {
  return {
    result: EnumResponseStatus.Success,
    data: ["first item", "second item"],
  };
}

const success_response: IServerResponse = getServerResponseOK();
console.log(success_response);

//----

function getServerResponseFail(): IServerResponse {
  return {
    result: EnumResponseStatus.Error,
    data: ["first item", "second item"],
  };
}

const err_response: IServerResponse = getServerResponseFail();
console.log(err_response);
