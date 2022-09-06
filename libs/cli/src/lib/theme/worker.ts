import path from "path";
import fs from "fs";
import * as tsNode from "ts-node";
import * as tsConfigPaths from "tsconfig-paths";
import moduleAlias from "module-alias";
import { themeKeyConfiguration } from "../config";
import { createThemeTypingsInterface } from "./create-theme-typings-interface";
import { fileURLToPath } from 'node:url';
import { pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export type Dict<T = any> = Record<string, T>;

const bold = (text: string) => `\x1b[1m${text}\x1b[22m`;

function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

function isObject(value: any): value is Dict {
  const type = typeof value;
  return (
    value != null &&
    (type === "object" || type === "function") &&
    !isArray(value)
  );
}

async function importTheme(path: string) {
  const module = await importAbs(path);
  const theme = module.default ?? module.theme;

  if (!theme)
    throw new Error(`
    Theme export not found in module: '${path}'.

    A theme should have a ${bold("default")} export or a ${bold(
      "theme",
    )} named export.
    Found the following exports: ${bold(Object.keys(module).join(", "))}
  `);

  return theme;
}

async function readTheme(themeFilePath: string) {
  const cwd = process.cwd();
  const absoluteThemePath = path.join(cwd, themeFilePath);
  const absoluteThemeDir = path.dirname(absoluteThemePath);

  console.log("absolutePath", absoluteThemePath);

  const tsConfig = tsConfigPaths.loadConfig(absoluteThemeDir);
  if (tsConfig.resultType === "success") {
    tsNode.register({
      // use the TS projects own tsconfig file
      project: tsConfig.configFileAbsolutePath,
      compilerOptions: {
        module: "CommonJS",
      },
    });

    /**
     * Replace the module aliases in the transpiled code,
     * because ts-node does not resolve them to relative require paths.
     *
     * 🚨 Note that only the first alias target will work
     * @example tsconfig.json
     * {
     *   "baseUrl": "src",
     *   "paths": {
     *     "@alias/*": ["target/*"]
     *   }
     * }
     */

    const aliases = Object.keys(tsConfig.paths).reduce((acc, tsAlias) => {
      // target/* -> target/
      const firstTarget = tsConfig.paths[tsAlias][0].replace(/\*$/, "");
      // @alias/* -> @alias
      const jsAlias = tsAlias.replace(/\/\*$/, "");
      // @alias = baseUrl/target/
      acc[jsAlias] = path.join(tsConfig.absoluteBaseUrl, firstTarget);
      return acc;
    }, {});
    moduleAlias.addAliases(aliases);
  } else {
    // it is a JS project
    const defaultProject = path.join(
      __dirname,
      "..",
      "..",
      "bin",
      "tsconfig.json",
    );
    tsNode.register({
      project: defaultProject,
    });
  }

  try {
    await fs.promises.stat(absoluteThemePath);

    return importTheme(absoluteThemePath);
  } catch (statError) {
    try {
      return importTheme(require.resolve(themeFilePath, { paths: [cwd] }));
    } catch (resolveError) {
      throw new Error(
        `Theme file or package not found \n${statError} \n${resolveError}`,
      );
    }
  }
}

async function importAbs(targetPath)
{
  const fileUrl = pathToFileURL(targetPath).href;
  return await import(fileUrl);
}

/**
 * Reads the theme file, generates the typings interface and prints it to stdout
 */
export async function createThemeTypings(themeFile ) 
{
  if (!themeFile)
    throw new Error("No path to theme file provided.");
  
  const theme = await readTheme(themeFile);

  if (!isObject(theme))
    throw new Error("Theme not found in default or named `theme` export");
 
  const template = await createThemeTypingsInterface(theme, {
    config: themeKeyConfiguration,
    strictComponentTypes: false,
  });

  return template
}
