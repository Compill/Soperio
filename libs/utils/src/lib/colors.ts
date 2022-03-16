import { TinyColor } from "@ctrl/tinycolor"

/**
 * Add an opacity value to an RGB color
 * @param {string} color  RGB color, starting with #
 * @param {number} alpha  Opacity, from to 0 (transparent) to 100 (opaque)
 * @returns #RGBA color
 */
export function applyTransparenceToRGBColor(color: string, alpha: number): string
{
  if (color.length === 7 && alpha >= 0 && alpha <= 100)
  {
    const base16 = Math.round((alpha / 100) * 255);
    const hex = (base16 < 16 ? "0" : "") + base16.toString(16);
    return `${color}${hex}`;
  }

  return color;
}

// TODO Alpha is not good, should be 0..255 instead of /alpha
export function formatColor({ mode, color, alpha }: { mode: string, color: string[], alpha: string; }): string
{
  const hasAlpha = alpha !== undefined;
  return `${mode}(${color.join(' ')}${hasAlpha ? ` / ${alpha}` : ''})`;
}


export function tone(color: string)
{
  const isDark = new TinyColor(color).isDark();
  return isDark ? "dark" : "light";
};

/**
 * Determines if a color tone is "dark"
 * @param color - the color in hex, rgb, or hsl
 */
export function isDark(color: string)
{
  return tone(color) === "dark";
}

/**
 * Determines if a color tone is "light"
 * @param color - the color in hex, rgb, or hsl
 */
export function isLight(color: string)
{
  return tone(color) === "light";
}

/**
 * Make a color transparent
 * @param color - the color in hex, rgb, or hsl
 * @param opacity - the amount of opacity the color should have (0-1)
 */
export function transparentize(color: string, opacity: number)
{
  return new TinyColor(color).setAlpha(opacity).toRgbString();
};

/**
 * Add white to a color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add (0-100)
 */
export function whiten(color: string, amount: number)
{
  return new TinyColor(color).mix("#fff", amount).toHexString();
};

/**
 * Add black to a color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount black to add (0-100)
 */
export function blacken(color: string, amount: number)
{
  return new TinyColor(color).mix("#000", amount).toHexString();
};

/**
 * Darken a specified color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount to darken (0-100)
 */
export function darken(color: string, amount: number)
{
  return new TinyColor(color).darken(amount).toHexString();
};

/**
 * Lighten a specified color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount to lighten (0-100)
 */
export function lighten(color: string, amount: number)
{
  return new TinyColor(color).lighten(amount).toHexString();
}
