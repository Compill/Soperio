import { ColorTheme } from "@soperio/react";
import { Config } from "./types";

const config: Config = (theme: ColorTheme, darkMode: boolean) =>
{
  return {
    traits:
    {
      size:
      {
        "sm":
        {
          px: "2",
          py: "1.5",
          fontSize: "sm",
          w: "3",
          h: "3",
        },
        "md":
        {
          px: "2.5",
          py: "1.5",
          fontSize: "md",
          w: "4",
          h: "4",
        },
        "lg":
        {
          fontSize: "lg",
          w: "5",
          h: "5",
        },
        "xl":
        {
          px: "3.5",
          py: "2.5",
          fontSize: "xl",
          w: "6",
          h: "6",
        },
        "x2":
        {
          px: "4",
          py: "2.5",
          fontSize: "x2",
          w: "7",
          h: "7",
        }
      },
      variant:
      {
        default:
        {
          bgColor: theme.background5,
          outline: "none",
          border: "0",
          textColor: "white",
          stateChecked:
          {
            bgColor: theme.default,
          },
          stateDisabled:
          {
            bgOpacity: "40",
            textOpacity: "70",
            cursor: "default"
          }
        },
        outline:
        {
          bgColor: "transparent",
          border: "2",
          borderColor: theme.background5,
          textColor: "transparent",
          stateChecked:
          {
            borderColor: theme.default,
            textColor: theme.default,
          },
          stateDisabled:
          {
            borderOpacity: "40",
            textOpacity: "40",
            cursor: "default"
          }
        },
      },
      shape:
      {
        square: { rounded: "none" },
        default: { rounded: true },
        circle: { rounded: "full" }
      }
    }
  };
}

export default config
