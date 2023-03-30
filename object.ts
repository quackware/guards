// deno-lint-ignore-file no-explicit-any
/**
 * Guard for `Object.prototype.hasOwnProperty`
 */
export function hasOwnProperty<Obj extends Record<string, unknown>, Prop extends PropertyKey>(
  value: Obj,
  property: Prop,
): value is Obj & Record<Prop, unknown> {
  return Object.prototype.hasOwnProperty.call(value, property);
}

/** Alias for {@link hasOwnProperty} */
export const has = hasOwnProperty;

/**
 * Guard for checking if the given object {@link obj} has a string property with the name {@link propName}.
 */
export function hasStringProperty<Obj extends Record<string, unknown>, Prop extends keyof Obj>(
  obj: Obj,
  propName: Prop,
): obj is Obj & Record<Prop, string> {
  return propName in obj && typeof obj[propName] === "string";
}

/**
 * Guard for checking if the given object {@link obj} has string properties with the names {@link propNames}
 */
export function hasStringProperties<Obj extends Record<string, unknown>, Prop extends PropertyKey>(
  obj: Obj,
  ...propNames: Prop[]
): obj is Obj & Record<Prop, string> {
  return propNames.every((prop) => {
    return prop in obj && typeof prop === "string";
  });
}

/**
 * Guard for checking if the given {@link x} is an object. Note that this includes arrays.
 */
// deno-lint-ignore ban-types
export function isObject(x: unknown): x is object {
  return x !== null && typeof x === "object";
}

/**
 * Guard for checking if the given {@link x} is a record. Similar to {@link isObject} except it does
 * not include arrays.
 */
export function isRecord(x: unknown): x is Record<string, unknown> {
  return isObject(x) && !Array.isArray(x);
}

/**
 * Guard for checking if the given {@link obj} has a record property with the name {@link propName}
 */
export function hasRecord<Obj extends Record<string, unknown>, Prop extends PropertyKey>(
  obj: Obj,
  propName: Prop,
): obj is Obj & Record<Prop, Record<string, unknown>> {
  return has(obj, propName) && isRecord(obj[propName]);
}

/**
 * Guard for checking if the given {@link obj} has a function property with the name {@link propName}
 */
export function hasFunction<T = any, Prop extends keyof T = any>(obj: any, functionName: Prop): obj is Pick<T, Prop> {
  return obj != null && typeof obj[functionName] === "function";
}
