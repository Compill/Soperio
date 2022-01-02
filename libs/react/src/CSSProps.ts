import { Accessibility, AccessibilityMapping } from "./CSS/Accessibility";
import { Background, BackgroundMapping } from "./CSS/Background";
import { Border, BorderMapping } from "./CSS/Border";
import { Effects, EffectsMapping } from "./CSS/Effects";
import { Flexbox, FlexboxMapping } from "./CSS/Flexbox";
import { Interactivity, InteractivityMapping } from "./CSS/Interactivity";
import Layout, { LayoutMapping } from "./CSS/Layout";
import { Sizing, SizingMapping } from "./CSS/Sizing";
import { Spacing, SpacingMapping } from "./CSS/Spacing";
import { SVGMapping } from "./CSS/SVG";
import { Table } from "./CSS/Table";
import { Transform, TransformMapping } from "./CSS/Transform";
import { Transitions, TransitionsMapping } from "./CSS/Transitions";
import { Typography, TypographyMapping } from "./CSS/Typography";
import { Focus } from "./CSS/Variants/Focus";
import { Hover } from "./CSS/Variants/Hover";

type FocusVariant = { [Property in keyof Focus as `focus_${string & Property}`]: Focus[Property]; };
type HoverVariant = { [Property in keyof Hover as `hover_${string & Property}`]: Hover[Property]; };

export interface CSSProps extends 
    Accessibility,
    Background, 
    Border, 
    Effects, 
    Flexbox, 
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

type SM<Type> = { [Property in keyof Type as `sm_${string & Property}`]: Type[Property]; };
type MD<Type> = { [Property in keyof Type as `md_${string & Property}`]: Type[Property]; };
type LG<Type> = { [Property in keyof Type as `lg_${string & Property}`]: Type[Property]; };
type XL<Type> = { [Property in keyof Type as `xl_${string & Property}`]: Type[Property]; };
type XXL<Type> = { [Property in keyof Type as `xxl_${string & Property}`]: Type[Property]; };

export type ResponsiveCSSProps =
    CSSProps 
    & SM<CSSProps>
    & MD<CSSProps>
    & LG<CSSProps>
    & XL<CSSProps>
    & XXL<CSSProps>

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
    ...TransformMapping,
    ...TransitionsMapping,
    ...TypographyMapping,
}

export const CSSPropKeys = Object.keys(CSSPropsMap)