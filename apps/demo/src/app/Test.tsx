import { SoperioComponent } from "@soperio/core";

interface TestProps extends SoperioComponent
{
  label?: string
}

export function Test({ label, mx, ...props }: TestProps)
{
  return (
    <div {...props}>I am a test</div>
  )
}
