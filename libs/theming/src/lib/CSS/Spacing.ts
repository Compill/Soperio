import { Spacing as SpacingScale, SpacingPositive } from "../CSSTypes";

export interface Spacing
{
  p?: false | SpacingPositive | number,
  pt?: false | SpacingPositive | number,
  pb?: false | SpacingPositive | number,
  ps?: false | SpacingPositive | number,
  pe?: false | SpacingPositive | number,
  px?: false | SpacingPositive | number,
  py?: false | SpacingPositive | number,
  m?: false | SpacingScale | "auto" | number,
  mt?: false | SpacingScale | "auto" | number,
  mb?: false | SpacingScale | "auto" | number,
  ms?: false | SpacingScale | "auto" | number,
  me?: false | SpacingScale | "auto" | number,
  mx?: false | SpacingScale | "auto" | number,
  my?: false | SpacingScale | "auto" | number,
  spaceX?: false | SpacingScale,
  spaceY?: false | SpacingScale,
  spaceXReverse?: false | boolean,
  spaceYReverse?: false | boolean,
}
