import { HTMLDivProps, ParentComponent } from ".";


export function ServerComponent({ children, as, ...props }: HTMLDivProps & ParentComponent & { as?: React.ElementType })
{
  const COMP = as ?? "div"

  return <COMP {...props}>{children}</COMP>
}

ServerComponent.SOPERIO_SERVER_COMPONENT = true
