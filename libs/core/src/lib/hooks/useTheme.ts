import React from "react";
import ThemeCache from "../ThemeCache";
import { Theme } from "../Theme";

export function useTheme(): Theme
{
    const [theme, setTheme] = React.useState(ThemeCache.get().theme);

    const onChange = React.useCallback(() =>
    {
        setTheme(ThemeCache.get().theme);
    }, [setTheme]);

    React.useEffect(() =>
    {
        ThemeCache.get().addListener(onChange);
    }, [onChange]);

    return theme;
}
