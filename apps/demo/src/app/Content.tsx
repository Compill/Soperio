// @jsx jsx */

import { Button } from "@soperio/ui";
import Page from "./Page";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import React from "react";
import { jsx, useDarkMode, useToggleDarkMode } from "@soperio/core";

export function Content()
{
  const [state, setState] = React.useState(1);
  const darkMode = useDarkMode();
  const toggleDarkMode = useToggleDarkMode();

  console.log("darkMode", darkMode)

  return (
    <>
      <div dflex flexRow px="16" py="8" bgColor="root.bg-color-1" spaceX="3">
        <Button onClick={() => setState(1)}>Button</Button>
        <Button onClick={() => setState(2)}>Checkbox</Button>
        <Button onClick={() => setState(3)}>Form</Button>
        <Button onClick={() => setState(4)}>Radio</Button>
        <Button onClick={() => setState(5)}>Badge</Button>
        <Button onClick={() => setState(6)}>Card</Button>
        <Button onClick={() => setState(7)}>Select</Button>
        <Button onClick={() => setState(8)}>TextArea</Button>
        <Button onClick={() => toggleDarkMode()}>Toggle Dark Mode</Button>
      </div>
      <div>
        {state === 1 && <Page />}
        {state === 2 && <Page2 />}
        {state === 3 && <Page3 />}
        {state === 4 && <Page4 />}
        {state === 5 && <Page5 />}
        {state === 6 && <Page6 />}
        {state === 7 && <Page7 />}
        {state === 8 && <Page8 />}
      </div>
    </>
  );
}
