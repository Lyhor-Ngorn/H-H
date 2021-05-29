// const respon = require("express");
const text = document.querySelector("#text");
const password = document.querySelector("#password");
const PORT = 3000;
const IP = "192.168.88.17";



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



function sendToServer(e){
    e.preventDefault();
    // localStorage.setItem("name",text.value);
    let login = {"name":text.value,"password":password.value}
    const URL = "http://"+ IP +":"+PORT;
    localStorage.setItem("name",text.value);
    axios.post(URL + "/login",login).then((response) =>{
        if(response.data){
            window.location.pathname = "chart/chart.html"
        }
        else{
            let ifCanNot = document.querySelector("#canNotSignIn");
            ifCanNot.textContent = "Wrong password or name!!";
            ifCanNot.style.color = "yellow";
        }
    });
}



let submit = document.querySelector("#submit");
submit.addEventListener("click",sendToServer)
