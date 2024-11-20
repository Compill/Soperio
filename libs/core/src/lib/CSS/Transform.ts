import { Theme } from "@soperio/theming";
import { css, Style, StyleProp, StyleProps } from "./utils";

function transform(value: any): Style
{
  if (value === true || value === "transform")
  {
    return {
      "--so-translate-x": 0,
      "--so-translate-y": 0,
      "--so-translate-z": 0,
      "--so-rotate": 0,
      "--so-rotate-x": 0,
      "--so-rotate-y": 0,
      "--so-rotate-z": 0,
      "--so-skew-x": 0,
      "--so-skew-y": 0,
      "--so-scale-x": 1,
      "--so-scale-y": 1,
      "--so-scale-z": 1,
      transform: "translateX(var(--so-translate-x)) translateY(var(--so-translate-y)) translateZ(var(--so-translate-z)) rotate(var(--so-rotate)) rotateX(var(--so-rotate-x)) rotateY(var(--so-rotate-y)) rotateZ(var(--so-rotate-z)) skewX(var(--so-skew-x)) skewY(var(--so-skew-y)) scaleX(var(--so-scale-x)) scaleY(var(--so-scale-y)) scaleZ(var(--so-scale-z))"
    };
  }
  else if (value === "gpu")
  {
    return {
      "--so-translate-x": 0,
      "--so-translate-y": 0,
      "--so-translate-z": 0,
      "--so-rotate": 0,
      "--so-rotate-x": 0,
      "--so-rotate-y": 0,
      "--so-rotate-z": 0,
      "--so-skew-x": 0,
      "--so-skew-y": 0,
      "--so-scale-x": 1,
      "--so-scale-y": 1,
      "--so-scale-z": 1,
      transform: "translate3d(var(--so-translate-x), var(--so-translate-y), 0), var(--so-translate-z), 0) rotate(var(--so-rotate)) rotateX(var(--so-rotate-x)) rotateY(var(--so-rotate-y)) rotateZ(var(--so-rotate-z)) skewX(var(--so-skew-x)) skewY(var(--so-skew-y)) scaleX(var(--so-scale-x)) scaleY(var(--so-scale-y)) scaleZ(var(--so-scale-z))"
    };
  }

  return { transform: "none" };
}

export function transformOrigin(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  let parsedValue = value;

  if (value === "start")
    parsedValue = direction ? "left" : "right";
  else if (value === "top-start")
    parsedValue = direction ? "top left" : "top right";
  else if (value === "bottom-start")
    parsedValue = direction ? "bottom left" : "bottom right";
  else if (value === "end")
    parsedValue = direction ? "right" : "left";
  else if (value === "top-end")
    parsedValue = direction ? "top right" : "top left";
  else if (value === "bottom-end")
    parsedValue = direction ? "bottom right" : "bottom left";

  return css("transformOrigin")(parsedValue, theme, direction, darkMode);
}

export function spacing(cssProperty: string | string[], themeProperty?: string)
{
  return (value: StyleProp, theme: Theme, direction: boolean, darkMode: boolean) =>
  {
    const parsedValue = typeof value == "number" ? `${value}px` : (value === "px" ? "1px" : (value === "-px" ? "-1px" : value as string))

    return css(cssProperty, themeProperty)(parsedValue, theme, direction, darkMode)
  }
}

export function angle(cssProperty: string | string[], themeProperty?: string)
{
  return (value: StyleProp, theme: Theme, direction: boolean, darkMode: boolean) =>
  {
    const parsedValue = typeof value == "number" ? `${value}deg` : value as string

    return css(cssProperty, themeProperty)(parsedValue, theme, direction, darkMode)
  }
}

export const TransformMapping: StyleProps = {
  transform: transform,
  transformOrigin: css("transformOrigin"),
  scale: css(["--so-scale-x", "--so-scale-y"], "transform.scale"),
  scaleX: css("--so-scale-x", "transform.scale"),
  scaleY: css("--so-scale-y", "transform.scale"),
  scaleZ: css("--so-scale-z", "transform.scale"),
  rotate: angle("--so-rotate", "transform.rotate"),
  rotateX: angle("--so-rotate-x", "transform.rotate"),
  rotateY: angle("--so-rotate-y", "transform.rotate"),
  rotateZ: angle("--so-rotate-z", "transform.rotate"),
  skewX: angle("--so-skew-x", "transform.scale"),
  skewY: angle("--so-skew-y", "transform.scale"),
  translateX: spacing("--so-translate-x", "transform.translate"),
  translateY: spacing("--so-translate-y", "transform.translate"),
  translateZ: spacing("--so-translate-z", "transform.translate"),
};
