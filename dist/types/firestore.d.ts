export declare type DocumentData = {
    [field: string]: any;
};
export declare type SortDirection = 'asc' | 'desc';
export declare type WhereAliasOperator = 'lt' | 'lte' | 'eq' | 'gte' | 'gt';
export declare type WhereFilterOp = '<' | '<=' | '==' | '>=' | '>' | 'array-contains' | 'in' | 'array-contains-any';
export interface Timestamp {
    readonly seconds: number;
    readonly nanoseconds: number;
    toDate(): Date;
    toMillis(): number;
    isEqual(other: Timestamp): boolean;
}
