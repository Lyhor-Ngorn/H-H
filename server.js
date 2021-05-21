var USER = [
    {"name":"lyhor","password":123456789},
    {"name":"menghour","password":987654321}
]


const PORT = 3000;
const IP = "192.168.137.1";
const URL = "http://"+ IP +":"+PORT;
const express = require("express");
const app = express();
const fs = require("fs")



app.listen(PORT,function(){
    console.log("HELLO ON PORT " + PORT)
})
app.use(express.static('PUBLIC'));

app.post("/postData",(req,res)=>{
    // fs.writeFileSync("PUBLIC/data.json",req.body)
    console.log(req.body);
})