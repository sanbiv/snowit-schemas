export type DocumentData = {[field: string]: any};

export type SortDirection = 'asc' | 'desc'
export type WhereAliasOperator = 'lt' | 'lte' | 'eq' | 'gte' | 'gt';
// export { WhereFilterOp };
export type WhereFilterOp = '<' | '<=' | '==' | '>=' | '>' | 'array-contains' | 'in' | 'array-contains-any';


export interface Timestamp {
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @return A new `Timestamp` representing the current date.
   */
  // static now(): Timestamp;

  // /**
  //  * Creates a new timestamp from the given date.
  //  *
  //  * @param date The date to initialize the `Timestamp` from.
  //  * @return A new `Timestamp` representing the same point in time as the
  //  * given date.
  //  */
  // static fromDate(date: Date): Timestamp;

  // /**
  //  * Creates a new timestamp from the given number of milliseconds.
  //  *
  //  * @param milliseconds Number of milliseconds since Unix epoch
  //  * 1970-01-01T00:00:00Z.
  //  * @return A new `Timestamp` representing the same point in time as the
  //  * given number of milliseconds.
  //  */
  // static fromMillis(milliseconds: number): Timestamp;

  // /**
  //  * Creates a new timestamp.
  //  *
  //  * @param seconds The number of seconds of UTC time since Unix epoch
  //  * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
  //  * 9999-12-31T23:59:59Z inclusive.
  //  * @param nanoseconds The non-negative fractions of a second at nanosecond
  //  * resolution. Negative second values with fractions must still have
  //  * non-negative nanoseconds values that count forward in time. Must be from
  //  * 0 to 999,999,999 inclusive.
  //  */
  // constructor(seconds: number, nanoseconds: number);

  /**
   * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
   */
  readonly seconds: number;

  /** The non-negative fractions of a second at nanosecond resolution. */
  readonly nanoseconds: number;

  /**
   * Returns a new `Date` corresponding to this timestamp. This may lose
   * precision.
   *
   * @return JavaScript `Date` object representing the same point in time as
   * this `Timestamp`, with millisecond precision.
   */
  toDate(): Date;

  /**
   * Returns the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   *
   * @return The point in time corresponding to this timestamp, represented as
   * the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis(): number;

  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other The `Timestamp` to compare against.
   * @return 'true' if this `Timestamp` is equal to the provided one.
   */
  isEqual(other: Timestamp): boolean;
}