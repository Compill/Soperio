import { ColorTheme } from "@soperio/core";
import { IS_DEV } from "@soperio/utils";
import deepmerge from "deepmerge";
import React from "react";
import { CustomComponentConfigFn, SoperioComponentConfig } from "../ComponentConfig";
import { Soperio } from "../Soperio";


export function useComponentConfig<T extends SoperioComponentConfig>(component = "", theme: ColorTheme, customConfig: CustomComponentConfigFn<T> | undefined): T
{
    const [defaultConfig] = React.useState(() => Soperio.getComponentConfig(component));

    if (!defaultConfig && IS_DEV)
        console.log(`[Soperio] ${component} default config does not exist. Make sure to register it by calling Soperio.registerComponent().`);

    if (customConfig)
    {
        const c = customConfig(theme);

        if (c.mode === "extends")
        {
            console.log("customConfig", { ...(defaultConfig ? defaultConfig(theme) : null), ...c.config })
            return deepmerge(defaultConfig ? defaultConfig(theme): {}, c.config) as T;
        }

        return c.config;
    }

    if (defaultConfig)
        return defaultConfig(theme) as T;

    return {} as T;
}
