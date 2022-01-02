import { ColorTheme } from "@soperio/theming";

export type KeyValueObject<T> = Record<string, T>;
export type StringKeyValueObject = KeyValueObject<string>;

export type Direction = "ltr" | "rtl" | undefined

export interface ColorThemes
{
  default: ColorTheme,
  [k: string]: ColorTheme;
}

export interface RootColors
{
  "text-color-1": string,
  "text-color-2": string,
  "text-color-3": string,
  "text-color-4": string,
  "text-color-disabled": string,

  // Light text colors if light theme, dark colors if dark theme
  "text-color-inverse-1": string,
  "text-color-inverse-2": string,
  "text-color-inverse-3": string,
  "text-color-inverse-4": string,
  "text-color-inverse-disabled": string,

  // Light background colors if light theme, dark colors if dark theme
  "bg-color-1": string,
  "bg-color-2": string,
  "bg-color-3": string,
  "bg-color-4": string,
  "bg-color-5": string,
  // Ex: the background color of a disabled text input
  "bg-color-disabled": string,
  // Used to separate sections of your app
  // Example
  // The border between the left sidebar and the main content
  // Or the header and the subheader and the main content
  // Or the buttons of a toolbar
  "border-color-0": string,
  "border-color-1": string,
  "border-color-disabled": string,

  "shadow-color": string,
  [k: string]: string;
}
