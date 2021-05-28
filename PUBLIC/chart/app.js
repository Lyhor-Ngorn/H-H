const PORT = 3000;
const IP = "192.168.88.31";
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
                li.textContent = i["name"] +":"+ i.text;
                if(i.name == getName){
                    li.style.background = "yellow";
                }else{
                    li.style.background = "green";
                }
            }

        }
    });
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
                li.textContent = i["name"] +":"+"\n"+ i.text;
                li.style.color = "white";
                li.style.backgroundSize = "cover";
                if(i.name == getName){
                    li.style.background = "#66C19C";
                    li.className = "me";
                }else{
                    li.style.background = "#91B247";
                    li.className = "other";
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