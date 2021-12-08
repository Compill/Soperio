import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import React from "react";
import { jsx } from "@soperio/core";

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
