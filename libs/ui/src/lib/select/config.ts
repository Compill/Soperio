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
          fontSize: "sm"
        },
        "md":
        {
          px: "2.5",
          py: "1.5",
          fontSize: "md"
        },
        "lg":
        {
          px: "3",
          py: "2",
          fontSize: "lg"
        },
        "xl":
        {
          px: "3.5",
          py: "2.5",
          fontSize: "xl"
        },
        "x2":
        {
          px: "4",
          py: "2.5",
          fontSize: "x2"
        }
      },
      variant:
      {
        default:
        {
          border: "2",
          textColor: theme.textDark2,
          fontWeight: "500",
          bgColor: "transparent",
          borderColor: theme.textDark3,
          placeholderColor: theme.textDark4,
        },
        solid:
        {
          border: "0",

          fontWeight: "500",
          textColor: theme.textDark2,
          bgColor: theme.background3,
        },
        underline:
        {
          borderB: "2",
          fontWeight: "500",
          bgColor: theme.background3,
          textColor: theme.textDark2,
          borderColor: theme.textDark3,

          rounded: false
        }
      },
      corners:
      {
        square: {},
        default: { rounded: true },
        pill: { rounded: "full" }
      }
    }
  };
}

export default config
