async function verifNom() {
    let nom = $("#nom").val();
    let msgErreur = "";

    if (nom == "") {
        msgErreur += "Entrez un nom";
    } else if (nom.length < 2) {
        msgErreur += "Nom trop petit";
    } else if (nom.length > 50) {
        msgErreur += "Nom trop grand";
    } else {
        try {
            const response = await fetch("/api/verif/nom", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nom })
            });

            const data = await response.json();
            if (!data.valid) msgErreur += data.message;

        } catch (error) {
            msgErreur += "Erreur de connexion";
            console.error("Erreur fetch nom :", error);
        }
    }

    $("#erreurNom").text(msgErreur);
    return msgErreur === "";
}

async function verifPrenom() {
    let prenom = $("#prenom").val();
    let msgErreur = "";

    if (prenom == "") {
        msgErreur += "Entrez un prénom";
    } else if (prenom.length < 2) {
        msgErreur += "Prénom trop petit";
    } else if (prenom.length > 50) {
        msgErreur += "Prénom trop grand";
    } else {
        try {
            const response = await fetch("/api/verif/prenom", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prenom })
            });

            const data = await response.json();
            if (!data.valid) msgErreur += data.message;

        } catch (error) {
            msgErreur += "Erreur de connexion";
            console.error("Erreur fetch prenom :", error);
        }
    }

    $("#erreurPrenom").text(msgErreur);
    return msgErreur === "";
}

async function verifEmail() {
    let email = $("#email").val();
    let msgErreur = "";

    if (email == "") {
        msgErreur += "Entrez une adresse mail";
    } else if (!email.includes(".") || !email.includes("@")) {
        msgErreur += "Adresse mail invalide";
    } else {
        try {
            const response = await fetch("/api/verif/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });

            const data = await response.json();
            if (!data.valid) msgErreur += data.message;

        } catch (error) {
            msgErreur += "Erreur de connexion";
            console.error("Erreur fetch email :", error);
        }
    }

    $("#erreurEmail").text(msgErreur);
    return msgErreur === "";
}

async function verifMdp() {
    let mdp = $("#mdp").val();
    let msgErreur = "";

    if (mdp == "") {
        msgErreur += "Entrez un mot de passe";
    } else if (mdp.length < 8) {
        msgErreur += "Mot de passe trop petit";
    } else {
        try {
            const response = await fetch("/api/verif/mdp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mdp })
            });

            const data = await response.json();
            if (!data.valid) msgErreur += data.message;

        } catch (error) {
            msgErreur += "Erreur de connexion";
            console.error("Erreur fetch mdp :", error);
        }
    }

    $("#erreurMdp").text(msgErreur);
    return msgErreur === "";
}

async function verifAdresse() {
    let adresse = $("#adresse").val();
    let msgErreur = "";

    if (adresse == "") {
        msgErreur += "Entrez une adresse";
    } else {
        try {
            const response = await fetch("/api/verif/adresse", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ adresse })
            });

            const data = await response.json();
            if (!data.valid) msgErreur += data.message;

        } catch (error) {
            msgErreur += "Erreur de connexion";
            console.error("Erreur fetch adresse :", error);
        }
    }

    $("#erreurAdresse").text(msgErreur);
    return msgErreur === "";
}

async function verifCodePostal() {
    let codePostal = $("#codePostal").val();
    let msgErreur = "";

    if (codePostal == "") {
        msgErreur += "Entrez un code postal";
    } else {
        try {
            const response = await fetch("/api/verif/codePostal", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ codePostal })
            });

            const data = await response.json();
            if (!data.valid) msgErreur += data.message;

        } catch (error) {
            msgErreur += "Erreur de connexion";
            console.error("Erreur fetch codePostal :", error);
        }
    }

    $("#erreurCodePostal").text(msgErreur);
    return msgErreur === "";
}

async function verifAll() {
    const resultats = await Promise.all([
        verifNom(),
        verifPrenom(),
        verifEmail(),
        verifMdp(),
        verifAdresse(),
        verifCodePostal()
    ]);

    const toutValide = resultats.every(r => r === true);

    if (toutValide) {
        console.log("Formulaire valide, envoi en cours...");
        // Soumettre le formulaire ici si besoin
    }
}

$("#button").click(function () {
    verifAll();
});