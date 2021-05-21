const { response } = require("express");

var fields = document.querySelectorAll(".textb input");
var btn = document.querySelector(".btn");
function check(){
    if(fields[0].value != "" && fields[1].value != "")
        btn.disabled = false;
    else
        btn.disabled = true;  
    }

fields[0].addEventListener("keyup",check);
fields[1].addEventListener("keyup",check);

document.querySelector(".show-password").addEventListener("click",function(){
    if(this.classList[2] == "fa-eye-slash"){
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
        fields[1].type = "text";
    }else{
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
        fields[1].type = "password";
      }
});

function goTo(res){
        if(res){
            window.location.pathname = "../index.html";
        }
    
}

function sendToServer(e){
    e.preventDefault();
    axios.post(URL,login).then(goTo);
}

const text = document.querySelector("#text");
const password = document.querySelector("#password");
let login = {"name":text.value,"password":password.value}
const PORT = 3000;
const IP = "192.168.137.1";
const URL = "http://"+ IP +":"+PORT;

let submit = document.querySelector("#submit");
submit.addEventListener("click",sendToServer)
