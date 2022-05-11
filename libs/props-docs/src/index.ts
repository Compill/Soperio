import "regenerator-runtime/runtime"
import glob from "glob"
import path from "path"
import { promisify } from "util"
import { writeFileSync } from "fs"
import * as docgen from "react-docgen-typescript"
import { ComponentDoc } from "react-docgen-typescript"
import mkdirp from "mkdirp"
import fs from "fs"
import { CSSPropKeys } from "../../theming/src/lib/CSSProps"

type ComponentInfo = {
  def: ComponentDoc
  displayName: string
  fileName: string
  exportName: string
  importPath: string
}

const globAsync = promisify(glob)

const excludedPropNames = CSSPropKeys.concat([
  "as",
  "apply",
  "sx",
  "__css",
  "css",
  "className",
  "style"
])
const rootDir = path.join(__dirname, "..", "..", "..")


const sourcePath = path.join(rootDir, "libs", "ui")

const outPath = path.join(rootDir, "dist", "libs", "props-docs")


const outputPath = path.join(outPath, "components")


const cjsIndexFilePath = path.join(outPath, "soperio-ui-props-docs.cjs.js")
const esmIndexFilePath = path.join(outPath, "soperio-ui-props-docs.esm.js")
const typeFilePath = path.join(outPath, "soperio-ui-props-docs.cjs.d.ts")

const tsConfigPath = path.join(sourcePath, "tsconfig.json")


export async function main()
{
  const componentFiles = await findComponentFiles()
  if (componentFiles.length)
  {
    await mkdirp.sync(outputPath)
  }

  log("Parsing files for component types...")
  const parsedInfo = parseInfo(componentFiles)

  log("Extracting component info...")
  const componentInfo = extractComponentInfo(parsedInfo)

  log("Writing component info files...")
  writeComponentInfoFiles(componentInfo)

  log("Writing index files...")
  writeIndexCJS(componentInfo)
  writeIndexESM(componentInfo)
  writeTypes(componentInfo)

  log("Writing package.json...")
  writePackageJSON()

  log(`Processed ${componentInfo.length} components`)
}

if (require.main === module)
{
  // run main function if called via cli
  main().catch(console.error)
}

/**
 * Find all TypeScript files which could contain component definitions
 */
async function findComponentFiles()
{
  const tsFiles = await globAsync("src/**/*.@(tsx)", {
    cwd: sourcePath,
  })

  return tsFiles.filter((f) => !f.includes("stories"))
}

const responsivePrefixes = ["sm_", "md_", "lg_", "xl_", "x2_"]

/**
 * Parse files with react-doc-gen-typescript
 */
function parseInfo(filePaths: string[])
{
  const { parse } = docgen.withCustomConfig(tsConfigPath, {

    propFilter: (prop, component) =>
    {
      const isHook = component.name.startsWith("use")

      if (isHook)
      {
        const isTypeScriptNative =
          prop.parent?.fileName.includes("node_modules/typescript") ?? false

        return !isTypeScriptNative
      }

      const isStyledSystemProp = excludedPropNames.includes(prop.name)

      if (isStyledSystemProp)
        return false

      const isHTMLElementProp =
        prop.parent?.fileName.includes("node_modules") ?? false

      if (isHTMLElementProp)
        return false

      // Component use ResponsiveProps<> type to make a prop responsive dynamically
      const isResponsiveProp = responsivePrefixes.includes(prop.name.substring(0, 3))

      if (isResponsiveProp)
        return false

      return true
    },
  })

  return filePaths.flatMap((file) =>
  {
    const absoluteFilePath = path.join(sourcePath, file)

    return parse(absoluteFilePath)
  })
}

/**
 * Extract meta data of component docs
 */
function extractComponentInfo(docs: ComponentDoc[])
{
  return docs.reduce((acc, def) =>
  {
    if (!Object.keys(def.props || {}).length)
    {
      return acc
    }

    function createUniqueName(displayName: string)
    {
      const existing = acc.filter(
        (prev) =>
          String(prev.def.displayName).toLowerCase() ===
          displayName.toLowerCase(),
      )

      if (!existing.length)
      {
        return displayName
      }

      return `${displayName}${existing.length}`
    }

    const exportName = createUniqueName(def.displayName)
    const fileName = `${exportName}.json`

    acc.push({
      def,
      displayName: def.displayName,
      fileName,
      exportName,
      importPath: `./components/${fileName}`,
    })
    return acc
  }, [] as ComponentInfo[])
}

/**
 * Write component info as JSON to disk
 */
function writeComponentInfoFiles(componentInfo: ComponentInfo[])
{
  for (const info of componentInfo)
  {
    const filePath = path.join(outputPath, info.fileName)
    const content = JSON.stringify(info.def)
    writeFileSync(filePath, content)
  }
}

/**
 * Create and write the index file in CJS format
 */
function writeIndexCJS(componentInfo: ComponentInfo[])
{
  const cjsExports = componentInfo.map(
    ({ displayName, importPath }) =>
      `module.exports['${displayName}'] = require('${importPath}')`,
  )
  writeFileSync(cjsIndexFilePath, cjsExports.join("\n"))
}

/**
 * Create and write the index file in ESM format
 */
function writeIndexESM(componentInfo: ComponentInfo[])
{
  const esmPropImports = componentInfo
    .map(
      ({ exportName, importPath }) =>
        `import ${exportName}Import from '${importPath}'`,
    )
    .join("\n")

  const esmPropExports = componentInfo
    .map(({ exportName }) => `export const ${exportName} = ${exportName}Import`)
    .join("\n")

  writeFileSync(
    esmIndexFilePath,
    `${esmPropImports}
${esmPropExports}`,
  )
}

function writeTypes(componentInfo: ComponentInfo[])
{
  const typeExports = componentInfo
    .map(({ exportName }) => `export declare const ${exportName}: PropDoc`)
    .join("\n")

  const baseType = `
    export interface Parent {
        fileName: string;
        name: string;
    }

    export interface Declaration {
        fileName: string;
        name: string;
    }

    export interface DefaultProps {
        defaultValue?: any;
        description: string | JSX.Element;
        name: string;
        parent: Parent;
        declarations: Declaration[];
        required: boolean;
        type: { name: string };
    }

    export interface PropDoc {
        tags: { see: string };
        filePath: string;
        description: string | JSX.Element;
        displayName: string;
        methods: any[];
        props: {
          defaultProps?: DefaultProps;
          components?: DefaultProps;
        };
    }
  `

  writeFileSync(typeFilePath, `${baseType}\n${typeExports}`)
}

function writePackageJSON()
{
  fs.copyFile(path.join(".", "package.json"), path.join(outPath, "package.json"), (error) => console.log("error copying package.json", error))
}

function log(...args: unknown[])
{
  console.info(`[props-docs]`, ...args)
}
