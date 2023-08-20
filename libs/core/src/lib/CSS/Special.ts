import { Theme } from "@soperio/theming";
import { StyleProps } from "./utils";


function serializeCss(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  return {
    css: value // Do nothing, return same thing
  }
}

export const SpecialMapping: StyleProps =
{
  css: serializeCss,
}
