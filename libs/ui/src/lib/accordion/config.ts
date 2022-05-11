import { ColorTheme } from "@soperio/react";
import { Config } from "./types";

const config: Config = (theme: ColorTheme, darkMode: boolean) =>
{
  return {
    defaultTraits:
    {
      variant: "default",
      corners: "default",
    },
    defaultProps:
    {
      accordion: {
        minW: "300px",
        textColor: theme.textDark1
      },
      itemHeader: {
        py: "2",
        bgColor: theme.background1,
      },
      itemHeaderLabel:
      {
        mx: "4",
        borderColor: theme.border1
      },
      itemHeaderCollapseButton:
      {
        mx: "4",
        p: '0',
        h: "24px",
        variant: "borderless",
        corners: "pill"
      },
      itemContent:
      {
        bgColor: theme.background1,
        px: "4",
        py: "4",
        fontSize: "sm"
      }
    },
    subComponents: [ "accordion", "itemHeader", "itemHeaderLabel", "itemHeaderCollapseButton", "itemContent" ],
    traits:
    {
      variant:
      {
        default:
        {
          accordion:
          {
            border: "0",
          },
          itemContent:
          {
            bgColor: darkMode ? theme.background2 : theme.background1,
          }
        },
        bordered:
        {
          itemHeader:
          {
            bgColor: darkMode ? theme.background2 : theme.background1,
            hover_bgColor: theme.background2,
            borderT: "2",
            borderB: "1",
            borderColor: theme.border1,
          },
        },
        menu:
        {
          itemHeader:
          {
            bgColor: "transparent"
          },
          itemContent:
          {
            bgColor: "transparent"
          }
        }
      },
      corners:
      {
        square: {},
        default:
        {
          accordion:
          {
            rounded: true
          },
          itemHeader:
          {
            rounded: true
          }
        },
        pill:
        {
          accordion:
          {
            rounded: "full"
          }
        }
      }
    }
  };
};

export default config


// body {
//   background-repeat: no-repeat;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-start;
// }

// .example-container {
//   width: 320px;
//   padding: 20px;
// }

// .refresh {
//   padding: 10px;
//   position: absolute;
//   background: rgba(0, 0, 0, 0.4);
//   border-radius: 10px;
//   width: 20px;
//   height: 20px;
//   top: 10px;
//   right: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// }

// .content-placeholder {
//   padding: 20px;
//   transform-origin: top center;
// }

// header {
//   background: #0055ff;
//   border-radius: 10px;
//   color: white;
//   cursor: pointer;
//   height: 40px;
//   margin-bottom: 20px;
// }

// .word {
//   height: 18px;
//   border-radius: 10px;
//   display: inline-block;
//   margin-bottom: 8px;
//   margin-right: 8px;
//   background: #0055ff;
//   border-radius: 10px;
//   display: inline-block;
// }

// .paragraph {
//   margin-bottom: 20px;
// }

// section {
//   overflow: hidden;
// }

// @media (max-width: 600px) {
//   .content-placeholder {
//     padding-left: 20px;
//   }

//   .header .word {
//     height: 30px;
//   }

//   .word {
//     height: 14px;
//     margin-bottom: 5px;
//     margin-right: 5px;
//   }

//   .paragraph {
//     margin-bottom: 20px;
//   }
// }
