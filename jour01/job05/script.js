function afficherJoursSemaines() {
    let joursSemaines = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

    for (let jour in joursSemaines) {
        console.log(joursSemaines[jour]);
    }
}

afficherJoursSemaines();