import { css, getThemeStyle, Style, StyleFn, StyleProp, StyleProps } from "./utils";


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

function blur(backdrop?: boolean): StyleFn
{
  return (value: any): Style =>
  {
    let parsedValue = value;

    if (typeof value === "number")
      parsedValue = `${value}px`;
    else
      parsedValue = value === true ? "1px" : (getThemeStyle("filters.blur", value) || value);

    // return { filter: `${backdrop ? "backdrop-" : ""}blur(${parsedValue})` };
    return processFilterObject("blur", parsedValue, backdrop)
  };
}

function filter(themeProperty: string, filter:string, backdrop?: boolean): StyleFn
{
  return (value: any): Style =>
  {
    let parsedValue = value;

    if (typeof value !== "number")
    {
      parsedValue = getThemeStyle(`filters.${themeProperty}`, value === true ? "default" : value) || value;
      console.log("filter", themeProperty, value, getThemeStyle(`filters.${themeProperty}`, value === true ? "default" : value))
    }

    return processFilterObject(filter, parsedValue, backdrop)
  };
}

function processFilterObject(filter:string, value: string, backdrop?: boolean)
{
  const varName = `--so-${backdrop ? "backdrop-" : ""}filter-${filter}`;

  return {
    [varName]: `${filter}(${value})`,
    // [`${backdrop ? "backdrop-" : ""}filter`]: `var(--so-${backdrop ? "backdrop-" : ""}filter-blur) var(--so-${backdrop ? "backdrop-" : ""}filter-brightness) var(--so-${backdrop ? "backdrop-" : ""}filter-contrast) ${!backdrop ? `var(--so-${backdrop ? "backdrop-" : ""}filter-drop-shadow)}` : ""} var(--so-${backdrop ? "backdrop-" : ""}filter-grayscale) var(--so-${backdrop ? "backdrop-" : ""}filter-hue-rotate) var(--so-${backdrop ? "backdrop-" : ""}filter-invert) ${backdrop ? `var(--so-${backdrop ? "backdrop-" : ""}filter-opacity)}` : ""} var(--so-${backdrop ? "backdrop-" : ""}filter-saturate) var(--so-${backdrop ? "backdrop-" : ""}filter-sepia)`
    [`${backdrop ? "backdrop-" : ""}filter`]: `var(--so-${backdrop ? "backdrop-" : ""}filter-blur) var(--so-${backdrop ? "backdrop-" : ""}filter-brightness) var(--so-${backdrop ? "backdrop-" : ""}filter-contrast) var(--so-${backdrop ? "backdrop-" : ""}filter-grayscale) var(--so-${backdrop ? "backdrop-" : ""}filter-hue-rotate) var(--so-${backdrop ? "backdrop-" : ""}filter-invert) var(--so-${backdrop ? "backdrop-" : ""}filter-saturate) var(--so-${backdrop ? "backdrop-" : ""}filter-sepia)`
  };
}



export const FiltersMapping: StyleProps = {

  blur: blur(false),
  brightness: filter("brightness", "brightness"),
  constrast: filter("contrast", "contrast"),
  dropShadow: css("filter", "filter.drop-shadow"),
  grayscale: filter("grayscale", "grayscale"),
  hueRotate: filter("hueRotate", "hue-rotate"),
  invert: filter("invert", "invert"),
  saturate: filter("saturate", "saturate"),
  sepia: filter("sepia", "sepia"),

  backdropBlur: blur(true),
  backdropBrightness: filter("backdropBrightness", "brightness", true),
  backdropConstrast: filter("backdropConstrast", "contrast", true),
  backdropGrayscale: filter("backdropGrayscale", "grayscale", true),
  backdropHueRotate: filter("backdropHueRotate","hue-rotate", true),
  backdropInvert: filter("backdropInvert", "invert", true),
  backdropOpacity: filter("backdropOpacity", "opacity", true),
  backdropSaturate: filter("backdropSaturate", "saturate", true),
  backdropSepia: filter("backdropSepia", "sepia", true),
};