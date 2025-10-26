import { CSSPropKeys } from "./CSSPropKeys";

const CACHE_TYPE = "prop"
const REMOVE_IF_VARIANT = "remove_if_variant"

export function parseProps<P extends {}>(props: P)
{
  // "trait" is a special prop, we need to parse it before the rest
  const newProps: any = { ...props };
  delete newProps["__SOPERIO_TYPE_PLEASE_DO_NOT_USE__"]

  delete newProps["trait"]

  if ("group" in newProps)
  {
    // Replace `group` by exploitabled html prop in css
    delete newProps["group"]
    newProps["data-so-group"] = ""
  }

  // Sort keys in the right order so that some props are not messed up
  const keys = Object.keys(newProps);

  if (keys.length > 0)
  {
    for (const prop of keys)
    {
      if (prop.startsWith("__"))
        continue;

      const variants = prop.split("_");
      const propName: string = variants.pop()!;

      if (!CSSPropKeys.includes(propName))
        continue;

      delete newProps[prop];
    }

    //newProps.css = {} //emotionCss(css, ...mqArray)

    return newProps;
  }

  return { ...newProps };
}
