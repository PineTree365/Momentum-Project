const anchorZone = document.querySelector("#anchor-zone");
const createBtn = document.querySelector(".anchor-zone_create");
const addShortcutForm = document.querySelector(".add-shortCut_form");
const wholeContent = document.querySelector("#wholeContent");
const anchorSection = document.querySelector(".anchor-zone_section");
const ellipsis = anchorSection.querySelector("button");
const createBox = anchorZone.querySelector("anchor-zone_create");

function showAddShortcut(event) {
    event.preventDefault();
    addShortcutForm.classList.remove("invisible");
    wholeContent.classList.add("blur");
    wholeContent.addEventListener("mousedown", recover);
}

function recover() {
    addShortcutForm.classList.add("invisible");
    wholeContent.classList.remove("blur");
}

function createBoxReveal() {
    createBox.classList.remove("hidden");
    anchorSection.addEventListener("mouseleave",createBoxReveal);
}
function createBoxReveal() {
    createBox.classList.add("hidden");
}

createBtn.addEventListener("click", showAddShortcut);

function deleteAnchor () {
    const div = event.target.parentElement;
    div.remove();
}


const shortcutUrl = document.querySelector("#add-shortCut_form__url");
const shortcutName = document.querySelector("#add-shortCut_form__name");

let shortcutList = [];

const savedShortcutList = localStorage.getItem("shortcutLIst");

function addShortcut(event) {
    event.preventDefault();
    const url = shortcutUrl.value;
    const name = shortcutName.value;
    shortcutUrl.value ="";
    shortcutName.value ="";
    paintShortcut(url,name);
}
function pushList(url,name) {
    shortcutList.push([url,name]);
    localStorage.setItem("shortcutLIst",JSON.stringify(shortcutList));
}

function paintShortcut(url,name) {
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
    pushList(url,name);
}

addShortcutForm.addEventListener("submit", addShortcut);

if (localStorage.getItem("shortcutLIst") !== null) {
    const parsedShortcutList = JSON.parse(savedShortcutList);
    console.log(parsedShortcutList[0][0]);
    let order = 0;
    if (order <= parsedShortcutList.length) {
        const url = parsedShortcutList[order][0];
        const name = parsedShortcutList[order][1];
        order = order + 1;
        paintShortcut(url,name);
        if(order <= parsedShortcutList.length) {
            const url = parsedShortcutList[order][0];
            const name = parsedShortcutList[order][1];
            order = order + 1;
            paintShortcut(url,name);
        }  if (order <= parsedShortcutList.length) {
            const url = parsedShortcutList[order][0];
            const name = parsedShortcutList[order][1];
            order = order + 1;
            paintShortcut(url,name);
            if(order <= parsedShortcutList.length) {
                const url = parsedShortcutList[order][0];
                const name = parsedShortcutList[order][1];
                order = order + 1;
                paintShortcut(url,name);
            }  if (order <= parsedShortcutList.length) {
                const url = parsedShortcutList[order][0];
                const name = parsedShortcutList[order][1];
                order = order + 1;
                paintShortcut(url,name);
                if(order <= parsedShortcutList.length) {
                    const url = parsedShortcutList[order][0];
                    const name = parsedShortcutList[order][1];
                    order = order + 1;
                    paintShortcut(url,name);
                }  if (order <= parsedShortcutList.length) {
                    const url = parsedShortcutList[order][0];
                    const name = parsedShortcutList[order][1];
                    order = order + 1;
                    paintShortcut(url,name);
                    if(order <= parsedShortcutList.length) {
                        const url = parsedShortcutList[order][0];
                        const name = parsedShortcutList[order][1];
                        order = order + 1;
                        paintShortcut(url,name);
                    }  if (order <= parsedShortcutList.length) {
                        const url = parsedShortcutList[order][0];
                        const name = parsedShortcutList[order][1];
                        order = order + 1;
                        paintShortcut(url,name);
                        if(order <= parsedShortcutList.length) {
                            const url = parsedShortcutList[order][0];
                            const name = parsedShortcutList[order][1];
                            order = order + 1;
                            paintShortcut(url,name);
                        }  if (order <= parsedShortcutList.length) {
                            const url = parsedShortcutList[order][0];
                            const name = parsedShortcutList[order][1];
                            order = order + 1;
                            paintShortcut(url,name);
                            if(order <= parsedShortcutList.length) {
                                const url = parsedShortcutList[order][0];
                                const name = parsedShortcutList[order][1];
                                order = order + 1;
                                paintShortcut(url,name);
                            }  if (order <= parsedShortcutList.length) {
                                const url = parsedShortcutList[order][0];
                                const name = parsedShortcutList[order][1];
                                order = order + 1;
                                paintShortcut(url,name);
                                if(order <= parsedShortcutList.length) {
                                    const url = parsedShortcutList[order][0];
                                    const name = parsedShortcutList[order][1];
                                    order = order + 1;
                                    paintShortcut(url,name);
                                }  if (order <= parsedShortcutList.length) {
                                    const url = parsedShortcutList[order][0];
                                    const name = parsedShortcutList[order][1];
                                    order = order + 1;
                                    paintShortcut(url,name);
                                    if(order <= parsedShortcutList.length) {
                                        const url = parsedShortcutList[order][0];
                                        const name = parsedShortcutList[order][1];
                                        order = order + 1;
                                        paintShortcut(url,name);
                                    }  if (order <= parsedShortcutList.length) {
                                        const url = parsedShortcutList[order][0];
                                        const name = parsedShortcutList[order][1];
                                        order = order + 1;
                                        paintShortcut(url,name);
                                        if(order <= parsedShortcutList.length) {
                                            const url = parsedShortcutList[order][0];
                                            const name = parsedShortcutList[order][1];
                                            order = order + 1;
                                            paintShortcut(url,name);
                                        }  if (order <= parsedShortcutList.length) {
                                            const url = parsedShortcutList[order][0];
                                            const name = parsedShortcutList[order][1];
                                            order = order + 1;
                                            paintShortcut(url,name);
                                            if(order <= parsedShortcutList.length) {
                                                const url = parsedShortcutList[order][0];
                                                const name = parsedShortcutList[order][1];
                                                order = order + 1;
                                                paintShortcut(url,name);
                                            }  if (order <= parsedShortcutList.length) {
                                                const url = parsedShortcutList[order][0];
                                                const name = parsedShortcutList[order][1];
                                                order = order + 1;
                                                paintShortcut(url,name);
                                                if(order <= parsedShortcutList.length) {
                                                    const url = parsedShortcutList[order][0];
                                                    const name = parsedShortcutList[order][1];
                                                    order = order + 1;
                                                    paintShortcut(url,name);
                                                }  if (order <= parsedShortcutList.length) {
                                                    const url = parsedShortcutList[order][0];
                                                    const name = parsedShortcutList[order][1];
                                                    order = order + 1;
                                                    paintShortcut(url,name);
                                                    if(order <= parsedShortcutList.length) {
                                                        const url = parsedShortcutList[order][0];
                                                        const name = parsedShortcutList[order][1];
                                                        order = order + 1;
                                                        paintShortcut(url,name);
                                                    }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

}