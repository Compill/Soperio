// @jsx jsx */

import { jsx } from "@soperio/react";
import { SoperioProvider, useDirection, useToggleDirection } from "@soperio/core";
import { Button } from "@soperio/ui";
import React from "react";
import { Content } from "./Content";

// jsx("div", {});

function App()
{
  const direction = useDirection();
  const toggleDirection = useToggleDirection();

  React.useEffect(() =>
  {
    // init();
  }, []);

  return (
    <SoperioProvider direction={direction ? "ltr" : "rtl"}>
      <Button onClick={toggleDirection}>Toggle direction</Button>
      <Content />
    </SoperioProvider>
  );
}

export default App;
