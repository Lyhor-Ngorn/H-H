const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.urlencoded());
app.use(express.json());

const PORTS = 3000;
const IP = "192.168.88.28";
const URL = "http://" + IP + ":" + PORTS;

let USER = [
  { name: "lyhor", password: 123456789 },
  { name: "menghour", password: 987654321 },
];

app.listen(process.env.PORT || PORTS, function () {
  console.log("HELLO ON PORT " + PORTS);
});
app.use(express.static("PUBLIC"));

app.post("/postData", (req, res) => {
  let data = fs.readFileSync("PUBLIC/data.json").toString();
  console.log(data);
  res.send(req.body);
});
