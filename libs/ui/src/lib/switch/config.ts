import { ColorTheme } from "@soperio/react";
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
            w: "38px",
          },
          track: {
            w: "38px",
            h: "14px",
          },
          thumb: {
            w: "10px",
            h: "10px",
          },
          label: {
            
          },
        },
        md: {
          switch: {
            w: "44px",
          },
          track: {
            w: "44px",
            h: "20px",
          },
          thumb: {
            w: "16px",
            h: "16px",
          },
          label: {
            
          },

        },
        lg: {
          switch: {
            w: "52px",
          },
          track: {
            w: "52px",
            h: "28px",
          },
          thumb: {
            w: "24px",
            h: "24px",
          },
          label: {
            
          },

        },
        xl: {
          switch: {
            w: "52px",
          },
          track: {
            w: "52px",
            h: "28px",
          },
          thumb: {
            w: "24px",
            h: "24px",
          },
          label: {
            
          },

        },
        x2: {
          switch: {
            w: "52px",
          },
          track: {
            w: "52px",
            h: "28px",
          },
          thumb: {
            w: "24px",
            h: "24px",
          },
          label: {
            
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
              easing: "out",
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
          switch:
          {

          },
          track:
          {
            rounded: true 
          },
          thumb:
          {
            rounded: true 
          },
        }
      }
    }
  };
};

export default config
