// @jsx jsx */


import React from "react";
import {jsx, SoperioInit } from "@soperio/core";
import { Content } from "./Content";

// jsx("div", {});

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
