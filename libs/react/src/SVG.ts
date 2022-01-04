import { OrString } from "@soperio/utils";

export interface SVGSoperioProps
{
    fillCurrent?: boolean,
    strikeCurrent?: boolean,
    strokeWidth?: OrString<"0" | "1" | "2 "> | number
}
