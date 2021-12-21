// @jsx jsx */


import React from "react";
import { jsx, SoperioProvider } from "@soperio/core";
import { Content } from "./Content";
import { Button } from "@soperio/ui";

// jsx("div", {});

function App() 
{
  const [direction, setDirection] = React.useState(false)

  React.useEffect(() => {
    // init();
  }, []);

  return (
    <SoperioProvider direction={direction ? "rtl" : "ltr"} darkMode="dark">
      <Button onClick={() => setDirection(!direction)}>Toggle direction</Button>
      <Content />
    </SoperioProvider>
  );
}

export default App;
