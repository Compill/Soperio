import { ColorTheme } from "@soperio/theming";
import { CardConfig } from "./types";

const config: CardConfig = (theme: ColorTheme, darkMode: boolean) =>
{
  return {
    defaultVariants:
    {
      variant: "default",
      corners: "default",

    },
    subComponents: ["card", "header", "content", "footer"],
    variants:
    {
      variant:
      {
        default:
        {
          card:
          {
            bgColor: darkMode ? theme.background2 : theme.background1,
            border: "0",
            textColor: theme.textDark1
          }
        },
        bordered:
        {
          card:
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
          card:
          {
            rounded: true
          }
        },
        pill:
        {
          card:
          {
            rounded: "full"
          }
        }
      }
    }
  };
};

export default config
