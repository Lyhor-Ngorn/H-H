

const PORT = 3000;
const IP = "192.168.88.34";
const url = "http://"+ IP +":"+PORT;
function clickIt(event){
    event.preventDefault();
    console.log(text.value)
    let data = {
        "text": text.value
    }
    axios.post(url + "/postData",data).then((response) => {
        console.log(response.data)
    });
}

// get ul from html
const UL = document.querySelector("ul");
// get button and add evenlistener
const text = document.querySelector("#text");
const  sendIt = document.getElementById("submit");
sendIt.addEventListener("click", clickIt);