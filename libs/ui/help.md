In project.json, the line 

  "implicitDependencies": ["jsx-runtime"]

is very important. Since Nx is incapable of guessing that UI depends on JSX-RUNTIME, 
we had this dependency manually. This will prevent a bunch of error messages.
