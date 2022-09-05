export type KeyValueObject<T> = Record<string, T>;
export type StringKeyValueObject = KeyValueObject<string>;

export type GlobalStyles = any

export type Direction = "ltr" | "rtl" | undefined

export interface RootColors
{
  [k: string]: string;
}
