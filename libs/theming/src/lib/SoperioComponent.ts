import { ResponsiveCSSProps } from "./CSSProps";

export interface SoperioComponent extends ResponsiveCSSProps
{
  className?: string | undefined,
  style?: React.CSSProperties | undefined;
  css?: Record<string, any>;
  id?: string
  // css: Interpolation<Theme>;
}

export type ParentComponent = {
  children?: React.ReactNode;
};
