import React from "react";


const TestPage = React.lazy(() => import("../pages/Test"));


export const menu = {
  "Test": () => <TestPage />,
}
