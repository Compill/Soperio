
import { ParentComponent, SoperioComponent } from "@soperio/components";
import { Breakpoints } from "@soperio/theming";

export interface ContainerProps extends SoperioComponent, ParentComponent, React.HTMLAttributes<HTMLDivElement>
{
  size?: Breakpoints;
  center?: true | false;
};
