import { ColorTheme } from "@soperio/theming";
import { Config } from "./types";

const config: Config = (theme: ColorTheme, darkMode: boolean) => {
  return {
    defaultProps:
    {
      avatar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "500",
        position: "relative",
        flexShrink: 0,


      },
      image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      initials: {

      }


    },
    defaultTraits: {
      size: "lg",
      corners: "default",

    },
    subComponents: ["avatar", "image", "initials"],
    traits:
    {

      size: {
        sm: {
          avatar: {
            w: "25px",
            h: "25px",
          },
          image: {
            // w: "38px",
            // h: "14px",
          },
          initials: {

            fontSize: "sm"
          },

        },
        md: {
          avatar: {
            w: "50px",
            h: "50px",

          },
          image: {
            // w: "44px",
            // h: "20px",
          },
          initials: {

            fontSize: "md"
          },


        },
        lg: {
          avatar: {
            w: "100px",
            h: "100px",
          },
          // image: {
          //   w: "52px",
          //   h: "28px",
          // },
          initials: {

            fontSize: "2.5rem"
          },


        },
        xl: {
          avatar: {
            w: "150px",
            h: "150px",
          },
          image: {
            // w: "52px",
            // h: "28px",
          },
          initials: {
            fontSize: "3.5rem"
          },


        },
        x2: {
          avatar: {
            w: "200px",
            h: "200px",
          },
          image: {
            // w: "52px",
            // h: "28px",
          },
          initials: {
            fontSize: "4rem"
          },


        },

      },
      corners:
      {
        square: {},
        default:
        {
          avatar:
          {
            rounded: "full"
          },
          image:
          {
            rounded: "full"
          },
          initials:
          {

          },
        },
      }
    }
  };
};

export default config
