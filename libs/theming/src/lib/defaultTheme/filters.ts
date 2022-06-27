import opacity from "./opacity"
import { scale } from "./scale"

const filters = {
  blur: {
    ...scale,
    none: "0",
    sm: "4px",
    md: "8px",
    default: "12px",
    lg: "16px",
    xl: "24px",
    x2: "40px",
    x3: "64px",
  },
  brightness: {
    "0": "0",
    "25": "0.25",
    "50": "0.5",
    "75": "0.75",
    "90": "0.9",
    "95": "0.95",
    "100": "1",
    "105": "1.05",
    "110": "1.1",
    "125": "1.25",
    "150": "1.50",
    "200": "2",
  },
  contrast: {
    "0": "0",
    "25": "0.25",
    "50": "0.5",
    "75": "0.75",
    "90": "0.9",
    "95": "0.95",
    "100": "1",
    "105": "1.05",
    "110": "1.1",
    "125": "1.25",
    "150": "1.50",
    "200": "2",
  },
  dropShadow: {
    sm: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))",
    default: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
    md: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
    lg: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
    xl: "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
    x2: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
    none: "drop-shadow(0 0 #0000)",
  },
  grayscale: {
    "0": "0",
    default: "100%",
  },
  hueRotate: {
    "0": "0deg",
    "15": "15deg",
    "30": "30deg",
    "60": "60deg",
    "90": "90deg",
    "180": "180deg",
  },
  invert: {
    "0": "0",
    default: "100%",
  },
  saturate: {
    "0": "0",
    "25": "0.25",
    "50": "0.5",
    "75": "0.75",
    "90": "0.9",
    "95": "0.95",
    "100": "1",
    "105": "1.05",
    "110": "1.1",
    "125": "1.25",
    "150": "1.50",
    "200": "2",
  },
  sepia: {
    "0": "0",
    default: "100%",
  },
  backdropBlur: {
    ...scale,
    none: "0",
    sm: "4px",
    md: "8px",
    default: "12px",
    lg: "16px",
    xl: "24px",
    x2: "40px",
    x3: "64px",
  },
  backdropBrightness: {
    "0": "0",
    "25": "0.25",
    "50": "0.5",
    "75": "0.75",
    "90": "0.9",
    "95": "0.95",
    "100": "1",
    "105": "1.05",
    "110": "1.1",
    "125": "1.25",
    "150": "1.50",
    "200": "2",
  },
  backdropContrast: {
    "0": "0",
    "25": "0.25",
    "50": "0.5",
    "75": "0.75",
    "90": "0.9",
    "95": "0.95",
    "100": "1",
    "105": "1.05",
    "110": "1.1",
    "125": "1.25",
    "150": "1.50",
    "200": "2",
  },
  backdropGrayscale: {
    "0": "0",
    default: "100%",
  },
  backdropHueRotate: {
    "0": "0deg",
    "15": "15deg",
    "30": "30deg",
    "60": "60deg",
    "90": "90deg",
    "180": "180deg",
  },
  backdropInvert: {
    "0": "0",
    default: "100%",
  },
  backdropOpacity: {
    ...opacity
  },
  backdropSaturate: {
    "0": "0",
    "25": "0.25",
    "50": "0.5",
    "75": "0.75",
    "90": "0.9",
    "95": "0.95",
    "100": "1",
    "105": "1.05",
    "110": "1.1",
    "125": "1.25",
    "150": "1.50",
    "200": "2",
  },
  backdropSepia: {
    "0": "0",
    default: "100%",
  }
}

export default filters
