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
    // <div divideY divideColor="red" m="10" divideX>
    //   <div>List Item 1</div>
    //   <div>List Item 2</div>
    //   <div>List Item 3</div>
    //   <div>List Item 4</div>
    //   <div>List Item 5</div>
    //   <div>List Item 6</div>
    // </div>

    <div 
      bgColor="sky-500"
      sm_bgColor="purple-500"
      md_bgColor="emerald-500"
      lg_bgColor="pink-500"
      xl_bgColor="orange-500"
      xxl_bgColor="red-500"
      textColor="white">
      This is some responsive text block
    </div>
  )
}
