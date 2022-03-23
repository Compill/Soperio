import { ColorTheme } from "@soperio/theming";
import { Config } from "./types";

const config: Config = (theme: ColorTheme, darkMode: boolean) => {
  return {
    defaultProps:
    {
      switch: {
      },
      track: {
        display: "inline-block",
        position: "relative",
        cursor: "pointer"
      },
      thumb: {
        position: "absolute"
      },

    },
    defaultTraits: {
      size: "lg",
      corners: "default",
      variant: "default"
    },
    subComponents: ["switch", "track", "thumb", "label"],
    traits:
    {
      size: {
        sm: {
          switch: {
            w: "1.375rem",
            h: "0.75rem",
          },
          track: {
            w: "1.375rem",
            h: "0.75rem",
          },
          thumb: {
            w: "0.7rem",
            h: "0.4rem",
          },
          label: {
            w: "1.375rem",
            h: "0.75rem",
          },
        },
        md: {
          switch: {
            w: "1.875rem",
            h: "1rem",
          },
          track: {
            w: "1.875rem",
            h: "1rem",
          },
          thumb: {
            w: "0.9rem",
            h: "0.9rem",
          },
          label: {
            w: "1.375rem",
            h: "0.75rem",
          },
        },
        lg: {
          switch: {
            w: "2.875rem",
            h: "1.5rem",
          },
          track: {
            w: "46px",
            h: "28px",
          },
          thumb: {
            w: "24px",
            h: "24px",
          },
          label: {
            w: "1.375rem",
            h: "0.75rem",
          },

        },
      },
      variant:
      {
        default:
        {
          track:
          {

            bgColor: theme.background5,
            shadow: " 0 0 5px grey",
            easing: "linear",
            duration: "300",

            stateChecked:
            {
              bgColor: theme.default,
            },
            stateDisabled:
            {
              bgOpacity: "40",

              cursor: "default"
            }

          },
          thumb:
          {
            bgColor: theme.background1,
            ms: "2px",
            mt: "2px",
            easing: "linear",
            duration: "300",

            stateChecked:
            {
              transform: true,
              translateX: "-100%",
              ms: "calc(100% - 2px)",
              easing: "out"
            }
          },
          label: {
            fontSize: "lg",
            textAlign: "center"
          }
        },
        inverse:
        {
          track:
          {

            bgColor: theme.background5,
            shadow: " 0 0 5px grey",
            easing: "linear",
            duration: "300",


            stateChecked:
            {
              bgColor: theme.default,
              bgOpacity: "50",
              

            },
            stateDisabled:
            {
              bgOpacity: "40",

              cursor: "default"
            }

          },
          thumb:
          {
            bgColor: theme.background1,
            ms: "2px",
            mt: "2px",
            easing: "linear",
            duration: "300",

            stateChecked:
            {
              transform: true,
              translateX: "-100%",
              ms: "calc(100% - 2px)",
              easing: "out",
              bgColor: theme.default,
            }
          },
          label: {
            fontSize: "lg",
            textAlign: "center"
          }
        },
      },
      corners:
      {
        square: {},
        default:
        {
          switch:
          {

          },
          track:
          {
            rounded: "full"
          },
          thumb:
          {
            rounded: "full"
          },
        },
        pill:
        {

        }
      }
    }
  };
};

export default config
