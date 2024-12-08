import { AspectRatio, Height, MaxHeight, MaxWidth, MinHeight, MinWidth, SpacingPositive, Width } from "../CSSTypes";

export interface Sizing {
    aspectRatio?: false | AspectRatio,
    w?: false | Width | number,
  h?: false | Height | number,
  minW?: false | MinWidth | number,
  minH?: false | MinHeight | number,
  maxW?: false | MaxWidth | number,
  maxH?: false | SpacingPositive | MaxHeight | number,
}
