/** @jsx jsx */

import { ParentComponent } from "./HTMLTagProps";
import { jsx } from "./react/react";
import ConfigCache from "./ConfigCache";
import { SoperioConfig } from "./defaultConfig";

interface SoperioProviderProps extends ParentComponent
{
    theme?: SoperioConfig
}

// Init config
ConfigCache.get();

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
