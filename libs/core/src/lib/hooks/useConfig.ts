import React from "react";
import ConfigCache from "../ConfigCache";
import { SoperioConfig } from "../defaultConfig";

export function useConfig(): SoperioConfig
{
    const [config, setConfig] = React.useState(ConfigCache.get().config);

    const onChange = React.useCallback(() =>
    {
        setConfig(ConfigCache.get().config);
    }, [setConfig]);

    React.useEffect(() =>
    {
        ConfigCache.get().addListener(onChange);
    }, [onChange]);

    return config;
}
