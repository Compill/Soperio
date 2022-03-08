
import { isObject } from "lodash"
import { extractPropertyPaths, printUnions } from "./extract-property-paths"
import { formatWithPrettierIfAvailable } from "./format-with-prettier"

export interface ThemeKeyOptions {
  /**
   * Property key in the theme object
   * @example colors
   */
  key: string
  /**
   * Maximum extraction level
   * @example
   * union: gray.500
   * level: 1---|2--|
   * @default 1
   */
  maxScanDepth?: number
  /**
   * Pass a function to filter extracted values
   * @example
   * Exclude numeric index values from `breakpoints`
   * @default () => true
   */
  filter?: (value: string) => boolean

  /**
   * Pass a function to flatMap extracted values
   * @default value => value
   */
  flatMap?: (value: string) => string | string[]
}

export interface CreateThemeTypingsInterfaceOptions {
  config: ThemeKeyOptions[]
  strictComponentTypes?: boolean
}

export async function createThemeTypingsInterface(
  theme: Record<string, unknown>,
  { config, strictComponentTypes = false }: CreateThemeTypingsInterfaceOptions,
) {
  // console.log("generating colorThemes")
  // extractPropertyPaths(theme["colorThemes"], 1)

  const unions = config.reduce(
    (
      allUnions,
      { key, maxScanDepth, filter = () => true, flatMap = (value) => value },
    ) => {
      
      const target = theme[key]
      if (isObject(target) || Array.isArray(target)) {
        allUnions[key] = extractPropertyPaths(target, maxScanDepth)
        // .filter(filter)
        // .flatMap(flatMap)
      } else {
        allUnions[key] = []
      }
      return allUnions
    },
    {} as Record<string, any>,
  )


  const template =
    // language=ts
    `// regenerate by running
// npx @Soperio/cli build-theme path/to/your/theme.(js|ts)
export interface ThemeTypings {
  ${printUnions(unions)}
}

`
  return formatWithPrettierIfAvailable(template)
}
