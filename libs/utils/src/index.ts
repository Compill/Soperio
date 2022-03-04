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

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Dict<T = any> = Record<string, T>;

export function omit<T extends Dict, K extends keyof T>(object: T, keys: K[])
{
  const result: Dict = {};

  Object.keys(object).forEach((key) =>
  {
    if (keys.includes(key as K)) return;
    result[key] = object[key];
  });

  return result as Omit<T, K>;
}

export function split<T extends Dict, K extends keyof T>(object: T, keys: K[])
{
  const picked: Dict = {};
  const omitted: Dict = {};

  Object.keys(object).forEach((key) =>
  {
    if (keys.includes(key as T[K]))
    {
      picked[key] = object[key];
    }
    else
    {
      omitted[key] = object[key];
    }
  });

  return [picked, omitted] as [{ [P in K]: T[P] }, Omit<T, K>];
}

export function pick<T extends Dict, K extends keyof T>(object: T, keys: K[])
{
  const result = {} as { [P in K]: T[P] };

  keys.forEach((key) =>
  {
    if (key in object)
    {
      result[key] = object[key];
    }
  });

  return result;
}
