import { Height, MaxHeight, MaxWidth, MinHeight, MinWidth, SpacingPositive, Width } from "@soperio/theming";

export interface Sizing {
    w?: false | Width,
    h?: false | Height,
    minW?: false | MinWidth,
    minH?: false | MinHeight,
    maxW?: false | MaxWidth,
    maxH?: false | SpacingPositive | MaxHeight,
}
