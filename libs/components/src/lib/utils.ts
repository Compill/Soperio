import { omit, split } from "@soperio/utils";

const accessibility = ["srOnly", "notSrOnly"]
const background = ["bgAtt", "bgClip", "bgColor", "bgOpacity", "bgImage", "bgOrigin", "bgPosition", "bgRepeat", "bgSize"/*, "bgGradient", "from", "via", "to"*/]
const border = [
    "rounded", "roundedT", "roundedB", "roundedS", "roundedE",
    "border", "borderT", "borderB", "borderS", "borderE",
    "borderColor", "borderColorT", "borderColorB", "borderColorS", "borderColorE",
    "borderOpacity", "borderStyle",
    "divideX", "divideY",
    "divideXReverse", "divideYReverse",
    "divideColor", "divideOpacity", "divideStyle",
    // "ringColor", "ringOffset", "ringOffsetColor", "ringOpacity", "ringWidth"
]

const effects = ["shadow", "opacity", "mixBlend", "bgBlend"]
const filters = [
    "blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia",
    "backdropBlur", "backdropBrightness", "backdropContrast", "backdropGrayscale", "backdropHueRotate", "backdropInvert", "backdropOpacity", "backdropSaturate", "backdropSepia",
]
const flexbox = [ "flexRow", "flexCol","flexDirection","flexWrap","flex","flexGrow","flexShrink","order","gridCols","colSpan","colStart","colEnd","gridRows","rowSpan","rowStart","rowEnd","gridFlow","gridAutoCols","gridAutoRows","gap","gapX","gapY","justifyContent","justifyItems","justifySelf","alignContent","alignItems","alignSelf","placeContent","placeItems","placeSelf" ]

const interactivity = [ "appearanceNone","cursor","outline","pointerEvents","resize","userSelect"]

const layout = [ "boxDecorationBreak", "boxSizing","block","dflex","display","inline","grid","hidden","float","clear","isolation","objectFit","objectPosition","overflow","overflowX","overflowY","overscrollX","overscrollY","overscrollBehavior","overscrollBehaviorX","overscrollBehaviorY","position","top","bottom","start","end","inset","insetX","insetY","visible","invisible","z" ]

const sizing = [ "w", "h", "minW", "minH", "maxW", "maxH" ]
const spacing = [ "p", "pt", "pb", "ps", "pe", "px", "py", "m", "mt", "mb", "ms", "me", "mx", "my", "spaceX", "spaceY", "spaceXReverse", "spaceYReverse" ]

const svg = ["fillCurrent", "strokeCurrent", "strokeWidth" ]
const table = ["borderCollapse", "tableLayout" ]
const transform = [ "transform", "transformOrigin", "scale", "scaleX", "scaleY", "scaleZ", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "translateX", "translateY", "translateZ" ]
const transitions = [ "transition", "duration", "easing", "delay", "animate" ]
const typography = [ "font", "fontSize", "italic", "notItalic", "fontWeight", "numericFontVariant", "letterSpacing", "lineHeight", "listStyle", "listStylePosition", "placeholderColor", "placeholderOpacity", "textAlign", "textColor", "textOpacity", "textDecoration", "textTransform", "textOverflow", "verticalAlign", "whitespace", "wordBreak", "textColumns", "textColumnsGap" ]

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
    .concat(typography)



// TODO: Find a way to build Soperio props array
const CSSPropKeys: string[] = [];

/**
   * Returns all props that are not base Soperio props (like bgColor, m, hover_xx, ...)
   *
   * @param props
   * @returns props without Soperio props
   */
export function omitComponentProps(props: Record<string, any>): Record<string, any>
{
    return omit(props, CSSPropKeys);
}

/**
 * Returns an array of two prop objects
 * [0] contains Soperio props (like bgColor, m, hover_xx, ...)
 * [1] contains non-Soperio props
 * @param props
 * @returns
 */
export function splitComponentProps(props: Record<string, any>): Record<string, any>[]
{
    return split(props, CSSPropKeys);
};