// @jsx jsx */


import React from "react";
import {jsx, init, SoperioInit } from "@soperio/core";
import { Content } from "./Content";

// jsx("div", {});

init();

function App()
{


  React.useEffect(() =>
  {
    // init();
  }, []);

  return (
    <>
      <SoperioInit />
      <Content />
    </>
  );
}

export default App;
