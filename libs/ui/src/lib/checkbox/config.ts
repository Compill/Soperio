import { ColorTheme } from "@soperio/theming";
import { Config } from "./types";

const config: Config = (theme: ColorTheme, darkMode: boolean) =>
{
  return {
    variants:
    {
      otherNameThanSize:
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
          fontSize: "md",
          w: "20px",
          h: "20px",
        },
        "lg":
        {
          fontSize: "lg",
          w: "24px",
          h: "24px",
        },
        "xl":
        {
          px: "3.5",
          py: "2.5",
          fontSize: "xl"
        },
        "2x":
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
          bgColor: theme.background5,
          outline: "none",
          border: "0",
          textColor: darkMode ? theme.textLight1 : theme.textDark1,
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
