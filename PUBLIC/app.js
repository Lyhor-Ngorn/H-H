const PORT = 3000;
const IP = "192.168.88.18";
const url = "http://"+ IP +":"+PORT;
// let url = "https://hour-hour.herokuapp.com/"
function clickIt(event){
    event.preventDefault();
    let data = {
        "text": text.value
    }
    axios.post(url + "/postData",data).then((response) => {

        for(let i of response.data){
            let li = document.createElement("li");
            ul.appendChild(li);
            li.textContent = i.text;
        }
    });
}

function loadData(){
    let ul = document.querySelectorAll("ul");
    ul.remove();
    axios.get("/reload").then((res) =>{
        let  ul = document.createElement("ul");
        container.appendChild(ul);
        for(let i of res.data){
            let li = document.createElement("li");
            ul.appendChild(li);
            li.textContent = i.text;
        }
    })
}






// get button and add evenlistener
const text = document.querySelector("#text");
const  sendIt = document.getElementById("submit");
sendIt.addEventListener("click", clickIt);

const container = document.querySelector(".container");


loadData;
setInterval(loadData,500)