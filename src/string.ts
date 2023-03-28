function checkEmptyWithTrim(val: string, trim: boolean) {
  return trim ? val.trim() === "" : val === "";
}

/** Guard for checking if the given string {@link val} is falsy. */
export function isFalsey(val: string | undefined | null, trim: boolean = true): val is undefined | null | "" {
  return val == null || checkEmptyWithTrim(val, trim);
}

/** Guard for checking if the given string {@link val} is truthy. */
export function isTruthy(
  val: string | undefined | null,
  /** If the val should be trimmed before checking if it's empty. */
  trim: boolean = true,
): val is string {
  return val != null && !checkEmptyWithTrim(val, trim);
}
