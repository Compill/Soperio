import { css, StyleProp, StyleProps } from "./utils";


function content(cssProperty: any)
{
  return (value: StyleProp) =>
  {
    let parsedValue = value;

    switch (value)
    {
      case "start": {
        parsedValue = "flex-start";
        break;
      }
      case "end": {
        parsedValue = "flex-end";
        break;
      }
      case "between": {
        parsedValue = "space-between";
        break;
      }
      case "around": {
        parsedValue = "space-around";
        break;
      }
      case "evenly": {
        parsedValue = "space-evenly";
        break;
      }
    }

    return { [cssProperty]: parsedValue };
  };
}

function placeContent(cssProperty: any)
{
  return (value: StyleProp) =>
  {
    let parsedValue = value;

    switch (value)
    {
      case "between": {
        parsedValue = "space-between";
        break;
      }
      case "around": {
        parsedValue = "space-around";
        break;
      }
      case "evenly": {
        parsedValue = "space-evenly";
        break;
      }
    }

    return { [cssProperty]: parsedValue };
  };
}

export const FlexboxMapping: StyleProps = {
  flexRow: css("flex-direction", undefined, "row"),
  flexCol: css("flex-direction", undefined, "column"),
  flexDirection: css("flex-direction"),
  flexWrap: css("flex-wrap", undefined, "wrap"),
  flex: css("flex", "flexbox.flex"),
  flexGrow: css("flex-grow", undefined, "1"),
  flexShrink: css("flex-shrink", undefined, "1"),
  order: css("order", "flexbox.order"),
  gridCols: css("grid-template-columns", "flexbox.gridTemplateColumns"),
  colSpan: css("grid-column", "flexbox.gridColumn"),
  colStart: css("grid-column-start"),
  colEnd: css("grid-column-end"),
  gridRows: css("grid-template-rows", "flexbox.gridTemplateRows"),
  rowSpan: css("grid-row", "flexbox.gridRow"),
  rowStart: css("grid-row-start"),
  rowEnd: css("grid-row-end"),
  gridFlow: css("grid-auto-flow"),
  gridAutoCols: css("grid-auto-columns", "flexbox.gridAutoColumns"),
  gridAutoRows: css("grid-auto-rows", "flexbox.gridAutoRows"),
  gap: css("gap", "spacing.positive"),
  gapX: css("column-gap", "spacing.positive"),
  gapY: css("row-gap", "spacing.positive"),
  justifyContent: content("justify-content"),
  justifyItems: css("justify-items"),
  justifySelf: css("justify-self"),
  alignContent: content("align-content"),
  alignItems: css("align-items"),
  alignSelf: css("align-self"),
  placeContent: placeContent("place-content"),
  placeItems: css("place-items"),
  placeSelf: css("place-self"),
};
