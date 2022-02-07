import { SoperioProvider, useDarkMode, useDirection, useToggleDirection } from "@soperio/core";
import { Button } from "@soperio/ui";
import { defaultTheme } from "@soperio/core";
import React from "react";
import { Content } from "./Content";
// import { Content } from "./Content";
// import Page11 from "./Page11"
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

      {/* <Page11 /> */}
      {/* <Content /> */}
    </SoperioProvider>
  );
}

export default App;
