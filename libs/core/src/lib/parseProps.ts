import { css as emotionCss } from "@emotion/react";
import { getThemeStyle, SoperioComponent, Theme, ThemeCache } from "@soperio/theming";
import deepmerge from "deepmerge";
import { StyleFn, ThemeStyleFn } from "./CSS/utils";
import { CSSPropKeys, CSSPropsMap } from "./CSSProps";
import { isObject } from "@soperio/utils";


const pseudoClasses: string[] = ["focus", "hover", "groupHover", /*"placeholder", "before", "after"*/];
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

const lastProps = [ "opacity" ]

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
    [variant === "groupHover" ? `[data-so-group]:hover &`: `&:${variant}`]: value
  }
}

export function parseProps<P extends SoperioComponent>(props: P, theme: Theme, direction: boolean, darkMode: boolean)
{
  // "trait" is a special prop, we need to parse it before the rest
  const newProps: any = mergeTraitPropIfExist(props, theme);
  delete newProps["__SOPERIO_TYPE_PLEASE_DO_NOT_USE__"]

  const breakpoints = theme.breakpoints
  const breakpointArray = Object.keys(breakpoints)
  breakpointArray.shift() // Remove "default"

  const mediaQueries:any = {}

  function buildMediaQuery(bp: string)
  {
    let mediaQuery = mediaQueries[bp]

    if (!mediaQuery)
    {
      mediaQuery = `@media screen and (min-width: ${breakpoints[bp]})`
      mediaQueries[bp] = mediaQuery
    }

    return mediaQuery
  }

  function getMediaQuery(bp: string, value: any)
  {
    return { [buildMediaQuery(bp)]: value }
  }

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
      const key = `${propName}${isObject(propValue) ? JSON.stringify(propValue) : propValue}`

      let parsed = ThemeCache.get().get(CACHE_TYPE, key)

      if (!parsed)
      {
        const func = CSSPropsMap[propName]

        if (func.length === 1)
          parsed = (func as StyleFn) .call(null, newProps[prop])
        else
          parsed = (func as ThemeStyleFn).call(null, newProps[prop], theme, direction, darkMode)

        if (parsed[REMOVE_IF_VARIANT])
        {
          if (variants.length > 0)
            delete parsed[parsed[REMOVE_IF_VARIANT]]

          delete parsed[REMOVE_IF_VARIANT]
        }

        ThemeCache.get().put(CACHE_TYPE, key, parsed)
      }

      if (variants.length === 2)
      {
        // ["md", "focus"]
        const variant = getVariant(variants[1], parsed)
        const mediaQuery = getMediaQuery(variants[0], variant)
        Object.assign(css, deepmerge(css, mediaQuery))
      }
      else if (variants.length === 1)
      {
        // ["md"] || ["focus"]
        if (pseudoClasses.includes(variants[0]))
          Object.assign(css, deepmerge(css, getVariant(variants[0], parsed)))
        else
          Object.assign(css, deepmerge(css, getMediaQuery(variants[0], parsed)))
      }
      else
      {
        Object.assign(css, deepmerge(css, parsed))
      }

      delete newProps[prop];
    }


    // Emotion css rules take precedence over soperio rules
    // This is the logical choice since one wouldn't use the "css"
    // prop to set a rule that can be done with regular soperio
    // responsive props

    if (css.css)
      Object.assign(css, deepmerge(css, css.css))

    const mqArray:any[] = []

    for (const bp of breakpointArray)
    {
      const mediaQuery = buildMediaQuery(bp)

      if (css[mediaQuery])
      {
        if (css[mediaQuery]?.css)
        {
          css[mediaQuery] = deepmerge(css[mediaQuery], css[mediaQuery].css)
          delete css[mediaQuery].css
        }

        mqArray.push({ [mediaQuery]: css[mediaQuery]})
        delete css[mediaQuery]
      }
    }

    newProps.css = emotionCss(css, ...mqArray)

    return newProps;
  }

  return { ...newProps };
}
