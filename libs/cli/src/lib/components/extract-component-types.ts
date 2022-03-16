
import { isObject } from "lodash"
import { extractPropertyPaths, printUnions } from "../theme/extract-property-paths"



export function extractComponentTypes(theme: Record<string, unknown>) {
  const components = theme.components

  if (!isObject(components)) {
    return {}
  }

  return Object.entries(components).reduce(
    (allDefs, [componentName, definition]) => {
      if (definition) 
      {
        // Config can be a function with params ColorTheme, darkMode
        const target = typeof definition === "function" ? definition({}, false) : definition
        allDefs[componentName] = extractPropertyPaths(target.traits, 2)      
      }

      return allDefs
    },
    { } as Record <string, any>,
  )
}

function escapeComponentName(componentName: string) {

  return componentName.match(/^[a-zA-Z0-9\-_]+$/)
    ? componentName
    : `"${componentName}"`
}

export function printComponentTypes(
  componentTypes: Record<string, any>,

) {
  const types = Object.entries(componentTypes)
    .map(
      ([componentName, unions]) =>
        `${escapeComponentName(componentName)}: {
  ${printUnions(unions)}}
`,
    )
    .join(`\n`)

  return `
  ${types}  
`
}
