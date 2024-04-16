let konamicode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
let code = "";

document.addEventListener("keydown", function(event) {
    let key = event.key;
    code += key;
    console.log(code);
    if (code.includes (konamicode)) {
        code = "";
        plateforme();
    }
});

function plateforme() {
    let header = document.querySelector("header");
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
    header.style.backgroundColor = "orange";
    header.style.height = "100px";
    bienvenue = document.getElementById("bienvenue");
    bienvenue.style.display = "flex";
    bienvenue.style.justifyContent = "center";
}