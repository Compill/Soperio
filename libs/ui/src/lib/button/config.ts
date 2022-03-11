import { ColorTheme } from "@soperio/theming";
import { isDark } from "@soperio/utils";
import { Config } from "./types";

const config: Config = (theme: ColorTheme, darkMode: boolean) =>
{
  return {
    defaultProps: {

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
          bgColor: /*darkMode ? "#ff00ff" : */theme.default,
          hover_bgColor: theme.defaultHover,
          textColor: isDark(theme.default) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
          outline: "none",
          border: "0",
          stateSelected:
          {
            bgColor: theme.defaultActive,
            hover_bgColor: theme.defaultActive,
          },
          stateDisabled:
          {
            bgColor: theme.default,
            hover_bgColor: theme.default,
            bgOpacity: "70",
            // hover_bgOpacity: "70",
            textOpacity: "85",
            cursor: "default"
          },
          stateSelectedDisabled:
          {
            bgColor: theme.defaultActive
          }
        },
        light:
        {
          // bgColor: theme.light,
          bgColor: theme.default,
          bgOpacity: darkMode ? "30" : "15",
          outline: "none",
          border: "0",
          textColor: darkMode ? theme.textDark4 : theme.defaultActive,
          hover_bgColor: theme.default,
          hover_bgOpacity: "100",
          hover_textColor: isDark(theme.default) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
          stateSelected:
          {
            bgColor: theme.defaultActive,
            textColor: isDark(theme.defaultActive) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
            hover_bgColor: theme.defaultActive,
          },
          stateDisabled:
          {
            bgOpacity: "5",
            // hover_bgOpacity: "5",
            textColor: theme.defaultActive,
            hover_textColor: theme.defaultActive,
            textOpacity: "50",
            cursor: "default"
          },
          stateSelectedDisabled:
          {
            bgColor: theme.defaultActive,
            textColor: theme.textLight1,
            bgOpacity: "70",
            textOpacity: "85",
          }
        },
        link:
        {
          px: "0",
          py: "0",
          p: "0",
          appearanceNone: true,
          bgColor: "transparent",
          textColor: theme.default,
          hover_textDecoration: "underline",
          outline: "none",
          stateSelected:
          {
            textDecoration: "underline",
          },
          stateDisabled:
          {
            textOpacity: "60",
            hover_textDecoration: "no-underline",
            cursor: "default"
          }
        },
        outline:
        {
          bgColor: "transparent",
          border: "2",
          borderColor: theme.default,
          textColor: theme.default,
          hover_bgColor: theme.default,
          hover_textColor: isDark(theme.default) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
          stateSelected:
          {
            bgColor: theme.default,
            textColor: isDark(theme.default) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
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
          hover_bgColor: theme.default,
          hover_bgOpacity: darkMode ? "30" : "15",
          hover_textColor: darkMode ? theme.textDark4 : theme.defaultActive,
          outline: "none",
          border: "0",
          stateSelected:
          {
            bgColor: theme.light,
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
