#!/usr/bin/env node
import { program } from 'commander';
import 'regenerator-runtime/runtime';
import { generateThemeTypings,} from './lib/generateTheme';
import clear from "clear";


// function generateComponentsInterface(props)
// {
//     console.log("generate components");
// }
async function run() {
  clear();

  program
    .command('build-theme <source>')
    //.argument("[source]", "your theme file path (e.g. theme.js or theme.config.js)", "theme.config.js")
    .option('--out <path>', 'custom output file')
    .action(async (themeFile, options) => {
      const { out } = options;
      await generateThemeTypings(themeFile, out);
    });

  // program.command("build-components <source>")
  //     .option("--out <path>", "custom output file")
  //     .action(async (themeFile, options) =>
  //     {
  //         const { out } = options;
  //         await generateComponentsInterface({ themeFile, out });
  //     });

  program.on('--help', () => {
    console.info(`Example call:
  $ soperio-cli build-theme theme.ts
`);
  });

  program.parse();
}
run().catch((e) => {
  console.error(e);
  process.exit(1);
});
