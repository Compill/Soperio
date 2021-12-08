import { ColorTheme, ComponentTheme, SoperioComponent } from "@soperio/core";
import { Soperio } from "./Soperio";

export function getStyledConfig<T extends any>(themeProp: ComponentTheme | undefined, config: (theme: ColorTheme) => T, component = ""): T | any
{
    if (!themeProp)
        return {};

    const theme = Soperio.getTheme(themeProp, component);

    if (!theme)
        return {};

    return config(theme);
}

export function sanitizeProps<T>(props: T | undefined, ...toRemove: (keyof T)[]): SoperioComponent
{
  if (!props)
    return {};

  const sanitizedProps = { ...props };

  toRemove.forEach(key => delete sanitizedProps[key]);

  return sanitizedProps;
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
