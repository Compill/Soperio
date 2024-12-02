import { Theme } from "@soperio/theming";
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

function flexCol(value: StyleProp)
{
  let parsedValue = value;

  switch (value)
  {
    case true:
    {
      parsedValue = "column";
      break;
    }
    case false:
    {
      parsedValue = false;
      break;
    }
    case "reverse":
    {
      parsedValue = "column-reverse";
      break;
    }
  }

  return { "flexDirection": parsedValue };
}

function flexRow(value: StyleProp)
{
  let parsedValue = value;

  switch (value)
  {
    case true:
    {
      parsedValue = "row";
      break;
    }
    case false:
    {
      parsedValue = false;
      break;
    }
    case "reverse":
    {
      parsedValue = "row-reverse";
      break;
    }
  }

  return { "flexDirection": parsedValue };
}

function gap(cssProperty: string)
{
  return (value: any, theme: Theme, direction: boolean, darkMode: boolean) =>
  {

    let parsedValue = value

    if (typeof parsedValue == "number")
      parsedValue = `${parsedValue}px`

    return css(cssProperty, "spacing.positive")(parsedValue, theme, direction, darkMode)
  }
}

export const FlexboxMapping: StyleProps = {
  flexRow: flexRow,
  flexCol: flexCol,
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
  gap: gap("gap"),
  gapX: gap("columnGap"),
  gapY: gap("rowGap"),
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
