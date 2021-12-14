import { IS_DEV } from "@soperio/utils";
import { getThemeStyle } from "./CSS/utils";
import { defaultTheme } from "./defaultTheme";
import { transformColorToGlobalVar } from "./PropTypes/Color";
import { insertCss } from "./utils/insertCss";

// TODO This will be a library, man!
// Find a better way to do this part
export function init()
{
  // TODO should not use defaultTheme but useTheme()
    if (!defaultTheme.rootColors && IS_DEV)
        console.log("[Soperio Core]: Your theme is invalid and is missing the \"rootColors\" property object");

    const rootColors: any = defaultTheme.rootColors;

    let css = ":root {\n";

    for (const cssVar in rootColors)
    {
        const color: string = rootColors[cssVar] as string;

        let parsedColor = getThemeStyle("colors", color) || color;

        parsedColor = transformColorToGlobalVar(parsedColor);

        if (parsedColor)
            css += `\t--so-${cssVar}: ${parsedColor};\n`;
    }

    css += "}";

    // TODO I should use a CSS Sheet so that I can
    // reinsert the same globals vars when I switch
    // to dark theme for example
    // Otherwise, I will end up with a lot of style tags
    // overidding each other

    insertCss(css);
}
