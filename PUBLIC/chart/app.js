// const { link } = require("fs/promises");

const PORT = 3000;
const IP = "192.168.137.185";
const url = "http://"+ IP +":"+PORT;
// let url = "https://hour-hour.herokuapp.com/"
function clickIt(event){
    event.preventDefault();
    let getName = localStorage.getItem("name");
    let data = {
        "text": text.value,
        "name" : getName
    }

    axios.post(url + "/postData",data).then((response) => {
        let oldUl = document.querySelector("ul");
        oldUl.remove();
        let  ul = document.createElement("ul");
        container.appendChild(ul);
        for(let i of response.data){
            if (i.text != ""){
                let li = document.createElement("li");
                ul.appendChild(li);
                let spanName = document.createElement("spanName");
                li.appendChild(spanName);
                spanName.textContent=i.name;
                spanName.style.color="white";
                let span = document.createElement("span");
                li.appendChild(span);
                span.style.color = "white";
                span.textContent =i.text;
                spanName.className = "nameSpan";
                if(i.text === getName){
                    span.style.background = "#C70039";
                }else{
                    span.style.background = "green";
                }
            }

        }
    });
    text.value = null;
}

function loadData(){
    let getName = localStorage.getItem("name");
    axios.get("/reload").then((res) =>{
        let oldUl = document.querySelector("ul");
        oldUl.remove();
        let  ul = document.createElement("ul");
        container.appendChild(ul);
        for(let i of res.data){
            if (i.text != ""){
                let li = document.createElement("li");
                ul.appendChild(li);
                let spanName = document.createElement("spanName");
                li.appendChild(spanName);
                spanName.textContent=i.name;
                spanName.style.color="white";
                let span = document.createElement("span");
                li.appendChild(span);
                span.style.color = "white";
                span.textContent =i.text;
                spanName.className = "nameSpan";
                if(i.text === getName){
                    span.style.background = "#C70039";
                }else{
                    span.style.background = "green";
                }
            }

        }
    })
}






// get button and add evenlistener
const text = document.querySelector("#text");
const  sendIt = document.getElementById("submit");
sendIt.addEventListener("click", clickIt);

const container = document.querySelector(".container");


loadData;
setInterval(loadData,1000)