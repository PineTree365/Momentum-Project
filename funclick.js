const funClick = document.querySelector("#fun-click");

function randomFall () {
    const div = document.createElement("div");
    const section = document.createElement("section");
    section.classList.add("BallArea");
    section.appendChild(div);
    div.classList.add(`BallStyle${Math.floor(Math.random() * 4)}`);
    funClick.appendChild(section);
    
}

funClick.addEventListener("click", randomFall);

