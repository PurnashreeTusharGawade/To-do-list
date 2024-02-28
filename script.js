const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", addTask);
function addTask() {
    if(!inputBox.value){
        alert("Please enter a task");
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";
    let span=document.createElement("span");
    span.innerHTML='x'
    li.appendChild(span);
    saveData();
    }
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
