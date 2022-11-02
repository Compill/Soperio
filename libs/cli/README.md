Soperio



OK, I will resolve myslef to make a build script specifically for the CLI

The process is simple

run "npm run build"
move dist folder to ../../dist/libs/cli
move the bin folder to ../../dist/libs/cli
move the package.json file and increase version number
move the license and readme files
run nx run cli:deploy --no-build (no-build option to not rebuild the lib via nx run cli:build)