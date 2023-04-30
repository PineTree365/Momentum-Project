const goalForm = document.querySelector("#something");
const goalInput = document.querySelector("#something input");
const goalTextForm = document.querySelector("#something_goal");

function handleSubmitGoal (event) {
    event.preventDefault();
    const inputValue = goalInput.value;
    goalInput.value = "";
    localStorage.setItem("goal",inputValue);
    paintingGoal(inputValue);
}
function paintingGoal (text) {
    const span = document.createElement("span");
    span.innerText = text;
    goalTextForm.appendChild(span); 
}
function deleteGoal () {
    const oldSpan = goalTextForm.querySelector("span");
    oldSpan.remove();
}
const savedGoal = localStorage.getItem("goal");

if (savedGoal !== null) {
    paintingGoal(savedGoal);
}
goalForm.addEventListener("submit", deleteGoal);
goalForm.addEventListener("submit", handleSubmitGoal);