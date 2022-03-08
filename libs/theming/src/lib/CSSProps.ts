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

type FocusVariant = { [Property in keyof Focus as `focus_${string & Property}`]: Focus[Property]; };
type HoverVariant = { [Property in keyof Hover as `hover_${string & Property}`]: Hover[Property]; };

export interface CSSProps extends
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

type SM<Type> = { [Property in keyof Type as `sm_${string & Property}`]: Type[Property]; };
type MD<Type> = { [Property in keyof Type as `md_${string & Property}`]: Type[Property]; };
type LG<Type> = { [Property in keyof Type as `lg_${string & Property}`]: Type[Property]; };
type XL<Type> = { [Property in keyof Type as `xl_${string & Property}`]: Type[Property]; };
type XXL<Type> = { [Property in keyof Type as `xxl_${string & Property}`]: Type[Property]; };

// TODO Define as truly responsive via theme breakpoints values
export type ResponsiveCSSProps =
    CSSProps
    & SM<CSSProps>
    & MD<CSSProps>
    & LG<CSSProps>
    & XL<CSSProps>
    & XXL<CSSProps>
