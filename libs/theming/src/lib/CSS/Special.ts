import { As } from "../forwardRef";
import { ThemingToken } from "../ThemingToken";

export type Special = {
  group?: boolean,
  trait?: keyof ThemingToken<"traits"> | (keyof ThemingToken<"traits">)[]
  // as?: As,
}
