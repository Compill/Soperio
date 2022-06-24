import React from "react";
import { useAppContext } from "./AppContext";
import { menu } from "./config";

export function Content()
{
  const { page } = useAppContext()
  const reactElement = menu[page]()

  return (
    <div minH="calc(100% - 64px)" bgColor="root.bg-color-3">
      <React.Suspense>
        {reactElement}
      </React.Suspense>
    </div>
  );
}
