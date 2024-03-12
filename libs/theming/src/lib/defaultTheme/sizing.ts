import breakpoints from "./breakpoints"
import { scale } from "./scale"

function prefix(config: Record<string, string>, prefix: string): Record<string, string>
{
  const newConfig: Record<string, string> = {};

  Object.keys(config).forEach((key: string) =>
  {
    newConfig[prefix + key] = config[key];
  });

  return newConfig;
}

const sizing = {
  aspectRatio:
  {
    square: "1",
    "16/9": "16/9",
    "16/10": "16/10",
    "3/2": "3/2",
    "4/3": "4/3",
    "9/16": "9/16",
    "10/16": "10/16",
    "3/4": "3/4",
    "2/3": "2/3",
    "1/2": "1/2",
    "2/1": "2/1"
  },
  height: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    full: "100%",
    screen: "100vh",
    ...scale,
  },
  maxHeight: {
    full: "100%",
    screen: "100vh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    ...scale,
  },
  maxWidth: {
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    prose: "65ch",
    none: "none",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    x2: "42rem",
    x3: "48rem",
    x4: "56rem",
    x5: "64rem",
    x6: "72rem",
    full: "100%",
    ...prefix(breakpoints, "screen-"),
    ...scale,
  },
  minHeight: {
    full: "100%",
    screen: "100vh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    ...scale,
  },
  minWidth: {
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    ...scale,
  },
  width: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    full: "100%",
    screen: "100vw",
    ...scale,
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
  }
}

export default sizing
