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
  flexRow: css("flexDirection", undefined, "row"),
  flexCol: css("flexDirection", undefined, "column"),
  flexDirection: css("flexDirection"),
  flexWrap: css("flexWrap", undefined, "wrap"),
  flex: css("flex", "flexbox.flex"),
  flexGrow: css("flexGrow", undefined, "1"),
  flexShrink: css("flexShrink", undefined, "1"),
  flexBasis: css("flexBasis", "flexbox.flexBasis"),
  order: css("order", "flexbox.order"),
  gridCols: css("gridTemplateColumns", "flexbox.gridTemplateColumns"),
  colSpan: css("gridColumn", "flexbox.gridColumnSpan"),
  colStart: css("gridColumnStart"),
  colEnd: css("gridColumnEnd"),
  gridRows: css("gridTemplateRows", "flexbox.gridTemplateRows"),
  rowSpan: css("gridRow", "flexbox.gridRowSpan"),
  rowStart: css("gridRowStart"),
  rowEnd: css("gridRowEnd"),
  gridFlow: css("gridAutoFlow"),
  gridAutoCols: css("gridAutoColumns", "flexbox.gridAutoColumns"),
  gridAutoRows: css("gridAutoRows", "flexbox.gridAutoRows"),
  gap: css("gap", "spacing.positive"),
  gapX: css("columnGap", "spacing.positive"),
  gapY: css("rowGap", "spacing.positive"),
  justifyContent: content("justifyContent"),
  justifyItems: css("justifyItems"),
  justifySelf: css("justifySelf"),
  alignContent: content("alignContent"),
  alignItems: css("alignItems"),
  alignSelf: css("alignSelf"),
  placeContent: placeContent("placeContent"),
  placeItems: css("placeItems"),
  placeSelf: css("placeSelf"),
};
