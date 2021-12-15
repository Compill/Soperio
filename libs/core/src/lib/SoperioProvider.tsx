/** @jsx jsx */

import { ParentComponent } from "./HTMLTagProps";
import { jsx } from "./react/react";
import ThemeCache from "./ThemeCache";
import { Theme } from "./Theme";

interface SoperioProviderProps extends ParentComponent
{
    theme?: Theme
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
