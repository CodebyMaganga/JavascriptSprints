let count = 0;
let final;
let display = document.getElementById("countElement")
let textDisplay = document.getElementById("text")


function increment(){
    count ++
    display.innerText = count;
}

function save (){
    let screenDisplay = count + " - "
    textDisplay.textContent += screenDisplay
    count = 0
}


    