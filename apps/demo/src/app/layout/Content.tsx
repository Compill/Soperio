import React from "react";
import { useAppContext } from "./AppContext";
import { menu } from "./config";

export function Content()
{
  const { page } = useAppContext()
  const reactElement = menu[page]()

  return (
    <div minH="calc(100% - 64px)" bgColor="--bg" transition="colors" border="">
      <React.Suspense>
        {reactElement}
      </React.Suspense>
    </div>
  );
}
