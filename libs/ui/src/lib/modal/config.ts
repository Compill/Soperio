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
      backdrop:
      {
        bgColor: "black",
        bgOpacity: "50"
      },
      modalWrapper:
      {
        display: "flex",
        justifyContent: "center",
        // bgColor: darkMode ? theme.background2 : theme.background1,
      },
      header:
      {
        ps: "4",
        borderColor: theme.border1
      },
      headerCloseButton:
      {
        mx: "4",
        p: '0',
        h: "24px",
        variant: "borderless"
      },
      modalContent:
      {
        position: "relative",
        z: 1200,
      },
      body:
      {
        px: "4",
        py: "2",
        fontSize: "sm"
      },
      footer:
      {
        px: "4",
        py: "2",
        borderColor: theme.border1
      }
    },
    subComponents: [ "backdrop", "modalWrapper", "modalContent", "header", "headerTitle", "headerCloseButton", "body", "footer" ],
    traits:
    {
      variant:
      {
        default:
        {
          modalContent:
          {
            bgColor: darkMode ? theme.background2 : theme.background1,
            border: "0",
            textColor: theme.textDark1
          }
        },
        bordered:
        {
          modalContent:
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
      },
      size:
      {
        xs:
        {
          modalContent:
          {
            maxW: "20rem"
          }
        },
        sm:
        {
          modalContent:
          {
            maxW: "24rem"
          }
        },
        md:
        {
          modalContent:
          {
            maxW: "28rem"
          }
        },
        lg:
        {
          modalContent:
          {
            maxW: "32rem"
          }
        },
        xl:
        {
          modalContent:
          {
            maxW: "36rem"
          }
        },
        x2:
        {
          modalContent:
          {
            maxW: "40rem"
          }
        },
        x3:
        {
          modalContent:
          {
            maxW: "44rem"
          }
        },
        x4:
        {
          modalContent:
          {
            maxW: "48rem"
          }
        },
        x5:
        {
          modalContent:
          {
            maxW: "52rem"
          }
        },
        x6:
        {
          modalContent:
          {
            maxW: "56rem"
          }
        },
      }
    }
  };
};

export default config
