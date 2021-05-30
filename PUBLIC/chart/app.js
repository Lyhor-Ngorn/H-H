// const { link } = require("fs/promises");
// const PORT = 3000;
// const IP = "192.168.88.18";
// const url = "http://"+ IP +":"+PORT;
let could_scroll = true;
let url = "https://hour-hour.herokuapp.com/"

function clickIt(event){
    event.preventDefault();
    let getName = localStorage.getItem("name");
    let data = {
        "text": text.value,
        "name" : getName
    }
    could_scroll = true;

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
                let p = document.createElement("p");
                li.appendChild(p)
                p.style.color = "white";
                p.textContent =i.text;
                p.className = "txt";
                spanName.className = "nameSpan";

                if(i.text === getName){
                    p.style.background = "red";
                }else{
                    p.style.background = "green";
                }
            }
        }
    });
    text.value = null;
}
//reload or refresh without lose everything
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
                let p = document.createElement("p");
                li.appendChild(p)
                p.style.color = "white";
                p.textContent =i.text;
                p.className = "txt";
                spanName.className = "nameSpan";

                if(i.text === getName){
                    p.style.background = "#C70039";
                    p.style.width = "auto"
                }else{
                    p.style.background = "green";
                    p.style.width = "auto"
                };
            };

        };
    });
};
// get button and add evenlistener
const text = document.querySelector("#text");
const  sendIt = document.getElementById("submit");
sendIt.addEventListener("click", clickIt);
let container = document.querySelector(".container");
const allContain = document.querySelector(".allContain")
setInterval(()=>{
    loadData();
    1000;
    if(could_scroll){
        container.scrollTo(0,container.scrollHeight);
    }
})
container.addEventListener("scroll", () =>{
    could_scroll = false;
})
