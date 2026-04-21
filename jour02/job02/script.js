function showhide() {
    let article = document.getElementById("mon-article");

    if (article) {
        article.remove();
    } 
    else {
        article = document.createElement("article");
        article.id = "mon-article";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    }
}

let button = document.getElementById("button");
button.addEventListener("click", (event) => {
    showhide();
});