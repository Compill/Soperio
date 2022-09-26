const { execSync } = require('child_process');
const { exit } = require("process");

if (process.argv.length < 3)
{
  console.log("You forgot to passs the name of the lib as argument")
  exit(0)
}

for (let i = 0; i < process.argv.length; i++)
{
  if (process.argv[i + 2])
    deploy(process.argv[i+2])
}

console.log("[DEPLOY] Finished deploy process")

function deploy(lib)
{
  console.log(`[DEPLOY] Starting deploy process for ${lib}`)
  console.log("Updating package.json");
  const v = execSync(`cd libs/${lib} && npm version patch`);
  const version = v.toString().trim().substring(1)
  console.log(`Updated package.json to version ${version}`);

  console.log("Deploying...");
  execSync(`nx run ${lib}:deploy`);
  console.log("Deployed!");

  console.log("Committing...");
  execSync(`git commit -a -m "[${lib.toUpperCase()}] Version ${version}"`)

  console.log("Creating git tag...");
  execSync(`git tag -a ${lib}-${version} -m "${lib.toUpperCase()} Version ${version}"`)

  console.log("Pushing...");
  execSync(`git push --tags`)

  console.log(`[END] Finished deploying ${lib} ${version}`)
}
