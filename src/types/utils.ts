// import { Timestamp } from './firestore'
// Complex types
export interface Dictionary<T> {
  [key: string]: T;
}
export interface NumericDictionary<T> {
  [index: number]: T;
}

export type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};

export interface List<T> {
  [index: number]: T;
  length: number;
}

export type Options = Dictionary<any>;
export type Data = Dictionary<string | number | boolean | null | Date | string[] | number[]>;
export type ArrayJson = (string | number | boolean | Dictionary<any>)[];
export type ObjectJson = Dictionary<string | number | boolean | null | ArrayJson | Dictionary<any>>;
export type Json = string | number | boolean | null | ArrayJson | ObjectJson;

export type SerializedError = Dictionary<any> & {
  code: string;
  originalCode?: string;
  message?: string;
  value?: number;
  options?: Dictionary<any>;
}