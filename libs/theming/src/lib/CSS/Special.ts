import { ThemingToken } from "../ThemingToken";

export type Special = {
  trait?: keyof ThemingToken<"traits"> | (keyof ThemingToken<"traits">)[]
  as?: string
}
