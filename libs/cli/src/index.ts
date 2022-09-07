import { program } from 'commander';
import { overwriteFrameworkFile } from "./lib/overwriteFile";
import checkNode from "cli-check-node";
import welcome from "cli-welcome";
import unhandledError from "cli-handle-unhandled";
// NX can't use file outside of src/
// TODO Will need to find a workaround
// import pkgJSON from "../package.json";

async function initCLI()
{
  checkNode(`12`);

  await unhandledError();

  welcome({
    title: "Soperio UI CLI",
    tagLine: `by Compill\nA CLI to create custom themes and components`,
    // tagLine: `by Compill\n${pkgJSON.description}`,
    bgColor: `#319795`,
    color: `#FFFFFF`,
    bold: true,
    clear: false,
    version: "1.0.0",
  });

  // updateNotifier({
  //   pkg: pkgJSON,
  //   shouldNotifyInNpmScript: true,
  //   updateCheckInterval: 1000 * 60 * 60 * 24 * 3, // 3 days
  // }).notify({ isGlobal: true });
}

export async function run()
{
  await initCLI();

  program
    .command('build-theme <source>')
    //.argument("[source]", "your theme file path (e.g. theme.js or theme.config.js)", "theme.config.js")
    .option('--out <path>', 'custom output file')
    .action(async (themeFile, options) =>
    {
      const { out } = options;

      const themeInterface = ["node_modules", "@soperio", "theming", "lib", "ThemeTypings.d.ts"];
      await overwriteFrameworkFile("Generating Soperio theme typings", themeFile, out, themeInterface, ["theme", "worker"]);
    });

    // TODO Commands to generate either theme or components typings
    // Just in order to save a bit of time because it takes a few seconds
    // to generate both
    // => build
    // => build-theme
    // => build-components

  // program.command("build-components <source>")
  //     .option("--out <path>", "custom output file")
  //     .action(async (themeFile, options) =>
  //     {
  //         const { out } = options;
  //         await generateComponentsInterface({ themeFile, out });
  //     });

  program.on('--help', () =>
  {
    console.info(`Example call:
  $ soperio-cli build-theme ./theme.ts
`);
  });

  program.parse();
}
