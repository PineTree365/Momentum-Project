const writeForm = document.querySelector("#somethingWrite");
const writeInput = document.querySelector("#somethingWrite input");
const writeTextForm = document.querySelector("#somethingWrite ul");

let writeToDos = [];

function saveWriteToDos() {
    localStorage.setItem("writeToDo", JSON.stringify(writeToDos));
}

function handleWriteEvent(event) {
    event.preventDefault();
    const inputValue = writeInput.value;
    writeInput.value = "";
    const inputValueObj = {
        text: inputValue,
        id: Date.now(),
    };
    writeToDos.push(inputValueObj);
    paintWrite(inputValueObj);
    saveWriteToDos();
}
function paintWrite (object) {
    const li = document.createElement("li");
    li.id = object.id;
    const span = document.createElement("span");
    span.innerText = object.text;
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click",deleteWrite);
    li.appendChild(span);
    li.appendChild(button);
    writeTextForm.appendChild(li);

}
function deleteWrite (event) {
    event.preventDefault();
    const li = event.target.parentElement;
    li.remove();
    writeToDos = writeToDos.filter(writeToDo => {return writeToDo.id !== parseInt(li.id)});
    saveWriteToDos();
}
 writeForm.addEventListener("submit", handleWriteEvent);

const savedWriteToDos = localStorage.getItem("writeToDo");
if (savedWriteToDos !== null) {
    const parsedWriteToDos = JSON.parse(savedWriteToDos);
    writeToDos = parsedWriteToDos;
    parsedWriteToDos.forEach(paintWrite);
}