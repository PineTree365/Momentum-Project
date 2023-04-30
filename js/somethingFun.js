const funForm = document.querySelector("#somethingFun");
const funInput = document.querySelector("#somethingFun input");
const funTextForm = document.querySelector("#somethingFun ul");

let funToDos = [];

function saveFunToDos() {
    localStorage.setItem("funToDo", JSON.stringify(funToDos));
}

function handleFunEvent(event) {
    event.preventDefault();
    const inputValue = funInput.value;
    funInput.value = "";
    const inputValueObj = {
        text: inputValue,
        id: Date.now(),
    };
    funToDos.push(inputValueObj);
    paintFun(inputValueObj);
    saveFunToDos();
}
function paintFun (object) {
    const li = document.createElement("li");
    li.id = object.id;
    const span = document.createElement("span");
    span.innerText = object.text;
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click",deleteFun);
    li.appendChild(span);
    li.appendChild(button);
    funTextForm.appendChild(li);

}
function deleteFun (event) {
    event.preventDefault();
    const li = event.target.parentElement;
    li.remove();
    funToDos = funToDos.filter(funToDo => {return funToDo.id !== parseInt(li.id)});
    saveFunToDos();
}
 funForm.addEventListener("submit", handleFunEvent);

const savedFunToDos = localStorage.getItem("funToDo");
if (savedFunToDos !== null) {
    const parsedFunToDos = JSON.parse(savedFunToDos);
    funToDos = parsedFunToDos;
    parsedFunToDos.forEach(paintFun);
}