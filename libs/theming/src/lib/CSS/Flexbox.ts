import { OrString } from "@soperio/utils";
import { Flex, FlexBasis, GridAutoColumns, GridAutoRows, GridColumnSpan, GridRowSpan, GridTemplateColumns, GridTemplateRows, Order, SpacingPositive } from "../CSSTypes";

export interface Flexbox
{
  flexRow?: true | false | "reverse",
  flexCol?: true | false | "reverse",
  flexDirection?: true | false | "row" | "column" | "row-reverse" | "col-reverse",
  flexWrap?: true | "reverse" | "no",
  flexBasis: SpacingPositive | "full" | "auto" | FlexBasis
  flex?: false | Flex;
  flexGrow?: true | string | number,
  flexShrink?: true | string | number,
  order?: false | Order | number,
  gridCols?: false | GridColumnSpan | number,
  colSpan?: false | GridTemplateColumns | number,
  colStart?: false | OrString<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "auto"> | number,
  colEnd?: false | OrString<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "auto"> | number,
  gridRows?: false | GridTemplateRows | number,
  rowSpan?: false | GridRowSpan | number,
  rowStart?: false | OrString<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "auto"> | number,
  rowEnd?: false | OrString<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "auto"> | number,
  gridFlow?: false | "row" | "col" | "dense" | "row dense" | "col dense",
  gridAutoCols?: false | GridAutoColumns,
  gridAutoRows?: false | GridAutoRows,
  gap?: false | SpacingPositive,
  gapX?: false | SpacingPositive,
  gapY?: false | SpacingPositive,
  justifyContent?: false | "start" | "end" | "center" | "between" | "around" | "evenly",
  justifyItems?: false | "start" | "end" | "center" | "stretch",
  justifySelf?: false | "auto" | "start" | "end" | "center" | "stretch",
  alignContent?: false | "start" | "end" | "center" | "between" | "around" | "evenly",
  alignItems?: false | "start" | "end" | "center" | "baseline" | "stretch",
  alignSelf?: false | "auto" | "start" | "end" | "center" | "stretch" | "baseline",
  placeContent?: false | "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch",
  placeItems?: false | "start" | "end" | "center" | "stretch",
  placeSelf?: false | "auto" | "start" | "end" | "center" | "stretch",
}
