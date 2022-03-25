
import { ParentComponent, SoperioComponent } from "@soperio/react";
import { Breakpoints } from "@soperio/react";

export interface StackProps extends SoperioComponent, ParentComponent, React.HTMLAttributes<HTMLDivElement>
{
  size?: Breakpoints;
  center?: true | false;
  flexDirection: "row"|"column"
};
