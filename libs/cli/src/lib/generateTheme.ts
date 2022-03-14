import { promisify } from 'util';
import { writeFile } from 'fs';
import { fork, Serializable } from 'child_process';
import path from 'path';
import ora from 'ora';
import { resolveOutputPath } from './resolve-output-path';


type ErrorRecord = Record<'err', string>;

const writeFileAsync = promisify(writeFile);

async function runTemplateWorker(themeFile: string): Promise<string> {
  const worker = fork(
    path.join(__dirname, '.', 'scripts', 'read-theme-file.worker.js'),
    [themeFile],
    {
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
      cwd: process.cwd(),
    }
  );
  
  return new Promise((resolve, reject) => {
    worker.on('message', (message: ErrorRecord | Serializable) => {
      const errMessage = (message as ErrorRecord)?.err;

      if (errMessage) {
        console.log("error", errMessage)
        reject(new Error(errMessage));
      }
      return resolve(String(message));
    });
    worker.on('error', (error) => {
      console.log("error", error)
      reject(error)
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

export async function generateThemeTypings(themeFile: string, out: string) {
  const spinner = ora('Generating chakra theme typings').start();
  try {
    const outPath = await resolveOutputPath(out);
    const template = await runTemplateWorker(themeFile);
    

    spinner.info();
    spinner.text = `Write file "${outPath}"...`;

    await writeFileAsync(outPath, template, 'utf8');
    spinner.succeed('Done');
  } catch (e) {
    spinner.fail('An error occurred');
    if (e instanceof Error) {
      console.log(e);
    }
  } finally {
    spinner.stop();
  }
}