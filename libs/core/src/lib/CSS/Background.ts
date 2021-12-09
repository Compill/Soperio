import { opacity, Opacity } from "../PropTypes/Opacity";
import { colorize } from "../PropTypes/Color";
import { css, OrString, StyleProps } from "./utils";

export interface Background {
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
    bgPosition?: false | "bottom" | "center" | "left" | "left-top" | "left-bottom" | "right" | "right-top" | "right-bottom" | "top"
    bgRepeat?: true | false | "x" | "y" | "round" | "space" | "no-repeat",
    bgSize?: false | "auto" | "cover" | "contain",
    // bgGradient?: "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl",
    // from?: string,
    // via?: string,
    // to?: string,
}

export const BackgroundMapping: StyleProps = {
    bgAtt: css("background-attachment"),
    bgClip: css("background-clip"),
    bgColor: colorize("background-color", "--so-bg-opacity"),
    bgOpacity: opacity("--so-bg-opacity"),
    bgImage: css("background-image"),  // TODO Tailwind CSS gradients
    bgOrigin: css("background-origin"),
    bgPosition: css("background-position"),
    bgRepeat: css("background-repeat", undefined, "repeat"),
    bgSize: css("background-size"),
    // bgGradient: "bg", // TODO
    // from: "from", // TODO
    // via: "via", // TODO
    // to: "to",// TODO
}
