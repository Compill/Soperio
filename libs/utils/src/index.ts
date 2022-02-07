export * from './lib/colors';

export const IS_DEV = process.env.NODE_ENV !== "production";

export type LiteralUnion<T extends U, U = string> = T | (U & { zz_IGNORE_ME?: never; });
export type OrString<T extends string> = LiteralUnion<T, string>;


// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction<T extends Function = Function>(
  value: any,
): value is T
{
  return typeof value === "function";
}

export function runIfFn<T>(
  valueOrFn: T | ((...fnArgs: any[]) => T),
  ...args: any[]
): T
{
  return isFunction(valueOrFn) ? valueOrFn(...args) as T : valueOrFn as T;
}
