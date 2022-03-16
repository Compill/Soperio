import { ColorTheme } from "@soperio/theming";
import { Config } from "./types";

const config: Config = (theme: ColorTheme, darkMode: boolean) =>
{
  return {
    defaultProps:
    {
      thickness: "2px",
      progress: 75
    },
    defaultTraits:
    {
      variant: "default",
      size: "md"
    },
    traits:
    {
      size: {
        "sm":
        {
          w: "4",
          h: "4",
          border: "2",
        },
        "md":
        {
          w: "5",
          h: "5",
          border: "2"
        },
        "lg":
        {
          w: "6",
          h: "6",
          border: "2"
        },
        "xl":
        {
          w: "7",
          h: "7",
          border: "2"
        },
        "x2":
        {
          w: "8",
          h: "8",
          border: "2"
        }
      },
      variant:
      {
        default:
        {
          textColor: theme.default,
          trackColor: "transparent"
        },
        track:
        {
          textColor: theme.default,
          trackColor: theme.light
        },
      },
    }
  };
}

export default config
