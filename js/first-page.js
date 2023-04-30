const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector(".greeting");
const firstAnimation = document.querySelector("#first-page");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
const INVISIBLE = "invisible"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings (username);
}

function paintGreetings(username) {
    greeting.innerText = `안녕! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    firstAnimation.classList.add(INVISIBLE);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    firstAnimation.classList.remove(INVISIBLE);
    loginForm.addEventListener("submit", onLoginSubmit);
    
} else {
    paintGreetings (savedUsername);
    
}
