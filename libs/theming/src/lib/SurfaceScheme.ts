import { Color } from "./CSSTypes"
import { ThemingToken } from "./ThemingToken"

type BuildSurfaceOptions =
{
  autoGenerateColors: "material" | "alpha",

}

export function buildSurface(surface: Partial<SurfaceSchemeSet>)
{
  // TODO Build a surface from a partial one
  // If some colors from some states are not defined, use the primary color
  // main.color & main.onColor should at least be defined
}

export function buildSurfaceFromColor(color: Color, options: BuildSurfaceOptions)
{
  // TODO Build color palette from color
  // Then build surface from options
  // Either a material style surface
  // Or a Chakra-UI style surface (like the one I did with colorThemes)
}

export interface SurfaceSchemeSet
{
  main: SurfaceScheme,
  mainInverse: SurfaceScheme,
  mainLayer: SurfaceScheme,
  alt: SurfaceScheme
  altInverse: SurfaceScheme
}

export interface SurfaceColorSet
{
  color: Color,
  onColor: Color
}

export interface SurfaceScheme extends SurfaceColorSet
{
  selected: SurfaceColorSet
  active: SurfaceColorSet,
  pressed: SurfaceColorSet,
  disabled: SurfaceColorSet,
  hover: SurfaceColorSet &
  {
    selected: SurfaceColorSet,
    active: SurfaceColorSet,
  }
}

// Surface component variants
// This will be the basis for all surface-based components
// This will greatly simplify the config of components
interface SurfaceVariant
{
  main: Color,        // bg: main, color: onMain
  mainInverse: Color, // bg: onMain, color: main
  mainLayer: Color    // bg: transparent, color: onMain
  alt: Color,         // bg: alt, color: onAlt
  altInverse: Color,  // bg: onAlt, color: alt
  altHoverMain: Color // bg: alt, color: onAlt, hover_bg: main, hover_color: onMain
}

// interface Surface
// {
//   bg: Color
//   content: Color
//   contentSecondary: Color
//   border: Color // ?
//   divider: Color // ?
//   "bg.disabled": Opacity
//   "content.disabled": Opacity
//   "hover": Color
//   "focused": Color
//   "selected": Color
//   "pressed": Color
//   "activated": Color
//   "selected.hover": Color
//   "focused.hover": Color
//   "pressed.hover": Color
//   "activated.hover": Color
//   "selected.focused": Color
//   "focused.focused": Color
//   "pressed.focused": Color
//   "activated.focused": Color
//   "bg.hover": Color
//   "bg.selected.hover": Color
//   "bg.focused.hover": Color
//   "bg.pressed.hover": Color
//   "bg.activated.hover": Color
//   "bg.selected.focused": Color
//   "bg.focused.focused": Color
//   "bg.pressed.focused": Color
//   "bg.activated.focused": Color
// }

// interface SurfaceSet
// {
//   primary: Surface // primary color bg, white text
//   alt: Surface    // light color bg, primary color text
//   plain: Surface  // white bg, primary color text
//   layer: Surface  // transparent bg, primary color text
// }


/*

  <div surface="primary">
  <div surface="primary.light">
  <div surface="primary.accent">
  <div surface="header">
  <div surface="footer">
  <div surface="dialog">
  <div surface="menuItem">

  <span surfaceLayer=""

*/

/*

  surface:
    - background
    - content

    - surface.bg
    - surface.bg.hover            surface.bg + sruface.hover
    - surface.bg.selected
    - surface.bg.selected.hover   surface.bg.selected + surface.hover

    - surface.selected
    - surface.selected.hover      surface.selected + surface.hover

*/


/*

  How can I do surface="primary" on container
  And then bgColor = "surface.bg", textColor="surface.content", hover_bgColor="surface.bg.hover" on children ?

  <div surface="primary" bgColor="surface.bg" hover_bgColor="surface.bg.hover">
    <span textColor="surface.content">Hello</span>
    <div>
      <span textColor="surface.secondaryText">Secondary text</span>
    </div>
  </div>

  sf.primary.bg.hover
  sf.primary.bg.selected.hover


  function parseColor(color:any)
  {
    if (color.startsWith("surface"))
    {
      // => How to retrieve surface from theme, based on surface from element, or if not set, from parent?
    }
  }
*/

/*

End of story: A lot of CSS var does not hinder perfs too much (5000 CSS vars loses only 0.7% perf)

Can't get everything: a awesome super simple and productive framework and 100% perfs

*/

/*

  surface


*/
