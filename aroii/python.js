const spawn = require("child_process").spawn;
const pythonProcess = spawn("python", ["test.py", "arg1"]);
pythonProcess.stdout.on("data", data => {
  console.log(JSON.parse(data.toString()));
});
