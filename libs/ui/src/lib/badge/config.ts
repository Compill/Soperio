import { ColorTheme } from "@soperio/theming";
import { BadgeConfig } from "./types";

export default function config(theme: ColorTheme, darkMode: boolean): BadgeConfig
{
  return {
    variants: {
      size: {
        "xs": {
          px: "2.5",
          py: "0.5",
          fontSize: "xs"
        },
        "sm": {
          px: "3",
          py: "0.5",
          fontSize: "sm"
        },
        "md": {
          px: "3.5",
          py: "0.5",
          fontSize: "md"
        },
        "lg": {
          px: "4",
          py: "0.5",
          fontSize: "lg"
        },
        "xl": {
          px: "5",
          py: "1",
          fontSize: "xl"
        },
        "x2": {
          px: "6",
          py: "1",
          fontSize: "x2"
        }
      },
      variant: {
        default: {
          bgColor: theme.default,
          outline: "none",
          border: "0",
          textColor: theme.textLight1,
          fontWeight: "500"
        },
        light: {
          bgColor: theme.light,
          outline: "none",
          border: "0",
          textColor: theme.default,
          fontWeight: "500"
        },
        outline: {
          bgColor: "transparent",
          border: "2",
          borderColor: theme.default,
          textColor: theme.default,
          fontWeight: "500"
        },
        "light-outline": {
          bgColor: theme.light,
          border: "2",
          borderColor: theme.default,
          textColor: theme.default,
          fontWeight: "500"
        },
      },
      shape: {
        square: { rounded: "none" },
        default: { rounded: true },
        rounded: { rounded: true },
        pill: { rounded: "full" }
      }
    }
  };
}
