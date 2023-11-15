import { isFunction } from "./lib/assertions";
import { Dict } from "./lib/types";

export * from './lib/assertions';
export * from './lib/colors';
export * from './lib/types';

export type LiteralUnion<T extends U, U = string> = T | (U & { zz_IGNORE_ME?: never; });
export type OrString<T extends string> = LiteralUnion<T, string>;

export function runIfFn<T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T
{
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

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
