const goalBtn = document.querySelector("#calender-goalBtn");
const goalPage = document.querySelector("#something");
const mustBtn = document.querySelector("#calender-mustBtn");
const mustPage = document.querySelector("#somethingMust");
const funBtn = document.querySelector("#calender-funBtn");
const funPage = document.querySelector("#somethingFun");
const writeBtn = document.querySelector("#calender-writeBtn");
const writePage = document.querySelector("#somethingWrite");

function revealGoalPage (event) {
    event.preventDefault();
    funPage.classList.add("invisible");
    mustPage.classList.add("invisible");
    writePage.classList.add("invisible");
}
function revealMustPage (event) {
    event.preventDefault();
    mustPage.classList.remove("invisible");
    funPage.classList.add("invisible");
    writePage.classList.add("invisible");
}
function revealFunPage (event) {
    event.preventDefault();
    funPage.classList.remove("invisible");
    mustPage.classList.add("invisible");
    writePage.classList.add("invisible");
}
function revealWritePage (event) {
    event.preventDefault();
    funPage.classList.add("invisible");
    mustPage.classList.add("invisible");
    writePage.classList.remove("invisible");
}
goalBtn.addEventListener("click",revealGoalPage);
mustBtn.addEventListener("click",revealMustPage);
funBtn.addEventListener("click",revealFunPage);
writeBtn.addEventListener("click",revealWritePage);

const goalInputBtn =document.querySelector("#something input");
const mustInputBtn =document.querySelector("#somethingMust input");
const funInputBtn =document.querySelector("#somethingFun input");
const writeInputBtn =document.querySelector("#somethingWrite input");

function revealGoalInputBtn() {
    goalInputBtn.classList.remove("invisible");
    goalPage.addEventListener("mouseleave", hideInputBtn);
}
function revealMustInputBtn() {
    mustInputBtn.classList.remove("invisible");
    mustPage.addEventListener("mouseleave", hideInputBtn);
}
function revealFunInputBtn() {
    funInputBtn.classList.remove("invisible");
    funPage.addEventListener("mouseleave", hideInputBtn);
}
function revealWriteInputBtn() {
    writeInputBtn.classList.remove("invisible");
    writePage.addEventListener("mouseleave", hideInputBtn);
}


function hideInputBtn() {
    goalInputBtn.classList.add("invisible");
    mustInputBtn.classList.add("invisible");
    funInputBtn.classList.add("invisible");
    writeInputBtn.classList.add("invisible");
}

goalPage.addEventListener("mouseenter", revealGoalInputBtn);
mustPage.addEventListener("mouseenter", revealMustInputBtn);
funPage.addEventListener("mouseenter", revealFunInputBtn);
writePage.addEventListener("mouseenter", revealWriteInputBtn);

