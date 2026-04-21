function konami(code) {
    console.log(code);
    if (code.includes("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba")) {
        code = "";
        document.body.style.backgroundColor = "blue";
    }
}

let code = "";
document.addEventListener("keydown", (event) => {
    code += event.key;
    konami(code);
});