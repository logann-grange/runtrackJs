function addOne() {
    let compteur = document.getElementById("compteur");

    let valeur = parseInt(compteur.textContent)+1;

    compteur.textContent = valeur.toString();
}

let button = document.getElementById("button");
button.addEventListener("click", (event) => {
    addOne();
});