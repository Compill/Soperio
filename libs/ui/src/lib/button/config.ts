import { ColorTheme } from "@soperio/theming";
import { darken, isDark, lighten, transparentize } from "@soperio/utils";
import { ButtonConfig } from "./types";

export default function config(theme: ColorTheme, darkMode: boolean): ButtonConfig
{
  return {
    size: {
      "sm": {
        px: "2",
        py: "1.5",
        fontSize: "sm"
      },
      "md": {
        px: "2.5",
        py: "1.5",
        fontSize: "md"
      },
      "lg": {
        px: "3",
        py: "2",
        fontSize: "lg"
      },
      "xl": {
        px: "3.5",
        py: "2.5",
        fontSize: "xl"
      },
      "x2": {
        px: "4",
        py: "2.5",
        fontSize: "x2"
      }
    },
    variant: {
      default: {
        bgColor: /*darkMode ? "#ff00ff" : */theme.default,
        hover_bgColor: theme.defaultHover,
        textColor: isDark(theme.default) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
        outline: "none",
        border: "0",
        selected: {
          bgColor: theme.defaultActive
        },
        disabled: {
          bgColor: theme.default,
          bgOpacity: "70",
          textOpacity: "85",
          cursor: "default"
        },
        selectedDisabled: {
          bgColor: theme.defaultActive
        }
      },
      light: {
        // bgColor: theme.light,
        bgColor: theme.default,
        bgOpacity: darkMode ? "30" : "15",
        outline: "none",
        border: "0",
        textColor: darkMode ? theme.textDark4 : theme.defaultActive,
        hover_bgColor: theme.default,
        hover_textColor: isDark(theme.default) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
        selected: {
          bgColor: theme.defaultActive,
          textColor: isDark(theme.defaultActive) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
          hover_bgColor: theme.defaultActive,
        },
        disabled: {
          bgOpacity: "5",
          textColor: theme.defaultActive,
          textOpacity: "50",
          cursor: "default"
        },
        selectedDisabled: {
          bgColor: theme.defaultActive,
          textColor: theme.textLight1,
          bgOpacity: "70",
          textOpacity: "85",
        }
      },
      link: {
        appearanceNone: true,
        bgColor: "transparent",
        textColor: theme.default,
        hover_textDecoration: "underline",
        outline: "none",
        selected: {
          textDecoration: "underline",
        },
        disabled: {
          textOpacity: "60"
        }
      },
      outline: {
        bgColor: "transparent",
        border: "2",
        borderColor: theme.default,
        textColor: theme.default,
        hover_bgColor: theme.default,
        hover_textColor: isDark(theme.default) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
        selected: {
          bgColor: theme.default,
          textColor: isDark(theme.default) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
        },
        disabled: {
          textOpacity: "70",
          borderOpacity: "70",
          bgOpacity: "70",
          hover_bgColor: "transparent",
        },
        selectedDisabled: {
          textOpacity: "85"
        }
      },
      borderless: {
        bgColor: "transparent",
        textColor: theme.default,
        hover_bgColor: theme.default,
        hover_bgOpacity: darkMode ? "30" : "15",
        hover_textColor: darkMode? theme.textDark4 : theme.defaultActive,
        outline: "none",
        border: "0",
        selected: {
          bgColor: theme.light,
        },
        disabled: {
          textOpacity: "60",
          bgOpacity: "60",
          hover_bgColor: "transparent",
        }
      }
    },
    corners: {
      square: {},
      default: { rounded: true },
      pill: { rounded: "full" }
    }
  };
}
