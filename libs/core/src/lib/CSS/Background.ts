import { opacity, Opacity } from "../PropTypes/Opacity";
import { colorize } from "../PropTypes/Color";
import { css, OrString, StyleProps } from "./utils";
import { getDirection } from "../hooks/useDirection";

export interface Background 
{
    bgAtt?: false | "fixed" | "local" | "scroll",
    bgClip?: false | "border" | "padding" | "content" | "text",
    bgColor?: false | string,
    /*
        Apply trasnparency to background color.
        Attention, this will not be applied if you have defined an RGBA
        color for background. Only applied for RGB background colors
     */
    bgOpacity?: false | Opacity,
    bgImage?: false | OrString<"none" | "url()">,
    bgOrigin?: false | "border" | "padding" | "content",
    bgPosition?: false | "bottom" | "center" | "start" | "start-top" | "start-bottom" | "end" | "end-top" | "end-bottom" | "top"
    bgRepeat?: true | false | "x" | "y" | "round" | "space" | "no-repeat",
    bgSize?: false | "auto" | "cover" | "contain",
    // bgGradient?: "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl",
    // from?: string,
    // via?: string,
    // to?: string,
}

function bgPosition(value: any)
{
    let parsedValue = value;

    if (value === "start")
        parsedValue = getDirection() ? "left" : "right";
        else if (value === "start-top")
        parsedValue = getDirection() ? "left top" : "right top";
    else if (value === "start-bottom")
        parsedValue = getDirection() ? "left bottom" : "right bottom";
    else if (value === "end")
        parsedValue = getDirection() ? "right" : "left";
    else if (value === "end-top")
        parsedValue = getDirection() ? "right top" : "left top";
    else if (value === "end-bottom")
        parsedValue = getDirection() ? "right bottom" : "left bottom";
    
    return css("background-position")(parsedValue)
}

export const BackgroundMapping: StyleProps = {
    bgAtt: css("background-attachment"),
    bgClip: css("background-clip"),
    bgColor: colorize("background-color", "--so-bg-opacity"),
    bgOpacity: opacity("--so-bg-opacity"),
    bgImage: css("background-image"),
    bgOrigin: css("background-origin"),
    bgPosition: bgPosition,
    bgRepeat: css("background-repeat", undefined, "repeat"),
    bgSize: css("background-size"),
    // TODO Tailwind CSS gradients
    // bgGradient: "bg", // TODO
    // from: "from", // TODO
    // via: "via", // TODO
    // to: "to",// TODO
}
