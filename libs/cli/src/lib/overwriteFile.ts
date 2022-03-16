import { fork, Serializable } from 'child_process';
import fs, { writeFile, mkdir } from "fs";
import ora from 'ora';
import path from 'path';
import { promisify } from 'util';

type ErrorRecord = Record<'err', string>;

const writeFileAsync = promisify(writeFile);
const exists = promisify(fs.exists);

export async function overwriteFrameworkFile(msg: string, themeFile: string, out: string, destinationFile: string[], workerFile: string[])
{
  const spinner = ora(msg).start();

  try
  {
    const outPath = await resolveOutputPath(out, destinationFile);
    const templateComponent = await runTemplateWorker(themeFile, workerFile);

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

async function runTemplateWorker(themeFile: string, workerFile: string[]): Promise<string>
{
  const worker = fork(
    path.join(__dirname, '.', ...workerFile),
    [themeFile],
    {
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
      cwd: process.cwd(),
    }
  );

  return new Promise((resolve, reject) =>
  {
    worker.on('message', (message: ErrorRecord | Serializable) =>
    {
      const errMessage = (message as ErrorRecord)?.err;

      if (errMessage)
      {
        console.log("error", errMessage);
        reject(new Error(errMessage));
      }

      return resolve(String(message));
    });

    worker.on('error', (error) =>
    {
      console.log("error", error);
      reject(error);
    });

    worker.stdout?.on('data', (data) =>
    {
      console.log(`child stdout:\n${data}`);
    });

    worker.stderr?.on('data', (data) =>
    {
      console.error(`child stderr:\n${data}`);
    });
  });
}