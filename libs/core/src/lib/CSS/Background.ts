import { getDirection } from "../hooks/useDirection";
import { colorize } from "../PropTypes/Color";
import { opacity } from "../PropTypes/Opacity";
import { css, StyleProps } from "./utils";

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
