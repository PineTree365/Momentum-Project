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
}
function revealFunPage (event) {
    event.preventDefault();
    funPage.classList.remove("invisible");
    mustPage.classList.add("invisible");
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