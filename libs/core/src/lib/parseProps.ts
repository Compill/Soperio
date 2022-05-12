import { css as emotionCss } from "@emotion/react";
import { getThemeStyle, SoperioComponent, ThemeCache } from "@soperio/theming";
import deepmerge from "deepmerge";
import murmurhash from "murmurhash";
import { CSSPropKeys, CSSPropsMap } from "./CSSProps";

const pseudoClasses: string[] = ["focus", "hover", "placeholder", "before", "after"];
const CACHE_TYPE = "prop"
const REMOVE_IF_VARIANT = "remove_if_variant"

const breakpointIndex = {
  sm: "0",
  md: "1",
  lg: "2",
  xl: "3",
  x2: "4",
}

function parseRules(css: Record<string, string | any>, wrap = true): string
{
  let content = "";

  if (css)
  {
    const pseudos: string[] = [];
    const mediaQueries: Record<string, string> = {};

    Object.keys(css).sort().forEach(key =>
    {
      if (pseudoClasses.includes(key))
      {
        pseudos.push(`&:${key} {\n${parseRules(css[key], false)}}`);
      }
      else if (key.startsWith("media-"))
      {
        const breakpoint = key.split("-")[1];
        mediaQueries[breakpointIndex[breakpoint as keyof typeof breakpointIndex]] = `@media screen and (min-width: ${getThemeStyle("breakpoints", breakpoint)}) {\n\t${parseRules(css[key], false)}\n}`
        // mediaQueries.push(`@media screen and (min-width: ${getThemeStyle("breakpoints", breakpoint)}) {\n\t${parseRules(css[key], false)}\n}`);
      }
      else
      {
        const cssRule = css[key];

        if (typeof cssRule === "string" || typeof cssRule === "number")
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

function mergeTraitPropIfExist<P extends SoperioComponent>(props: P)
{
  // TODO Cache
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
        traitProps = getThemeStyle("traits", traitPropValue)

        if (!traitProps)
          console.warn(`[Soperio]: you tried to use trait ${traitPropValue} but it doesn't exist in the theme`)
        else
          ThemeCache.get().put(CACHE_TYPE, key, traitProps)
      }
      else if (traitPropValue)
      {
        for (const trait of traitPropValue as string[])
        {
          const themeProps = getThemeStyle("traits", trait)
          let hasTrait = false

          if (themeProps)
          {
            hasTrait = true
            traitProps = { ...traitProps, themeProps }
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

export function parseProps<P extends SoperioComponent>(props: P)
{
  // "trait" is a special prop, we need to parse it before the rest
  const newProps: any = mergeTraitPropIfExist(props);

  const keys = Object.keys(newProps);

  if (keys.length > 0)
  {
    const css: any = {};

    for (const prop of keys)
    {
      // TODO const
      if (prop === "__SOPERIO_TYPE_PLEASE_DO_NOT_USE__")
      {
        delete newProps[prop];
        continue;
      }

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
      const key = `${propName}${propValue}`
      let parsed = ThemeCache.get().get(CACHE_TYPE, key)

      if (!parsed)
      {
        parsed = CSSPropsMap[propName](newProps[prop])

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

    // Our props might generate the emotion css prop
    // So remove it before parsing
    const soperioCss = css.css;
    delete css.css;

    const generatedCSS = parseRules(css);

    newProps.css = [emotionCss(generatedCSS), soperioCss, props.css];
    return newProps;
  }

  return { ...props };
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
