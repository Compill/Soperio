import { ColorTheme } from "@soperio/react";
import { SurfaceSet } from "libs/theming/src/lib/CSS/Surface";
import { Config } from "./types";

const config/*: Config*/ = (surface: SurfaceSet, darkMode: boolean) =>
{
  return {
    defaultProps: {
      stateDisabled:
      {
        cursor: "default"
      },
    },
    defaultTraits:
    {
      variant: "default",
      corners: "default",
      size: "md"
    },
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
          surfaceVariant: "main",
          border: "0",
        },
        light:
        {
          surfaceVariant: "altHoverMain",
        },
        link:
        {
          surfaceVariant: "mainLayer",
          px: "0",
          py: "0",
          p: "0",
          appearanceNone: true,
          surfaceVariant: "main.layer",
          hover_textDecoration: "underline",

          stateSelected:
          {
            textDecoration: "underline",
          },
          stateDisabled:
          {
            hover_textDecoration: "no-underline",
            cursor: "default"
          }
        },
        outline:
        {
          surfaceVariant: "mainLayer",
          bgColor: "transparent",
          border: "2",
          borderColor: theme.default,
          textColor: theme.default,
          hover_bgColor: theme.default,
          hover_textColor: darkMode ? theme.textDark1 : theme.textLight1, //isDark(theme.default) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
          stateSelected:
          {
            bgColor: theme.default,
            textColor: darkMode ? theme.textDark1 : theme.textLight1, //isDark(theme.default) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
          },
          stateDisabled:
          {
            textOpacity: "70",
            borderOpacity: "70",
            bgOpacity: "70",
            hover_textColor: theme.default,
            hover_bgColor: "transparent",
            cursor: "default"
          },
          stateSelectedDisabled:
          {
            textOpacity: "85"
          }
        },
        borderless:
        {
          bgColor: "transparent",
          textColor: theme.default,
          hover_bgColor: surface.alt.color,
          hover_bgOpacity: darkMode ? "30" : "15",
          hover_textColor: darkMode ? theme.textDark4 : theme.defaultActive,

          border: "0",
          stateSelected:
          {
            bgColor: theme.default,
            bgOpacity: darkMode ? "30" : "15",
          },
          stateDisabled:
          {
            textOpacity: "60",
            bgOpacity: "60",
            hover_bgColor: "transparent",
            hover_textColor: theme.default,
            cursor: "default"
          }
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
