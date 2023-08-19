import { Theme } from "@soperio/theming";
import { StyleProps } from "./utils";
import { serializeStyles } from "@emotion/serialize"


function serializeCss(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  return {
    css: serializeStyles([value]).styles
  }
}

export const SpecialMapping: StyleProps =
{
  css: serializeCss,
}
