import { SurfaceSchemeSet } from "../SurfaceScheme";

export default interface ThemeSurfaces
{
  default: SurfaceSchemeSet, // TODO
  [k: string]: SurfaceSchemeSet
}
