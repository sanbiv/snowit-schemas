export interface Dictionary<T> {
    [key: string]: T;
}
export interface NumericDictionary<T> {
    [index: number]: T;
}
export declare type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};
export interface List<T> {
    [index: number]: T;
    length: number;
}
export declare type Options = Dictionary<any>;
export declare type Data = Dictionary<string | number | boolean | null | Date | string[] | number[]>;
export declare type ArrayJson = (string | number | boolean | Dictionary<any>)[];
export declare type ObjectJson = Dictionary<string | number | boolean | null | ArrayJson | Dictionary<any>>;
export declare type Json = string | number | boolean | null | ArrayJson | ObjectJson;
export declare type SerializedError = Dictionary<any> & {
    code: string;
    originalCode?: string;
    message?: string;
    value?: number;
    options?: Dictionary<any>;
};
