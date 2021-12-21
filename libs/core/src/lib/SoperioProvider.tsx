/** @jsx jsx */

import { jsx } from "./react/react";
import { ParentComponent } from "..";
import { defaultTheme } from "./defaultTheme";
import { useSetDarkMode } from "./hooks/useDarkMode";
import { useSetDirection } from "./hooks/useDirection";
import { NormalizeCSS } from "./NormalizeCSS";
import { Theme } from "./Theme";


interface SoperioProviderProps extends ParentComponent {
  resetCss?: boolean,
  theme?: Theme,
  darkMode?: "light" | "dark" | "system";
  direction?: "rtl" | "ltr"
};

export function SoperioProvider({
  resetCss = true,
  theme = defaultTheme,
  direction,
  darkMode,
  children
}: SoperioProviderProps) 
{
  // TODO define theme if set

  console.log("SoperioProvider")

  const setDarkMode = useSetDarkMode();
  const setDirection = useSetDirection();
  console.log("soperio init");

  let initDarkMode = false;

  if (darkMode) 
  {
    if (darkMode === "dark")
      initDarkMode = true;
    else if (darkMode === "system") {
      // TODO
    }
  }

  setDarkMode(initDarkMode);
  setDirection(direction || theme.direction || "ltr");

  return (
    <div>
      {resetCss ? <NormalizeCSS /> : null}
      <div dir={direction || theme.direction || "ltr"} textColor="root.text-color-1">
        {children}
      </div>
    </div>
  )
}
