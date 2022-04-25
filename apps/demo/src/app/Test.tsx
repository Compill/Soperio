import { SoperioComponent } from "@soperio/react";
import { Button } from "@soperio/ui";

// interface TestProps extends SoperioComponent
// {
//   label?: string
// }

export function Test(/*{ label, mx, ...props }: TestProps*/)
{
  return (
    // <div {...props}>I am a test</div>
    // <Button>I'm a button</Button>
    <div divideY divideColor="red" m="10" divideX>
      <div>List Item 1</div>
      <div>List Item 2</div>
      <div>List Item 3</div>
      <div>List Item 4</div>
      <div>List Item 5</div>
      <div>List Item 6</div>
    </div>
  )
}
