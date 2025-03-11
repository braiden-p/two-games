let random = Math.floor(Math.random() * 100) + 1;
const form = document.querySelector("form");
const field = document.querySelector("#guess");

let userGsr = document.querySelector("#userGuesses");
const result = document.querySelector("#result > span");

const button = document.createElement("button");
button.textContent = "Start new game";

let gsdNum = 0;
let gsrAmnt = 0;

const classes = ["tooBig", "tooSmall", "tooMany", "justRight"];

form.addEventListener("submit", event => {
    event.preventDefault();
    gsrAmnt += 1;

    gsdNum = Number(field.value);

    // function for every time the user inputs a number

    const genResult = (msg, cls) => {
        classes.forEach(clsName => result.classList.remove(clsName));
        result.classList.add(cls);
        result.textContent = msg;
    }

    userGsr.textContent += gsdNum + "  ";

    if (gsdNum == random) {
        genResult("Congratulations! You got it right!", "justRight");
    } else {
        if (gsrAmnt >= 10) {
            genResult("!!! Too many attempts, GAME OVER !!!", "tooMany");
        } else {
            if (gsdNum < random) {
                genResult("WRONG, that guess was too small", "tooSmall");
            } else if (gsdNum > random) {
            genResult("WRONG, that guess was too BIG", "tooBig");
            }
        }
    }

    field.value = "";

    if (result.className == "justRight" || result.className == "tooMany") {
        field.setAttribute("disabled", "");
        document.querySelector("#guessing").appendChild(button);
        button.focus();
    }
});

button.addEventListener("click", () => {
    userGsr.textContent = "";
    result.textContent = "";

    field.removeAttribute("disabled");
    result.classList.remove("tooMany");
    result.classList.remove("justRight");
    button.parentNode.removeChild(button);

    random = Math.floor(Math.random() * 100) + 1;
    gsrAmnt = 0;
    field.focus();
});