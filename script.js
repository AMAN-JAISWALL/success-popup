
let okButtonHandler = document.getElementById("okButtonHandler");

let submitButtonHandler= document.getElementById("submitButtonHandler");
let popUpBoxDiv = document.getElementById("popUpBoxDiv");

okButtonHandler.addEventListener('click',()=>{
    console.log("okButtonHandler fun");
    popUpBoxDiv.classList.remove("oper-popup");

})

submitButtonHandler.addEventListener("click",()=>{
    console.log("submitButtonHandler fun");
    popUpBoxDiv.classList.add("oper-popup");
})

