function addKey(key) {
    let textArea = document.getElementById("keylogger");
    textArea.textContent += key;
}

document.addEventListener("keydown", (event) => {
    if (/^[a-zA-Z]$/.test(event.key)) {
        addKey(event.key);
    }
});