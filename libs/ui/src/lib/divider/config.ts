import { ColorTheme,} from "@soperio/react";

import { Config } from "./types";

export const config: Config = (theme: ColorTheme, darkMode: boolean) => {
  return {
    defaultTraits:
    {
      variant: "default",
      orientation: "horizontal",

    },
    traits: {
      orientation:
      {
        vertical: {
          borderS: "2", //il faut rajouter borderS || borderE|| borderWidth ||
          border:"none",
          w:"1px",
          h: "100%",
        },
        horizontal: {
          borderB: "1px",//il faut rajouter borderB || borderT|| borderWidth ||

          w: "100%",
        },
      },
      variant: {
        default: {
          borderStyle: "solid",
          opacity: "30",
          borderColor: "black"
        },
        dashed: {
          borderStyle: "dashed",
          opacity: "30",
          borderColor: "black"
        }
      }
    }
  }
}
export default config
