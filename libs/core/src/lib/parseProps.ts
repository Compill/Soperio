import { css as emotionCss } from "@emotion/react";
import { getThemeStyle, SoperioComponent, Theme, ThemeCache } from "@soperio/theming";
import deepmerge from "deepmerge";
import murmurhash from "murmurhash";
import { StyleFn, ThemeStyleFn } from "./CSS/utils";
import { CSSPropKeys, CSSPropsMap } from "./CSSProps";
import { isObject } from "@soperio/utils";
import { serializeStyles } from "@emotion/serialize";


const pseudoClasses: string[] = ["focus", "hover", "groupHover", /*"placeholder", "before", "after"*/];
const CACHE_TYPE = "prop"
const REMOVE_IF_VARIANT = "remove_if_variant"

const breakpointIndex = {
  sm: "0",
  md: "1",
  lg: "2",
  xl: "3",
  x2: "4",
}

function getMediaQuery(minWidth: string)
{
  return `@media screen and (min-width: ${minWidth})`
}

function parseRules(css: Record<string, string | any>, breakpoints: any/*ThemeBreakpoints*/, wrap = true): string
{
  let content = "";

  if (css)
  {
    const pseudos: string[] = [];
    const mediaQueries: Record<string, string> = {};

    let encounteredCssProp = false

    Object.keys(css).sort().forEach(key =>
    {
      if (pseudoClasses.includes(key))
      {
        if (key === "groupHover")
          pseudos.push(`[data-so-group]:hover & {\n${parseRules(css[key], breakpoints, false)}}`);
        else
          pseudos.push(`&:${key} {\n${parseRules(css[key], breakpoints, false)}}`);
      }
      else if (key.startsWith("media-"))
      {
        const breakpoint = key.split("-")[1];
        mediaQueries[breakpointIndex[breakpoint as keyof typeof breakpointIndex]] = `${getMediaQuery(breakpoints[breakpoint])} {\n\t${parseRules(css[key], breakpoints, false)}\n}`
        // mediaQueries.push(`@media screen and (min-width: ${getThemeStyle("breakpoints", breakpoint)}) {\n\t${parseRules(css[key], false)}\n}`);
      }
      else
      {
        const cssRule = css[key];

        if (!encounteredCssProp && key === "css")
        {
          console.log("css rule", cssRule)
          content += `\n\n${cssRule}\n\n`
          encounteredCssProp = true
        }
        else if (typeof cssRule === "string" || typeof cssRule === "number")
          content += `\t${key}: ${cssRule};\n`;
        else
          pseudos.push(`&${key} {\n${parseRules(cssRule, false)}}`);
      }
    });

    // if (wrap)
    //     content = `.${className} {\n${content}}`;

    if (pseudos)
      content += `${wrap ? "\n\n" : ""}${pseudos.join("\n\n")}`;

    if (mediaQueries)
      // Make sure mediaQueries are inserted in the right order, from  smaller to larger breakpoint
      content += `${wrap ? "\n\n" : ""}${Object.keys(mediaQueries).sort().map(key => mediaQueries[key as keyof typeof mediaQueries]).join("\n\n")}`;
  }

  return content;
}

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

export function parseProps<P extends SoperioComponent>(props: P, theme: Theme, direction: boolean, darkMode: boolean)
{
  // "trait" is a special prop, we need to parse it before the rest
  const newProps: any = mergeTraitPropIfExist(props, theme);
  delete newProps["__SOPERIO_TYPE_PLEASE_DO_NOT_USE__"]

  const responsiveCss = {
    css: props.css ?? {},
    "media-sm": { css: props.sm_css ?? {} },
    "media-md": { css: props.md_css ?? {} },
    "media-lg": { css: props.lg_css ?? {} },
    "media-xl": { css: props.xl_css ?? {} },
    "media-x2": { css: props.x2_css ?? {} },
  }

  // const cssProps = {...newProps.css }
  delete newProps.css
  delete newProps.sm_css
  delete newProps.md_css
  delete newProps.lg_css
  delete newProps.xl_css
  delete newProps.x2_css

  const breakpoints = theme.breakpoints

  if ("group" in newProps)
  {
    // Replace `group` by exploitabled html prop in css
    delete newProps["group"]
    newProps["data-so-group"] = ""
  }


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

      let current = css;
      variants.forEach(variant =>
      {
        if (pseudoClasses.includes(variant))
        {
          if (current[variant] === undefined)
            current[variant] = {};

          current = current[variant];
        }
        else
        {
          const key = `media-${variant}`;

          if (current[key] === undefined)
            current[key] = {};

          current = current[key];
        }
      });

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

        // parsed = CSSPropsMap[propName](newProps[prop])

        if (parsed[REMOVE_IF_VARIANT])
        {
          if (variants.length > 0)
            delete parsed[parsed[REMOVE_IF_VARIANT]]

          delete parsed[REMOVE_IF_VARIANT]
        }

        ThemeCache.get().put(CACHE_TYPE, key, parsed)
      }

      // Need to merge since some rare props are generating the
      // same objects with different css props
      Object.assign(current, deepmerge(current, parsed));
      // Object.assign(current, parsed);

      // css = { ...css, ...style };
      delete newProps[prop];

      // const p = prop.substring(1);
      // css = {...css, ...CSSPropsMap[p](newProps[prop]) };
      // delete newProps[prop];
    }

    /*
      Remove css, sm_css, md_css, ... from newProps

      process all props

      Merge responsive props with responsive props from processed props
      Remove responsive props from processed props

      Build Interpolation object with media queries for responsiveprops

      Final line: newProps.css = [emotionCss(generatedCSS, responsiveCSS)]


    */

    const mergedResponsiveCss: any = {...responsiveCss.css, ...css.css}
    delete css.css

    const bps:any = {...breakpoints}
    delete bps.default

    for (const bp in bps)
    {
      mergedResponsiveCss[getMediaQuery(bps[bp])] = { ...responsiveCss[`media-${bp}`]?.css, ...css[`media-${bp}`]?.css }
      // mergedResponsiveCss[getMediaQuery(bps[bp])] = { css: { ...responsiveCss[`media-${bp}`]?.css, ...css[`media-${bp}`]?.css}}
      delete css[`media-${bp}`]?.css
    }

    const generatedCSS = parseRules(css, breakpoints);

    // TODO Should soperio responsive props have precedence over css responsive props
    // Or the other way around ?
    newProps.css = [emotionCss(generatedCSS), emotionCss(mergedResponsiveCss)]

    // if (lodash.isEmpty(newProps.css))
      // delete newProps[css]

    return newProps;
  }

  return { ...newProps };
}

/**
 * CSS prop merging
 *
 * So the css prop is actually an object
 * So nothing to worry about about merging
 *
 * I just have to create a few utility to make using breakpoints easy
 *
 * {
 *  [[useMediaQuery("lg")]]: {
 *    color: "red"
 *  }
 * }
 *
 * And I can just merge what I generate from soperio props
 * since I'm building an object too before transforming it
 * into pure CSS string
 *
 * But emotion's using fucking camel-case instead of kebab-case...
 * The workaround would be to just use emotion's css function
 * Ex: css(myGeneratedCSS)
 *
 * I just hope that it doesn't retransform my string into an object
 * then transform the object back into a string...
 */
// const head = document.head;

// const sheet = styleEl.sheet as CSSStyleSheet;

// const cache = createCache({ key: "so", nonce: "soperio" });

// function insertRule(rule: string)
// {
//     //cache.insert()
//     try
//     {
//         // const style = <style dangerouslySetInnerHTML={{ __html: `${rule}`}} />
//         // head.appendChild(style.)
//         console.log("insert rule", rule);
//         sheet.insertRule(rule);

//         styleEl.innerHTML += "\n" + rule;

//     }
//     catch (error)
//     {
//         if (process.env.NODE_ENV !== "production")
//         {
//             console.log(error);
//             throw new Error(`Malformated CSS: "${rule}"`);
//         }
//     }
// }

// "Value" peut être de type string OU number
type Value = string | number;

// "Style" est un objet dont les valeurs sont de type Value
type Style = {
  [name: string]: Value,
};


function hash(str: string)
{
  // on retourne un string encodé en base 36
  return murmurhash.v2(str, 1).toString(36);
}
const cache: any = {};

// export function insertStyle(css: Record<string, string | any>)
// {
//     const className = hash(JSON.stringify(css));
//     const finalClassName = `so-${className}`;

//     // Dumb cache for now
//     if (cache[className] !== undefined)
//         return finalClassName;
//     else
//         cache[className] = true;

//     const content = parseRules(finalClassName, css);

//     insertCss(content);

//     return finalClassName;
// }
