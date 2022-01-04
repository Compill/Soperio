import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { jsx } from "@soperio/react";

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
