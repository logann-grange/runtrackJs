function changeTheme(theme) {
    if (theme) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    return !theme;
}

let theme= false;
let button = document.getElementById("toggle-theme");

button.addEventListener("click", (event) => {
    theme= changeTheme(theme);
    console.log(theme);
});