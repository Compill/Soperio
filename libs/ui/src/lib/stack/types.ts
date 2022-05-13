import { ParentComponent, ResponsiveProps, SoperioComponent } from "@soperio/react";

type Responsive = ResponsiveProps<{
  direction: "row" | "column"
}>

export interface StackProps extends SoperioComponent, Responsive, ParentComponent, React.HTMLAttributes<HTMLDivElement>
{

}
