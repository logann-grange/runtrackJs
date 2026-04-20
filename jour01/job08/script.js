function sommeNombresPremiers(a, b) {
    nombre = [a, b];
    count_premier = 0;
    for (let i of nombre) {
        for (let y=2; y<i; y++) {
            if (i % y == 0) {
                console.log(i + " n'est pas premier");
                return;
            }
        }
    }
    return (a + b);
}

console.log(sommeNombresPremiers(2, 7))