import { ThemingToken } from "../ThemingToken";

export type Special = {
  group?: boolean,
  trait?: keyof ThemingToken<"traits"> | (keyof ThemingToken<"traits">)[]
  as?: string
}
