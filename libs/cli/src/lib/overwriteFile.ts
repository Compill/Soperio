import fs, { mkdir, writeFile } from "fs";
import ora from 'ora';
import path from 'path';
import { promisify } from 'util';
import { createThemeTypings } from "./theme/worker";

const writeFileAsync = promisify(writeFile);
const exists = promisify(fs.exists);

export async function overwriteFrameworkFile(msg: string, themeFile: string, out: string, destinationFile: string[], workerFile: string[])
{
  const spinner = ora(msg).start();

  try
  {
    const outPath = await resolveOutputPath(out, destinationFile);
    const templateComponent = await createThemeTypings(themeFile)

    spinner.info();
    spinner.text = `Write file "${outPath}"...`;

    await writeFileAsync(outPath, templateComponent, 'utf8');
    spinner.succeed('Done');
  } 
  catch (e)
  {
    spinner.fail('An error occurred');

    if (e instanceof Error)
      console.log(e);
  } 
  finally
  {
    spinner.stop();
  }
}

/**
 * Finds the target file to override
 * In our case it is located in the @soperio-ui/theming package
 */
async function resolveThemingDefinitionPath(themeInterfaceDestination: string[]): Promise<string | undefined>
{
  const baseDir = path.join("..", "..", "..");
  const cwd = process.cwd();

  const pathsToTry = [
    path.resolve(baseDir, "..", ...themeInterfaceDestination),
    path.resolve(baseDir, "..", "..", ...themeInterfaceDestination),
    path.resolve(cwd, ...themeInterfaceDestination),
    path.resolve(cwd, "..", ...themeInterfaceDestination),
    path.resolve(cwd, "..", "..", ...themeInterfaceDestination),
  ];

  const triedPaths = await Promise.all(
    pathsToTry.map(async (possiblePath) =>
    {
      if (await exists(possiblePath))
        return possiblePath;
      
      return "";
    }),
  );
  return triedPaths.find(Boolean);
}

/**
 * Find the location of the default target file or resolve the given path
 */
export async function resolveOutputPath(overridePath: string, themeInterfaceDestination: string[]): Promise<string>
{
  if (overridePath)
  {
    mkdir(path.resolve(process.cwd(), overridePath), { recursive: true }, (err, path) => { /* do nothing */ })
    return path.resolve(process.cwd(), overridePath, themeInterfaceDestination[themeInterfaceDestination.length - 1]);
  }

  const themingDefinitionFilePath = await resolveThemingDefinitionPath(themeInterfaceDestination);

  if (!themingDefinitionFilePath)
  {
    throw new Error(
      `Could not find ${themeInterfaceDestination[1]}/${themeInterfaceDestination[2]} in node_modules. Make sure you have those dependencies installed.`,
    );
  }

  return themingDefinitionFilePath;
}