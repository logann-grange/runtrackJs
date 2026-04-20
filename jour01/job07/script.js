function jourTravaille(date) {
    let jourFerier = [new Date("2024-01-01"),new Date("2024-04-01"),new Date("2024-05-01"),new Date("2024-05-20"),new Date("2024-07-14"),new Date("2024-08-15"),new Date("2024-10-01"),new Date("2024-12-25")];

    let jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

    let mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];

    for (let ferier of jourFerier) {
        if (date.getTime() == ferier.getTime()) {
            console.log("Le " + jour[date.getDay()] + " " + date.getDate() + " " + mois[date.getMonth()] + " " + date.getFullYear() + " est un jour férié");
            return 0;
        }
    }

    if ((date.getDay() == 5) || (date.getDay() == 6)) {
        console.log("Non " + jour[date.getDay()] + " " + date.getDate() + " " + mois[date.getMonth()] + " " + date.getFullYear() + " est un week-end");
    }

    else {
        console.log("Oui, " + jour[date.getDay()] + " " + date.getDate() + " " + mois[date.getMonth()] + " " + date.getFullYear() + " est un jour travaillé")
    }
}

jourTravaille(new Date("2024-01-01"))
jourTravaille(new Date("2024-01-05"))
jourTravaille(new Date("2024-07-20"))


