import { ColorTheme } from "@soperio/core";
import { RadioConfig } from "./types";

export default function config(theme: ColorTheme): RadioConfig
{
    return {
        otherNameThanSize: {
            "sm": {
                px: "2",
                py: "1.5",
                fontSize: "sm"
            },
            "md": {
                px: "2.5",
                py: "1.5",
                fontSize: "md",
                w: "20px",
                h: "20px",
            },
            "lg": {
                fontSize: "lg",
                w: "24px",
                h: "24px",
            },
            "xl": {
                px: "3.5",
                py: "2.5",
                fontSize: "xl"
            },
            "2x": {
                px: "4",
                py: "2.5",
                fontSize: "x2"
            }
        },
        variant: {
            default: {
                bgColor: theme.background5,
                outline: "none",
                border: "0",
                textColor: "white",
                checked: {
                    bgColor: theme.default,
                },
                disabled: {
                    bgOpacity: "40",
                    textOpacity: "70",
                    cursor: "default"
                }
            },
            outline: {
                bgColor: "transparent",
                border: "2",
                borderColor: theme.background5,
                textColor: "transparent",
                checked: {
                    borderColor: theme.default,
                    textColor: theme.default,
                },
                disabled: {
                    borderOpacity: "40",
                    textOpacity: "40",
                    cursor: "default"
                }
            },
        },
    };
}
