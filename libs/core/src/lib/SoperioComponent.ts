import { ResponsiveCSSProps } from "./CSSProps";

export interface SoperioComponent extends ResponsiveCSSProps
{
  className?: string | undefined,
  style?: React.CSSProperties | undefined;
}
