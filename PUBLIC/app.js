const PORT = 3000;
const IP = "192.168.88.14";
const url = "http://"+ IP +":"+PORT;
// let url = "https://hour-hour.herokuapp.com/"
function clickIt(event){
    let data = {
        "text": text.value
    }
    axios.post(url + "/postData",data).then((response) => {
        localStorage.setItem("text",JSON.stringify(response.data))
        UL.remove();
        let  ul = document.createElement("ul");
        container.appendChild(ul);
        for(let i of response.data){
            let li = document.createElement("li");
            ul.appendChild(li);
            li.textContent = i.text;
        }
    });
}

function loadData(){
    let getText = localStorage.getItem("text");
    getText = JSON.parse(getText);
    let UL = document.querySelector("ul");
    UL.remove();
    let  ul = document.createElement("ul");
    container.appendChild(ul);
    for(let i of getText){
            let li = document.createElement("li");
            ul.appendChild(li);
            li.textContent = i.text;
        }
}





// get ul from html
const UL = document.querySelector("ul");
// get button and add evenlistener
const text = document.querySelector("#text");
const  sendIt = document.getElementById("submit");
sendIt.addEventListener("click", clickIt);

const container = document.querySelector(".container");


loadData;
setInterval(loadData,100)