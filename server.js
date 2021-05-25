const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.urlencoded());
app.use(express.json());

const PORTS = 3000;
const IP = "192.168.88.18";
const URL = "http://" + IP + ":" + PORTS;
// let url = "https://hour-hour.herokuapp.com/"
let USER = [
  { name: "lyhor", password: 123456789,"color":"red" },
  { name: "menghour", password: 987654321, "color":"blue"}
];

app.listen(process.env.PORT || PORTS, function () {
  console.log("HELLO ON PORT " + PORTS);
});
app.use(express.static("PUBLIC"));

app.post("/postData", (req, res) => {
  let data = fs.readFileSync("PUBLIC/chart/data.json").toString();
  data = JSON.parse(data);
  data.push(req.body);
  fs.writeFileSync("PUBLIC/chart/data.json",JSON.stringify(data));
  res.send(data);
});
app.get("/reload",(req,res) => {
  let data = fs.readFileSync("PUBLIC/chart/data.json").toString();
  data = JSON.parse(data);
  res.send(data)
})
app.post("/login",(req,res)=>{
  let forSend = false;
  for(i of USER){
    if(i.name == req.body.name && i.password == req.body.password){
      forSend = true;
    }
  }
  res.send(forSend);
})