import { ColorTheme } from "@soperio/theming";
import { Config } from "./types";

const config: Config = (theme: ColorTheme, darkMode: boolean) => {
  return {
    defaultProps:
    {
      // switch: {
      //   display: "inline-block",
      //   position: "relative",
      //   verticalAlign: "middle",
      //   lineHeight: "0",
      // },
      // track: {
      //   display: "inline-flex",
      //   flexShrink: "0",
      //   justifyContent: "start",
      //   boxSizing: "content-box",
      //   cursor: "pointer",
      // },
      // thumb: {

      // },
      // label: {
      //   userSelect: "none",
      //   ms: "2",
      // }

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
            w: "2.875rem",
            h: "1.5rem",
          },
          thumb: {
            w: "1.5rem",
            h: "1.5rem",
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
          switch:
          {
            // bgColor: darkMode ? theme.background2 : theme.background1,
            // border: "0",
          },
          track:
          {

            
            // transitionProperty: "common",
            // transitionDuration: "fast",
            bgColor: "grey",
            stateChecked:
            {
              bgColor: "blue",
            },
            stateDisabled:
            {
              bgOpacity: "40",

              cursor: "default"
            }

          },
          thumb:
          {
            bgColor: "white",
            my: "1px",
            // transitionProperty: "transform",
            // transitionDuration: "normal",
            // borderRadius: "inherit",
            // width: "0.75rem",
            // height: "0.3rem",
            stateChecked:
            {
              transform: true,
              translateX : "-100%"
            },

          }
        },
        bordered:
        {
          switch:
          {
            bgColor: darkMode ? theme.background2 : theme.background1,
            border: "2",
            borderColor: theme.border1,
          },
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
