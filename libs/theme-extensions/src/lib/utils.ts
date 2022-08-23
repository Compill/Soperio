export function getPaletteColors<COLORS extends Record<string, Record<number | string, string>>, PALETTE extends string, COLORKEY = keyof COLORS>(colors: COLORS, colorKeys?: COLORKEY[], palette?: PALETTE[])
{
    let soperioColors = {};

    (colorKeys ?? Object.keys(colors))
        .map((color) =>
        {
            const colorObj = colors[color]

            const mappedColors = {}

            const keys = palette ?? Object.keys(colors)

            keys.forEach((value, index) => mappedColors[`${color}-${index}`] = colorObj[value])

            return mappedColors
        })
        .forEach((paletteColors) => soperioColors = { ...soperioColors, ...paletteColors })

    return soperioColors
}