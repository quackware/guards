export type NonEmptyArray<T> = [T, ...T[]];

/**
 * Guard for checking if the given {@link val} is included in {@link allowedValues}
 */
export function isIncluded<TValue>(val: unknown, allowedValues: ReadonlyArray<TValue>): val is TValue {
  return allowedValues.includes(val as TValue);
}

/**
 * Guard for checking if the given {@link array} is non empty.
 */
export function isNonEmpty<T>(array: T[]): array is NonEmptyArray<T> {
  return array.length > 0;
}
