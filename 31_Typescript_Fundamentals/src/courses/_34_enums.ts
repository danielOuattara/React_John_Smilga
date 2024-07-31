export {};

/*------- enums ------- */

enum EnumResponseStatus {
  Success = 200,
  Error = "Error",
}

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
