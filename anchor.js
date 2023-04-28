const anchorZone = document.querySelector("#anchor-zone");
const createBtn = document.querySelector(".anchor-zone_create");
const addShortcutForm = document.querySelector(".add-shortCut_form");
const wholeContent = document.querySelector("#wholeContent");


function addShortcut(event) {
    event.preventDefault();
    addShortcutForm.classList.remove("invisivle");
    wholeContent.classList.add("blur");
    addShortcutForm.addEventListener("mouseleave",decision);
}

function decision() {
    wholeContent.addEventListener("mousedown", recover);
}

function recover() {
    addShortcutForm.classList.add("invisivle");
    wholeContent.classList.remove("blur");
}

createBtn.addEventListener("click", addShortcut);
