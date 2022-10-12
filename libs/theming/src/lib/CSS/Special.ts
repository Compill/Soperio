import { As } from "../forwardRef";
import { ThemingToken } from "../ThemingToken";

export type Special = {
  group?: boolean,
  trait?: ThemingToken<"traits"> | (ThemingToken<"traits">)[]
  // as?: As,
}
