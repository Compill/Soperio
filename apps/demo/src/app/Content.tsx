import { useDarkMode, useToggleDarkMode } from "@soperio/core";
import { Button } from "@soperio/ui";
import React from "react";
import Page from "./Page";
import Page10 from "./Page10";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
import Page11 from "./Page11";
import { Test } from "./Test";

export function Content()
{
  const [state, setState] = React.useState(1);
  const darkMode = useDarkMode();
  const toggleDarkMode = useToggleDarkMode();

  return (
    <>
      {/* <Test bgColor="red" borderB="2" pt="16" /> */}
      <div dflex flexRow px="16" py="8" bgColor="root.bg-color-2" spaceX="3">
        <Button onClick={() => setState(1)}>Button</Button>
        <Button onClick={() => setState(2)}>Checkbox</Button>
        <Button onClick={() => setState(3)}>Form</Button>
        <Button onClick={() => setState(4)}>Radio</Button>
        <Button onClick={() => setState(5)}>Badge</Button>
        <Button onClick={() => setState(6)}>Card</Button>
        <Button onClick={() => setState(7)}>Select</Button>
        <Button onClick={() => setState(8)}>TextArea</Button>
        <Button onClick={() => setState(9)}>Spinner</Button>
        <Button onClick={() => setState(10)}>Text</Button>
        <Button onClick={() => setState(11)}>Test</Button>
        <Button onClick={() => toggleDarkMode()}>Toggle Dark Mode</Button>
      </div>
      <div h="full" bgColor="root.bg-color-3">
        {state === 1 && <Page />}
        {state === 2 && <Page2 />}
        {state === 3 && <Page3 />}
        {state === 4 && <Page4 />}
        {state === 5 && <Page5 />}
        {state === 6 && <Page6 />}
        {state === 7 && <Page7 />}
        {state === 8 && <Page8 />}
        {state === 9 && <Page9 />}
        {state === 10 && <Page10 />}
        {state === 10 && <Page11 />}
      </div>
    </>
  );
}
