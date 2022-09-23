import { ThemeKeyOptions } from "./create-theme-typings-interface"

export const themeKeyConfiguration: ThemeKeyOptions[] = [
    { key: "rootColors" },
    { key: "colors", maxScanDepth: 3 },
    { key: "darkModeOverride" },
    { key: "breakpoints" },
    { key: "border" },
    { key: "effects" },
    { key: "flexbox" },
    { key: "filters" },
    { key: "opacity" },
    { key: "sizing" },
    { key: "spacing" },
    { key: "transform" },
    { key: "transition" },
    { key: "typography", maxScanDepth: 2 },
    { key: "traits" }
]
