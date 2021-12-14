/** @jsx jsx */

import { ParentComponent } from "./HTMLTagProps";
import { jsx } from "./react/react";
import ThemeCache from "./ThemeCache";
import { SoperioTheme } from "./defaultTheme";

interface SoperioProviderProps extends ParentComponent
{
    theme?: SoperioTheme
}

// Init config
ThemeCache.get();

/**
 *
 *
 */
export default function SoperioProvider({ children, ...props }: SoperioProviderProps)
{

    return (
      {children}
    );
}
