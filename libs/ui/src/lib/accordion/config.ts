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
      accordion: {
        minW:"300px",
        bgColor: theme.background1,
      },
      accordionHeader: {
        py: "2",
        
      },
      accordionContent: {
        
        
        
      }
    },
    subComponents: ["accordion", "accordionHeader", "accordionContent",],
    traits:
    {
      variant:
      {
        default:
        {
          accordion:
          {
            bgColor: darkMode ? theme.background2 : theme.background1,
            border: "0",
            textColor: theme.textDark1
          }
        },
        bordered:
        {
          accordion:
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
          accordion:
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
