document.addEventListener("keydown", keylogger);

function keylogger(event) {
    let key = event.key;
    let textarea = document.getElementById("keylogger");
    if (/^[a-zA-Z]$/.test(key)) {
        textarea.value += key;
    }
}