import { ResponsiveCSSProps } from "@soperio/css";

export interface SoperioComponent extends ResponsiveCSSProps
{
  className?: string | undefined,
  style?: React.CSSProperties | undefined;
  css?: Record<string, any>;
  // css: Interpolation<Theme>;
}
