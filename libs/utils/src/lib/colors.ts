
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
