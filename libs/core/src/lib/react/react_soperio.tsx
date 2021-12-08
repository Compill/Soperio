// Copy of original behavior without Emotion
// Keep it because we plan of getting rid of Emotion
// at some point, so this "old" version might come
// in handy

import murmurhash from "murmurhash";
import React from "react";
import { SVGSoperioProps } from "../CSS/SVG";
import { getStyleConfig } from "../CSS/utils";
import { CSSPropKeys, CSSPropsMap } from "../CSSProps";
import { SoperioComponent } from "../SoperioComponent";
import { insertCss } from "../utils/insertCss";

// on augmente les types des éléments DOM
declare module "react" {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T>, SoperioComponent
    {

    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface SVGAttributes<T> extends SVGSoperioProps
    {

    }
}

const head = document.head;

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
export type Style = {
    [name: string]: Value,
};

function hash(str: string)
{
    // on retourne un string encodé en base 36
    return murmurhash.v2(str, 1).toString(36);
}

const pseudoClasses: string[] = ["focus", "hover"];
const pseudoElements: string[] = ["placeholder", "before", "after"];

function parseRules(className: string, css: Record<string, string | any>, wrap = true): string
{
    let content = "";
    const pseudos: string[] = [];
    const mediaQueries: string[] = [];

    Object.keys(css).sort().forEach(key =>
    {
        if (pseudoClasses.includes(key))
        {
            pseudos.push(`.${className}:${key} {\n${parseRules(className, css[key], false)}}`);
        }
        else if (pseudoElements.includes(key))
        {
            pseudos.push(`.${className}::${key} {\n${parseRules(className, css[key], false)}}`);
        }
        else if (key.startsWith("media-"))
        {
            const breakpoint = key.split("-")[1];
            mediaQueries.push(`@media screen and (min-width: ${getStyleConfig("breakpoints", breakpoint)}) {\n\t${parseRules(className, css[key], false)}\n}`);
        }
        else
        {
            content += `\t${key}: ${css[key]};\n`;
        }
    });

    if (wrap)
        content = `.${className} {\n${content}}`;

    if (pseudos)
        content += `${wrap ? "\n\n" : ""}${pseudos.join("\n\n")}`;

    if (mediaQueries)
        content += `${wrap ? "\n\n" : ""}${mediaQueries.join("\n\n")}`;

    return content;
}

const cache: any = {};

export function insertStyle(css: Record<string, string | any>)
{
    const className = hash(JSON.stringify(css));
    const finalClassName = `so-${className}`;

    // Dumb cache for now
    if (cache[className] !== undefined)
        return finalClassName;
    else
        cache[className] = true;

    const content = parseRules(finalClassName, css);

    insertCss(content);

    return finalClassName;
}

// on override la fonction createElement de React
export function jsx<P extends SoperioComponent>(
    Component: React.ComponentType<P> | string,
    props: P,
    ...children: React.ReactElement<any>[]
)
{
    let newProps: any = props;

    if (typeof Component === "string")
    {
        newProps = { ...props };

        const keys = Object.keys(props);

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

                Object.assign(current, CSSPropsMap[propName](newProps[prop]));

                // css = { ...css, ...style };
                // console.log("for end", prop, css, style)
                delete newProps[prop];

                // const p = prop.substring(1);
                // css = {...css, ...CSSPropsMap[p](newProps[prop]) };
                // delete newProps[prop];
            }

            const className = insertStyle(css);
            newProps.className = (props.className ? newProps.className + " " : "") + className;
        }
    }

    // Basically, the idea is to use Emotion's jsx instead of React
    // and just add the css prop to the props with the CSS we have generated
    return React.createElement(Component, newProps, ...children);
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
