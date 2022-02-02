import { getDirection } from "../hooks/useDirection";
import { css, Style, StyleProps } from "./utils";

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

export function transformOrigin(value: any)
{
  let parsedValue = value;

  if (value === "start")
    parsedValue = getDirection() ? "left" : "right";
  else if (value === "top-start")
    parsedValue = getDirection() ? "top left" : "top right";
  else if (value === "bottom-start")
    parsedValue = getDirection() ? "bottom left" : "bottom right";
  else if (value === "end")
    parsedValue = getDirection() ? "right" : "left";
  else if (value === "top-end")
    parsedValue = getDirection() ? "top right" : "top left";
  else if (value === "bottom-end")
    parsedValue = getDirection() ? "bottom right" : "bottom left";

  return css("transform-origin")(parsedValue);
}

export const TransformMapping: StyleProps = {
  transform: transform,
  transformOrigin: css("transform-origin"),
  scale: css(["--so-scale-x", "--so-scale-y"], "transform.scale"),
  scaleX: css("--so-scale-x", "transform.scale"),
  scaleY: css("--so-scale-y", "transform.scale"),
  scaleZ: css("--so-scale-z", "transform.scale"),
  rotate: css("--so-rotate", "transform.rotate"),
  rotateX: css("--so-rotate-x", "transform.rotate"),
  rotateY: css("--so-rotate-y", "transform.rotate"),
  rotateZ: css("--so-rotate-z", "transform.rotate"),
  skewX: css("--so-skew-x", "transform.scale"),
  skewY: css("--so-skew-y", "transform.scale"),
  translateX: css("--so-translate-x", "transform.translate"),
  translateY: css("--so-translate-y", "transform.translate"),
  translateZ: css("--so-translate-z", "transform.translate"),
};
