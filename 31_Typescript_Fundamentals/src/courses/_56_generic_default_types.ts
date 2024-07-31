export {};
/*------ generic default types ------*/

/**
 * Initially StoredData accept `string` type by `default` on definition.
 * And on usage, it can accept over type.
 */

interface StoreData<T = string> {
  data: Array<T>;
}

//--------------------------------

const storedStrings: StoreData = {
  data: [`one`, `two`, `three`],
};
console.log("storedStrings = ", storedStrings);

//--------------------------------

const storedNumbers: StoreData<number> = {
  data: [1, 2, 3],
};
console.log("storedNumbers = ", storedNumbers);

//--------------------------------

interface StoreData_2<T = any> {
  data: Array<T>;
}
const randomStuff: StoreData_2 = {
  data: ["random", 1],
};
console.log("randomStuff = ", randomStuff);

//------------------------------------------ other case

import axios, {
  AxiosRequestConfig,
  AxiosResponseHeaders,
  InternalAxiosRequestConfig,
  RawAxiosResponseHeaders,
} from "axios";
const url = `some_url`;

// Axios interfaces here learning generic default value
// Errors are OK !
// 1:
export class Axios {
  get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
}

// 2
export interface AxiosResponse<T = any, D = any> {
  data: T;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: InternalAxiosRequestConfig<D>;
  request?: any;
}

const { data } = await axios.get(url);
console.log(data);
axios.get<{ name: string }[]>(url);
