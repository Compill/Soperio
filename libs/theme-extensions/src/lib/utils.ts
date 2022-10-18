type COLOR = Record<number | string, string>
type COLORS = Record<string, COLOR>
type PALETTE = string
type COLORKEY = keyof COLORS

export function getPaletteColors(colors: COLORS, colorKeys?: COLORKEY[], palette?: PALETTE[])
{
    let soperioColors = {};

    (colorKeys ?? Object.keys(colors))
        .map((color) =>
        {
            const colorObj = colors[color]

            const mappedColors = {}

            const keys = palette ?? Object.keys(colorObj)

            keys.forEach((key, index) => mappedColors[`${color}-${key}`] = colorObj[key])

            return mappedColors
        })
        .forEach((paletteColors) => soperioColors = { ...soperioColors, ...paletteColors })

    return soperioColors
}

export function getAliasedPaletteColors(colors: COLORS, alias: string, color: COLORKEY, palette?: PALETTE[])
{
    const colorObj = colors[color]

    const mappedColors = {}

    const keys = palette ?? Object.keys(colorObj)

    keys.forEach((key, index) => mappedColors[`${alias}-${key}`] = colorObj[key])

    return mappedColors
}