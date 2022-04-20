import { ColorTheme, isDark } from "@soperio/react";
import { Config } from "./types";

const config: Config = (theme: ColorTheme, darkMode: boolean) =>
{
    return {
        defaultProps: 
        {
            overflow: "auto",
            textColor: "#00000000",
            transition: "colors",
            duration: 300,
            hover_textColor: theme.default
        },
        defaultTraits:
        {
            variant: "default",
            corners: "default",
            // size: "md"
        },
        traits:
        {
            variant:
            {
                default:
                {
                    css: {
                        "&::-webkit-scrollbar": 
                        {
                            width: "14px"
                        },
                        "&::-webkit-scrollbar-thumb":
                        {
                            backgroundClip: "content-box",
                            border: "4px solid transparent",
                            borderRadius: "7px",
                            boxShadow: "inset 0 0 0 10px"
                        },
                        "&::-webkit-scrollbar-thumb:hover":
                        {
                            color: theme.defaultHover
                        },
                        "&::-webkit-scrollbar-button": 
                        {
                            width: 0,
                            height: 0,
                            display: "none",
                        },
                        "&::-webkit-scrollbar-corner":
                        {
                            backgroundColor: "transparent"
                        },
                        "&>*": 
                        {
                            color: "initial",
                            transitionProperty: "initial"
                        }
                    }
                }
            },
            corners:
            {
                // square: {},
                // default: { rounded: true },
                // pill: { rounded: "full" }
            }
        }
    };
}

export default config
