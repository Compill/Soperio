import { AspectRatio, Height, MaxHeight, MaxWidth, MinHeight, MinWidth, SpacingPositive, Width } from "../CSSTypes";

export interface Sizing {
    aspectRatio?: false | AspectRatio,
    w?: false | Width,
    h?: false | Height,
    minW?: false | MinWidth,
    minH?: false | MinHeight,
    maxW?: false | MaxWidth,
    maxH?: false | SpacingPositive | MaxHeight,
}
