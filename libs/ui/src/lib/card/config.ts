import { ColorTheme } from "@soperio/theming";
import { CardConfig } from "./types";

export default function config(theme: ColorTheme, darkMode: boolean): CardConfig
{
    return {
        variant: {
            default: {
                bgColor: darkMode ? theme.background2 : theme.background1,
                border: "0",
                textColor: theme.textDark1
            },
            bordered: {
                bgColor: theme.background1,
                border: "2",
                borderColor: theme.border0,
            },
        },
        corners: {
            square: {},
            default: { rounded: true },
            pill: { rounded: "full" }
        }
    };
}
