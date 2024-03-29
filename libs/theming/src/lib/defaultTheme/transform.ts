import { scale, negativeScale } from "./scale"

const transform = {
  scale: {
    "0": "0",
    "50": ".5",
    "75": ".75",
    "90": ".9",
    "95": ".95",
    "100": "1",
    "105": "1.05",
    "110": "1.1",
    "125": "1.25",
    "150": "1.5",
  },
  rotate: {
    "-180": "-180deg",
    "-90": "-90deg",
    "-45": "-45deg",
    "-12": "-12deg",
    "-6": "-6deg",
    "-3": "-3deg",
    "-2": "-2deg",
    "-1": "-1deg",
    "0": "0",
    "1": "1deg",
    "2": "2deg",
    "3": "3deg",
    "6": "6deg",
    "12": "12deg",
    "45": "45deg",
    "90": "90deg",
    "180": "180deg",
  },
  translate: {
    ...scale,
    ...negativeScale,
    "-full": "-100%",
    "-1/2": "-50%",
    "1/2": "50%",
    full: "100%",
  },
  skew: {
    "-12": "-12deg",
    "-6": "-6deg",
    "-3": "-3deg",
    "-2": "-2deg",
    "-1": "-1deg",
    "0": "0",
    "1": "1deg",
    "2": "2deg",
    "3": "3deg",
    "6": "6deg",
    "12": "12deg",
  },
}

export default transform
