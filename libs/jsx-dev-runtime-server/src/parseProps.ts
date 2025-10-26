import { CSSPropKeys, getThemeStyle, SoperioComponent, Theme, ThemeCache } from "@soperio/theming";
import deepmerge from "deepmerge";
import { isObject } from "@soperio/utils";
import { CSSPropsMap } from "@soperio/core";


const CACHE_TYPE = "prop"
const REMOVE_IF_VARIANT = "remove_if_variant"


function mergeTraitPropIfExist<P extends SoperioComponent>(props: P, theme: Theme)
{
  // Merge trait props with rest of props
  if ("trait" in props)
  {
    const newProps = { ...props }

    const traitPropValue = newProps["trait"]

    const key = `trait${traitPropValue}`
    let traitProps = ThemeCache.get().get(CACHE_TYPE, key)

    if (!traitProps)
    {
      if (typeof traitPropValue === "string")
      {
        traitProps = getThemeStyle(theme, "traits", traitPropValue)

        if (!traitProps)
          console.warn(`[Soperio]: you tried to use trait ${traitPropValue} but it doesn't exist in the theme`)
        else
          ThemeCache.get().put(CACHE_TYPE, key, traitProps)
      }
      else if (traitPropValue)
      {
        for (const trait of traitPropValue as string[])
        {
          const themeProps = getThemeStyle(theme, "traits", trait)
          let hasTrait = false

          if (themeProps)
          {
            hasTrait = true
            traitProps = { ...traitProps, ...themeProps }
          }
          else
          {
            console.warn(`[Soperio]: you tried to use trait ${trait} but it doesn't exist in the theme`)
          }

          if (!hasTrait)
            traitProps = undefined
          else
            ThemeCache.get().put(CACHE_TYPE, key, traitProps)
        }

        delete newProps["trait"]
      }
    }

    if (traitProps)
    {
      const keys = Object.keys(newProps)
      const index = keys.indexOf("trait")
      const length = keys.length

      // Merge props with trait props
      let o = {}
      for (let i = 0; i < index; i++)
        o[keys[i]] = newProps[keys[i]]

      o = { ...o, ...traitProps }

      for (let i = index + 1; i < length; i++)
        o[keys[i]] = props[keys[i]]

      return o
    }
  }

  return { ...props }
}

const lastProps = ["opacity"]

function sortProps(keys: string[])
{
  // Put all "opacity" props at the end of the array
  // This will ensure that "color" props are set first and opacity after
  // TODO Other props like scale, translate, ... before transform
  // and some other props too
  const filtered: string[] = []
  const last: string[] = []

  keys.forEach((key) =>
  {
    const lowerCaseKey = key.toLowerCase()

    if (lastProps.some((lastProp) => lowerCaseKey.includes(lastProp)))
      last.push(key)
    else
      filtered.push(key)
  })

  return filtered.concat(last)
}

function getVariant(variant: string, value: any)
{
  return {
    [variant === "groupHover" ? `[data-so-group]:hover &` : `&:${variant}`]: value
  }
}

export function parseProps<P extends SoperioComponent>(props: P, theme: Theme, direction: boolean, darkMode: boolean)
{
  // "trait" is a special prop, we need to parse it before the rest
  const newProps: any = mergeTraitPropIfExist(props, theme);
  delete newProps["__SOPERIO_TYPE_PLEASE_DO_NOT_USE__"]

  if ("group" in newProps)
  {
    // Replace `group` by exploitabled html prop in css
    delete newProps["group"]
    newProps["data-so-group"] = ""
  }

  // Sort keys in the right order so that some props are not messed up
  const keys = sortProps(Object.keys(newProps));

  if (keys.length > 0)
  {
    const css: any = {};

    for (const prop of keys)
    {
      if (prop.startsWith("__"))
        continue;

      const variants = prop.split("_");
      const propName: string = variants.pop()!;

      if (!CSSPropKeys.includes(propName))
        continue;

      const propValue = newProps[prop]
      const isObjectType = isObject(propValue)
      // We need to differentiate strings from numbers
      // For spacing values for example, strings are mapped to the theme
      // While numbers are trasnformed into pixed values
      const valueKey = isObjectType ? "" : `${propValue}-${typeof propValue}`
      const key = `${propName}${isObjectType ? JSON.stringify(propValue) : valueKey}`

      let parsed = ThemeCache.get().get(CACHE_TYPE, key)

      delete newProps[prop];
    }


    // Emotion css rules take precedence over soperio rules
    // This is the logical choice since one wouldn't use the "css"
    // prop to set a rule that can be done with regular soperio
    // responsive props

    if (css.css)
      Object.assign(css, deepmerge(css, css.css))

    newProps.css = {} //emotionCss(css, ...mqArray)

    return newProps;
  }

  return { ...newProps };
}
