import { Spacing as SpacingScale, SpacingPositive } from "@soperio/theming";

export interface Spacing
{
  p?: false | SpacingPositive,
  pt?: false | SpacingPositive,
  pb?: false | SpacingPositive,
  ps?: false | SpacingPositive,
  pe?: false | SpacingPositive,
  px?: false | SpacingPositive,
  py?: false | SpacingPositive,
  m?: false | SpacingScale | "auto",
  mt?: false | SpacingScale | "auto",
  mb?: false | SpacingScale | "auto",
  ms?: false | SpacingScale | "auto",
  me?: false | SpacingScale | "auto",
  mx?: false | SpacingScale | "auto",
  my?: false | SpacingScale | "auto",
  spaceX?: false | SpacingScale,
  spaceY?: false | SpacingScale,
  spaceXReverse?: false | boolean,
  spaceYReverse?: false | boolean,
}
