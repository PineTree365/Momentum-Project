const mustForm = document.querySelector("#somethingMust");
const mustInput = document.querySelector("#somethingMust input");
const mustTextForm = document.querySelector("#somethingMust ul");

let mustToDos = [];

function saveMustToDos() {
    localStorage.setItem("mustToDo", JSON.stringify(mustToDos));
}

function handleMustEvent(event) {
    event.preventDefault();
    const inputValue = mustInput.value;
    mustInput.value = "";
    const inputValueObj = {
        text: inputValue,
        id: Date.now(),
    };
    mustToDos.push(inputValueObj);
    paintMust(inputValueObj);
    saveMustToDos();
}
function paintMust (object) {
    const li = document.createElement("li");
    li.id = object.id;
    const span = document.createElement("span");
    span.innerText = object.text;
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click",deleteMust);
    li.appendChild(span);
    li.appendChild(button);
    mustTextForm.appendChild(li);

}
function deleteMust (event) {
    event.preventDefault();
    const li = event.target.parentElement;
    li.remove();
    mustToDos = mustToDos.filter(mustToDo => {return mustToDo.id !== parseInt(li.id)});
    saveMustToDos();
}

mustForm.addEventListener("submit", handleMustEvent);

const savedMustToDos = localStorage.getItem("mustToDo");
if (savedMustToDos !== null) {
    const parsedMustToDos = JSON.parse(savedMustToDos);
    mustToDos = parsedMustToDos;
    parsedMustToDos.forEach(paintMust);
}