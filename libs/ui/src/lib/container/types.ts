import { Breakpoints, ParentComponent, SoperioComponent } from "@soperio/react";

export interface ContainerProps extends SoperioComponent, ParentComponent, React.HTMLAttributes<HTMLDivElement>
{
  size?: Breakpoints;
  center?: true | false;
};
