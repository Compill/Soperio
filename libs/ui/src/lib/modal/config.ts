import { ColorTheme } from "@soperio/react";
import { Config } from "./types";

const config: Config = (theme: ColorTheme, darkMode: boolean) => {
  return {
    defaultTraits:
    {
      variant: "default",
      corners: "default",

    },
    defaultProps:
    {
      modal: {
        position: "fixed",
        w: "100vw",
        h: "100vh",
        top: 0,
        start: 0,
        bgColor: "coolGray-500",
        z: 1000,


      },
      modalWrapper: {
        position: "fixed",
        w: "100%",
        top: 0,
        start: 0,
        overflowX: "hidden",
        overflowY: "auto",
        outline: "none",
        z: 1050,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        
      },
      modalContent: {

        maxW: "500px",
        position: "relative",
        z: 1200,

      }
    },
    subComponents: ["modal", "modalWrapper", "modalContent", "header", "content", "footer"],
    traits:
    {
      variant:
      {
        default:
        {
          modalContent:
          {
            bgColor: darkMode ? theme.background2 : theme.background1,
            border: "2",
            w: "400px",
            borderColor: theme.border0,
            textColor: theme.textDark1
          }
        },
      },
      corners:
      {
        square: {},
        default:
        {
          modalContent:
          {
            rounded: true
          }
        },
        pill:
        {
          modalContent:
          {
            rounded: "full"
          }
        }
      }
    }
  };
};

export default config
