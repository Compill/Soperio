import { SoperioProvider, useDirection, useToggleDirection } from "@soperio/core";
import { Button } from "@soperio/ui";
import { defaultTheme } from "@soperio/core";
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

  const customTheme = {
    ...defaultTheme, globalStyles: {
      body: {
        fontFamily: "Inter, sans-serif",
        fontFeatureSettings: "'kern'",
        webkitFontSmoothing: "antialiased",
        textRendering: "optimizelegibility"
      }
    }
  };

  return (
    <SoperioProvider direction={direction ? "ltr" : "rtl"} theme={customTheme}>
      <Button onClick={toggleDirection}>Toggle direction</Button>
      <Content />
    </SoperioProvider>
  );
}

export default App;
