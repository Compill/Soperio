import { IS_DEV } from "@soperio/utils";
import { getStyleConfig } from "./CSS/utils";
import config from "./defaultConfig";
import { transformColorToGlobalVar } from "./PropTypes/Color";
import { insertCss } from "./utils/insertCss";

// TODO This will be a library, man!
// Find a better way to do this part
export function init()
{
    if (!config.rootColors && IS_DEV)
        console.log("[Soperio Core]: Your config is invalid and is missing the \"rootColors\" property object");

    const rootColors: any = config.rootColors;

    let css = ":root {\n";

    for (const cssVar in rootColors)
    {
        const color: string = rootColors[cssVar] as string;

        let parsedColor = getStyleConfig("colors", color) || color;

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
