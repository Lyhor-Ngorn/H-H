const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.urlencoded());
app.use(express.json());
const PORTS = 3000;
// const IP = "192.168.88.18";
// const URL = "http://" + IP + ":" + PORTS;

let USER = [
  { name: "lyhor", password:123},
  { name: "menghour", password: 321},
  { name: "sokhom", password: 456}
];
app.listen(process.env.PORT || PORTS, function () {
  console.log("HELLO ON PORT " + PORTS);
});
app.use(express.static("PUBLIC"));
app.post("/postData", (req, res) => {
  let data = fs.readFileSync("PUBLIC/chart/data.json").toString();
  let emojiMap = {
    ";(" : "đ","><":"đ",":p":"đ","<3":"â¤ī¸",":o":"đą",":D":"đ",":":"đļ",":|":"đ","$$":"đ¤",":x":"đ",":(":"âšī¸",":E":"đ",":#":"đ¤",":@":"đĩ",
    "8)":"đ¤","^~^":"đ",";<":"đ¤§","():)":"đ",":}":"đ¤Ą",":.)":"đ­","b-)":"đ",">_<":"đĄ","8>":"đŊ"
    };
  data = JSON.parse(data);
  let array = {"name" : req.body.name}
  let appendText = "";
  let text = req.body.text;
  text = text.split(" ");
  let forAdd = "";
  for(let l of text){
    if(emojiMap[l] !== undefined){
      appendText += emojiMap[l];
    }else{
      appendText += l
    }
    forAdd += appendText + " ";
    appendText = ""
  }
  array["text"] = forAdd;
  data.push(array);
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


