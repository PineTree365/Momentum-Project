const anchorZone = document.querySelector("#anchor-zone");
const createBtn = document.querySelector(".anchor-zone_create");
const addShortcutForm = document.querySelector(".add-shortCut_form");
const wholeContent = document.querySelector("#wholeContent");
const anchorSection = document.querySelector(".anchor-zone_section");
const ellipsis = anchorSection.querySelector("button");
const createBox = anchorZone.querySelector("form");

function showAddShortcut(event) {
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

function createBoxReveal() {
    createBox.classList.remove("hidden");
    anchorSection.addEventListener("mouseleave",createBoxReveal);
}
function createBoxReveal() {
    createBox.classList.add("hidden");
}

function replaceShortcutInfo () {}

createBtn.addEventListener("click", showAddShortcut);
anchorSection.addEventListener("mouseenter",ellipsisReveal);
anchorSection.addEventListener("contextmenue",replaceShortcutInfo);
anchorZone.addEventListener("mouseenter",createBoxReveal);

const shortcutUrl = document.querySelector("#add-shortCut_form__url");
const shortcutName = document.querySelector("#add-shortCut_form__name");

function addShortcut(event) {
    event.preventDefault();
    const url = shortcutUrl.value;
    const name = shortcutName.value;
    shortcutUrl.value ="";
    shortcutName.value ="";
    const div = document.createElement("div");
    const a = document.createElement("a");
    const span = document.createElement("span");
    span.innerText = name;
    div.classList.add("anchor-zone_section");
    div.appendChild(a);
    a.classList.add("anchor-stlyle");
    a.href = url;
    a.appendChild(span);
    anchorZone.prepend(div); 

}

addShortcutForm.addEventListener("submit", addShortcut);