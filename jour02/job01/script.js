function citation() {
    let citation = document.getElementById("citation").textContent;
    return citation
}

let button = document.getElementById("button");
button.addEventListener("click", (event) => {
    console.log(citation());
});




