let express = require("express");
let bodyParser = require("body-parser");
let morgan = require("morgan");
let app = express();
const cors = require("cors");
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "True" }));

app.use(morgan("dev"));

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    // "*"
  );
  next();
});
app.post("/api/usrData", function(request, response) {
  console.log(request.body.name);
  const spawn = require("child_process").spawn;
  const pythonProcess = spawn("python", ["test.py", "arg1"]);
  pythonProcess.stdout.on("data", data => {
    console.log(JSON.parse(data.toString()));
  });
});

app.get("/api/data", function(req, res) {
  console.log(req);

  data = {
    name: "Pong",
    location: { latitude: "13.723418599999999", longitude: "100.4762319" },
    tag: "jp,cheap,promotion",
    friendEaten: "1"
  };
  res.json(data);
  if (err) {
    console.log("There is an error after add rows");
    return console.log(err);
  }
});

app.listen(PORT, () => console.log("listening on PORT", PORT));
