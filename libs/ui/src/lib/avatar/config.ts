import { ColorTheme, isDark } from "@soperio/react";
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

      badge: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: 'border-box',

      }

    },
    defaultTraits: {
      size: "lg",
      corners: "default",
      variant :"default"

    },
    subComponents: ["avatar", "image", "initials", "badge"],
    traits:
    {

      size: {
        sm: {
          avatar: {
            w: "25px",
            h: "25px",
          },

          initials: {

            fontSize: "sm"
          },
          badge: {
            w: "10px",
            h: "10px",
            fontSize: "sm"
          }

        },
        md: {
          avatar: {
            w: "50px",
            h: "50px",

          },

          initials: {

            fontSize: "md"
          },
          badge: {
            w: "15px",
            h: "15px",
            fontSize: "sm"
          }


        },
        lg: {
          avatar: {
            w: "100px",
            h: "100px",
          },


          initials: {

            fontSize: "2.5rem"
          },
          badge: {
            w: "25px",
            h: "25px",
            fontSize: "sm"
          }


        },
        xl: {
          avatar: {
            w: "150px",
            h: "150px",
          },

          initials: {
            fontSize: "3.5rem"
          },
          badge: {
            w: "30px",
            h: "30px",
          }


        },
        x2: {
          avatar: {
            w: "200px",
            h: "200px",
          },

          initials: {
            fontSize: "4rem"
          },
          badge: {
            w: "40px",
            h: "40px",
          }

        },

      },
      variant:{ 
        default:{
          avatar: {
            fontWeight: "500",
          },
          image: {

          },
          initials: {
    
            textColor: isDark(theme.default) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
          },
          badge: {
            border: "2",
            borderColor: theme.background5,
            textColor: isDark(theme.default) ? (darkMode ? theme.textDark1 : theme.textLight1) : (darkMode ? theme.textLight1 : theme.textDark1),
    
    
          }
      }},
     
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
            rounded: "full"
          },

        },
        pill:
        {
          avatar:
          {
            rounded: "lg"
          },
          image:
          {
            rounded: "lg"
          },

        },
      }
    }
  };
};

export default config
