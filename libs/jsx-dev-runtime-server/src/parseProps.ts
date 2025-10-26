import { CSSPropKeys } from "@soperio/theming";

export function parseProps(props: any)
{
  const newProps = { ...props }

  if ("group" in newProps)
  {
    // Replace `group` by exploitabled html prop in css
    delete newProps["group"]
    newProps["data-so-group"] = ""
  }

  const keys = Object.keys(newProps)

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

      delete newProps[prop]
    }

    newProps.css = {}
  }
}
