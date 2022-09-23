const { execSync } = require('child_process');
const { exit } = require("process");

const lib = "cli"

function deploy()
{
  const dest = `../../dist/libs/${lib}`

  console.log(`[DEPLOY] Starting deploy process for ${lib}`)

  console.log("Cleaning previous archive");
  execSync(`rm -r ${dest} || true`);
  
  console.log("Building...")
  execSync(`npm run build`);
  
  console.log("Build complete.");
  console.log("Assembling package.");
  execSync(`cd ../../dist/libs && mkdir ${lib}`);
  execSync(`mv dist ${dest}/dist`);
  execSync(`cp -r bin ${dest}`);
  execSync(`cp LICENSE ${dest}`);
  execSync(`cp README.md ${dest}`);
  
  console.log("Updating package.json");

  const v = execSync(`npm version patch`);
  const version = v.toString().trim().substring(1);

  console.log(`Updated package.json to version ${version}`);

  execSync(`cp package.json ${dest}`);

  console.log("Assembling complete.");

  console.log("Deploying...");
  execSync(`cd ../.. && nx run ${lib}:deploy --no-build`);
  console.log("Deployed!");

  console.log("Committing...");
  execSync(`git commit -a -m "[${lib.toUpperCase()}] Version ${version}"`)

  console.log("Creating git tag...");
  execSync(`git tag -a ${lib}-${version} -m "${lib.toUpperCase()} Version ${version}"`)

  console.log("Pushing...");
  execSync(`git push --tags`)

  console.log(`[END] Finished deploying ${lib} ${version}`)
}

deploy();
console.log("[DEPLOY] Finished deploy process");
