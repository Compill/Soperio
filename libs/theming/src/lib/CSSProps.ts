import { Accessibility } from "./CSS/Accessibility";
import { Background } from "./CSS/Background";
import { Border } from "./CSS/Border";
import { Effects } from "./CSS/Effects";
import { Filters } from "./CSS/Filters";
import { Flexbox } from "./CSS/Flexbox";
import { Interactivity } from "./CSS/Interactivity";
import Layout from "./CSS/Layout";
import { Sizing } from "./CSS/Sizing";
import { Spacing } from "./CSS/Spacing";
import { Table } from "./CSS/Table";
import { Transform } from "./CSS/Transform";
import { Transitions } from "./CSS/Transitions";
import { Typography } from "./CSS/Typography";
import { Focus } from "./CSS/Variants/Focus";
import { Hover } from "./CSS/Variants/Hover";
import { Breakpoints } from "./CSSTypes"

type FocusVariant = { [Property in keyof Focus as `focus_${string & Property}`]: Focus[Property]; };
type HoverVariant = { [Property in keyof Hover as `hover_${string & Property}`]: Hover[Property]; };

interface CSSProps extends
    Accessibility,
    Background,
    Border,
    Effects,
    Flexbox,
    Filters,
    Layout,
    Interactivity,
    Sizing,
    Spacing,
    Table,
    Transform,
    Transitions,
    Typography,
    FocusVariant,
    HoverVariant {};

type _Breakpoints = Omit<Breakpoints, "default">

export type ResponsiveProps<Type> = Partial<Type> & Partial<{ [Property in keyof Type as `${string & Exclude<Breakpoints, "default">}_${string & Property}`]: Type[Property]; }>;

export type ResponsiveCSSProps = ResponsiveProps<CSSProps>

// export type ResponsiveProp<Key extends string, T> = { Key?: T} & 


const accessibility = ["srOnly", "notSrOnly"];
const background = ["bgAtt", "bgClip", "bgColor", "bgOpacity", "bgImage", "bgOrigin", "bgPosition", "bgRepeat", "bgSize"/*, "bgGradient", "from", "via", "to"*/];
const border = [
    "rounded", "roundedT", "roundedB", "roundedS", "roundedE",
    "border", "borderT", "borderB", "borderS", "borderE",
    "borderColor", "borderTColor", "borderBColor", "borderSColor", "borderEColor",
    "borderOpacity", "borderStyle",
    "divideX", "divideY",
    "divideXReverse", "divideYReverse",
    "divideColor", "divideOpacity", "divideStyle",
    // "ringColor", "ringOffset", "ringOffsetColor", "ringOpacity", "ringWidth"
];

const effects = ["shadow", "opacity", "mixBlend", "bgBlend"];
const filters = [
    "blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia",
    "backdropBlur", "backdropBrightness", "backdropContrast", "backdropDropShadow", "backdropGrayscale", "backdropHueRotate", "backdropInvert", "backdropOpacity", "backdropSaturate", "backdropSepia",
];
const flexbox = ["flexRow", "flexCol", "flexDirection", "flexWrap", "flex", "flexGrow", "flexShrink", "order", "gridCols", "colSpan", "colStart", "colEnd", "gridRows", "rowSpan", "rowStart", "rowEnd", "gridFlow", "gridAutoCols", "gridAutoRows", "gridTemplateCols", "gridTemplateRows", "gap", "gapX", "gapY", "justifyContent", "justifyItems", "justifySelf", "alignContent", "alignItems", "alignSelf", "placeContent", "placeItems", "placeSelf"];

const interactivity = ["appearanceNone", "cursor", "outline", "pointerEvents", "resize", "userSelect"];

const layout = ["boxDecorationBreak", "boxSizing", "block", "dflex", "display", "inline", "grid", "hidden", "float", "clear", "isolation", "objectFit", "objectPosition", "overflow", "overflowX", "overflowY", "overscroll", "overscrollX", "overscrollY", "overscrollBehavior", "overscrollBehaviorX", "overscrollBehaviorY", "position", "top", "bottom", "start", "end", "inset", "insetX", "insetY", "visible", "invisible", "z"];

const sizing = ["w", "h", "minW", "minH", "maxW", "maxH"];
const spacing = ["p", "pt", "pb", "ps", "pe", "px", "py", "m", "mt", "mb", "ms", "me", "mx", "my", "spaceX", "spaceY", "spaceXReverse", "spaceYReverse"];

const svg = ["fillCurrent", "strokeCurrent", "strokeWidth"];
const table = ["borderCollapse", "tableLayout"];
const transform = ["transform", "transformOrigin", "scale", "scaleX", "scaleY", "scaleZ", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "translateX", "translateY", "translateZ"];
const transitions = ["transition", "duration", "easing", "delay", "animate"];
const typography = ["font", "fontSize", "italic", "notItalic", "fontWeight", "numericFontVariant", "letterSpacing", "lineHeight", "listStyle", "listStylePosition", "placeholderColor", "placeholderOpacity", "textAlign", "textColor", "textOpacity", "textDecoration", "textTransform", "textOverflow", "verticalAlign", "whitespace", "wordBreak", "textColumns", "textColumnsGap"];

const props = ([] as string[]).concat(accessibility)
    .concat(background)
    .concat(border)
    .concat(effects)
    .concat(filters)
    .concat(flexbox)
    .concat(interactivity)
    .concat(layout)
    .concat(sizing)
    .concat(spacing)
    .concat(svg)
    .concat(table)
    .concat(transform)
    .concat(transitions)
    .concat(typography);

function buildBreakpointProps(breakpoint:string, props:string[]): string[]
{
    const prefix = `${breakpoint}_`
    return props.map((value, index) => `${prefix}${value}`)
}


// TODO Add variants (focus, hover)
export const CSSPropKeys = props
    .concat(buildBreakpointProps("sm", props))
    .concat(buildBreakpointProps("md", props))
    .concat(buildBreakpointProps("lg", props))
    .concat(buildBreakpointProps("xl", props))
    .concat(buildBreakpointProps("xxl", props))
