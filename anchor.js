const anchorZone = document.querySelector("#anchor-zone");
const createBtn = document.querySelector(".anchor-zone_create");
const addShortcutForm = document.querySelector(".add-shortCut_form");
const wholeContent = document.querySelector("#wholeContent");
const anchorSection = document.querySelector(".anchor-zone_section");
const ellipsis = document.querySelector(".ellipsis button");

function addShortcut(event) {
    event.preventDefault();
    addShortcutForm.classList.remove("invisivle");
    wholeContent.classList.add("blur");
    wholeContent.addEventListener("mousedown", recover);
}


function recover() {
    addShortcutForm.classList.add("invisivle");
    wholeContent.classList.remove("blur");
}

function ellipsisReveal() {
    ellipsis.classList.remove("hidden");
    anchorSection.addEventListener("mouseleave",ellipsisHidden);
}
function ellipsisHidden() {
    ellipsis.classList.add("hidden");
}

createBtn.addEventListener("click", addShortcut);
anchorSection.addEventListener("mouseenter",reveal);
