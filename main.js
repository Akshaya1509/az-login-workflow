var utility = require('./utility')

console.log("Running ps script")
utility.execSync("powershell", "./test.ps1 -cred foo")
console.log("PS Script complete")
