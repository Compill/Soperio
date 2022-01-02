import { AccessibilityMapping } from "./CSS/Accessibility";
import { BackgroundMapping } from "./CSS/Background";
import { BorderMapping } from "./CSS/Border";
import { EffectsMapping } from "./CSS/Effects";
import { FlexboxMapping } from "./CSS/Flexbox";
import { InteractivityMapping } from "./CSS/Interactivity";
import { LayoutMapping } from "./CSS/Layout";
import { SizingMapping } from "./CSS/Sizing";
import { SpacingMapping } from "./CSS/Spacing";
import { SVGMapping } from "./CSS/SVG";
import { TableMapping } from "./CSS/Table";
import { TransformMapping } from "./CSS/Transform";
import { TransitionsMapping } from "./CSS/Transitions";
import { TypographyMapping } from "./CSS/Typography";

export const CSSPropsMap:any = {
    ...AccessibilityMapping,
    ...BackgroundMapping,
    ...BorderMapping,
    ...EffectsMapping,
    ...FlexboxMapping,
    ...InteractivityMapping,
    ...LayoutMapping,
    ...SizingMapping,
    ...SpacingMapping,
    ...SVGMapping,
    ...TableMapping,
    ...TransformMapping,
    ...TransitionsMapping,
    ...TypographyMapping,
}

export const CSSPropKeys = Object.keys(CSSPropsMap)
