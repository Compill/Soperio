import { ColorTheme } from "@soperio/react";
import { Config } from "./types";

const config: Config = (theme: ColorTheme, darkMode: boolean) =>
{
    return {
        defaultTraits:
        {
            variant: "default",
            corners: "default",
            size: "md"
        },
        defaultProps:
        {
            list:
            {
                listStyle: 'none',
                m: "0",
                p: "0",
                position: 'relative',
            },
            listItem:
            {
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                position: 'relative',
                mx: "auto",
                textDecoration: false,
                w: '100%',
                boxSizing: 'border-box',
                textAlign: 'start',
            },
            listItemIcon:
            {
                display: 'flex',
                justifyContent: 'start',
                me: "10px",
                w: '100%',
            },
        },
        subComponents: ["list", "listItem", "listItemIcon"],
        traits:
        {
            size:
            {
                sm:
                {
                    list:
                    {
                        w: "15%",
                    },
                    listItem:
                    {
                        fontSize: "sm"
                    },
                    listItemIcon: {
                        w: "16px",
                        h: "16px",

                    }

                },
                md:
                {
                    list:
                    {
                        w: "25%",
                    },
                    listItem:
                    {
                        fontSize: "md"
                    },
                    listItemIcon:
                    {
                        w: "24px",
                        h: "24px",
                    }
                },
                lg:
                {
                    list:
                    {
                        w: "35%",
                    },
                    listItem:
                    {
                        fontSize: "lg"
                    },
                    listItemIcon:
                    {
                        w: "48px",
                        h: "48px",
                    }
                },
                xl:
                {

                },
                x2:
                {

                },
            },
            variant:
            {
                default:
                {
                    list:
                    {
                        bgColor: darkMode ? theme.background2 : theme.background1,
                        border: "0",
                        textColor: theme.textDark1
                    },
                    listItem:
                    {
                        bgColor: darkMode ? theme.background2 : theme.background1,
                        border: "0",
                        textColor: theme.textDark1,
                        px: "5",
                        py: "3",
                        hover_bgColor: theme.background2
                    },
                    listItemIcon:
                    {
                        bgColor: darkMode ? theme.background2 : theme.background1,
                        border: "0",
                        textColor: theme.textDark1,
                        hover_bgColor: theme.background2
                    },
                },
                bordered:
                {
                    list:
                    {
                        bgColor: darkMode ? theme.background2 : theme.background1,
                        border: "0",
                        textColor: theme.textDark1
                    },
                    listItem:
                    {
                        bgColor: darkMode ? theme.background2 : theme.background1,
                        borderB: "2",
                        textColor: theme.textDark1,
                        borderColor: theme.border1,
                        px: "7",
                        py: "3",
                        hover_bgColor: theme.background2
                    },
                    listItemIcon:
                    {
                        bgColor: darkMode ? theme.background2 : theme.background1,
                        borderB: "2",
                        textColor: theme.textDark1,
                        borderColor: theme.border1,
                        hover_bgColor: theme.background2
                    },
                }
            },
            corners:
            {
                square: {},
                default:
                {
                    list:
                    {
                        rounded: true
                    },
                    listItem:
                    {
                        rounded: true
                    },
                    listItemIcon:
                    {
                        rounded: true
                    }
                },
            },
        }
    };
};

export default config
