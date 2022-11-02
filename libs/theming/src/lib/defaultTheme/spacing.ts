import { scale, negativeScale } from "./scale"

const spacing = {
  positive: scale,
  positiveNegative: {
    ...scale,
    ...negativeScale
  },
}

export default spacing
