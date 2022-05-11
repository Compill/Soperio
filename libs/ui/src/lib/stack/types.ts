import { ParentComponent, SoperioComponent, ResponsiveProps } from "@soperio/react";
import { Breakpoints } from "@soperio/react";

type Responsive = ResponsiveProps<{
  direction: "row" | "column"
}>

export interface StackProps extends SoperioComponent, Responsive, ParentComponent, React.HTMLAttributes<HTMLDivElement>
{
  size?: Breakpoints;
  center?: true | false;
};
