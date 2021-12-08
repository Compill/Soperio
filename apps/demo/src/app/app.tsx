import Page from "./Page";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import React from "react";
import {jsx, init, NormalizeCSS } from "@soperio/core";

jsx("div", {});

init();

function App()
{
  React.useEffect(() =>
  {
    // init();
  }, []);
  return (
    <>
      <NormalizeCSS />
      {/* <Page /> */}
      {/* <Page2 /> */}
      {/* <Page3 /> */}
      {/* <Page4 /> */}
      {/* <Page5 /> */}
      <Page6 />
    </>
  );
}

export default App;
