import { As } from "../forwardRef";
import { ThemingToken } from "../ThemingToken";

export type Special = {
  group?: boolean,
  trait?: ThemingToken<"traits"> | (ThemingToken<"traits">)[]
  // as?: As,
  server?: boolean // This is key to mark a component as a server component
}
