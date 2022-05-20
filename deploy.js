const { execSync } = require('child_process');
const { exit } = require("process");

if (process.argv.length < 3)
{
  console.log("You forgot to passs the name of the lib as argument")
  exit(0)
}

for (let i = 0; i < process.argv.length; i++)
{
  deploy(process.argv[i])
}

console.log("[DEPLOY] Finished deploy process")

function deploy(lib)
{
  console.log(`[DEPLOY] Starting deploy process for ${lib}`)
  console.log("Updating package.json");
  const version = execSync(`cd libs/${lib} && npm version patch`);
  console.log(`Updated package.json to version ${version}`);

  console.log("Deploying...");
  execSync(`nx deploy ${lib}`);
  console.log("Deployed! Now, commit and push");

  execSync(`git-commit -m [${lib.toUpperCase()}] Version ${version} && git push && git tag -a ${lib}-{version} -m \"${lib.toUpperCase()} Version ${version}`)
  console.log(`[END] Finished deploying ${lib}`)
}
