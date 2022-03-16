import { ThemeKeyOptions } from "./theme/create-theme-typings-interface"

export const themeKeyConfiguration: ThemeKeyOptions[] = [
  { key: "rootColors" },
  { key: "colors", maxScanDepth: 3 },
  { key: "colorThemes", maxScanDepth: 1},
  { key: "darkModeOverride" },
  { key: "breakpoints"},
  { key: "border"},
  { key: "effects" },
  { key: "flexbox" },
  { key: "interactivity", maxScanDepth: 2 },
  { key: "filters" },
  { key: "opacity" },
  { key: "sizing"},
  { key: "spacing"},
  { key: "transform" },
  { key: "transition" },
  { key: "typography", maxScanDepth: 2 }
]
