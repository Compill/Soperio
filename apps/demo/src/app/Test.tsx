import { SoperioComponent } from "@soperio/react";
import { Button } from "@soperio/ui";

interface TestProps extends SoperioComponent
{
  label?: string
}

export function Test({ label, mx, ...props }: TestProps)
{
  return (
    <div {...props}>I am a test</div>
    // <Button>I'm a button</Button>
  )
}
