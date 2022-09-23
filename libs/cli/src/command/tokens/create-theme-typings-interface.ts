import { formatWithPrettierIfAvailable } from "../../utils/format-with-prettier"
import { isObject } from "../../utils/is-object"
import { extractPropertyPaths, printUnionMap } from "./extract-property-paths"

export interface ThemeKeyOptions
{
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
     * @default 3
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

export interface CreateThemeTypingsInterfaceOptions
{
    config: ThemeKeyOptions[]
    format?: boolean
}

export async function createThemeTypingsInterface(
    theme: Record<string, unknown>,
    {
        config,
        format = true,
    }: CreateThemeTypingsInterfaceOptions,
)
{
    const unions = config.reduce(
        (
            allUnions,
            { key, maxScanDepth, filter = () => true, flatMap = (value) => value },
        ) =>
        {
            const target = theme[key]

            allUnions[key] = []

            if (isObject(target) || Array.isArray(target))
            {
                allUnions[key] = extractPropertyPaths(target, maxScanDepth)
                    .filter(filter)
                    .flatMap(flatMap)
            }

            return allUnions
        },
        {} as Record<string, string[]>,
    )

    const template =
        // language=ts
        `// regenerate by running
// npx @soperio/cli tokens path/to/your/theme.(js|ts)
export interface ThemeTypings 
{
  ${printUnionMap(unions)}
}

`

    return format ? formatWithPrettierIfAvailable(template) : template
}
