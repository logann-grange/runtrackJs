function verifNom() {
    let nom = $("#nom").val();  
    let msgErreur = "";
    if (nom == "") {
        msgErreur += "Entrez un nom";
        console.log("Entrez un nom")
    }
    else if (nom.length < 2) {
        msgErreur += "Nom trop petit";
        console.log("nom trop petit")
    }    
    if (nom.length > 50) {
        msgErreur += "Nom trop grand";
        console.log("nom trop grand")
    }     

    $("#erreurNom").text(msgErreur);

}

function verifPrenom(){
    let prenom = $("#prenom").val();
    let msgErreur = "";
    if (prenom == "") {
        msgErreur += "Entrez un prénom";   
    }

    else if (prenom.length < 2) {
        msgErreur += "Nom trop petit";
    }     
    if (prenom.length > 50) {
        msgErreur += "Prenom trop grand";
    }     
    console.log(msgErreur)

    $("#erreurPrenom").text(msgErreur);
}

function verifEmail() {
    let email = $("#email").val();
    let msgErreur = "";

    if (email == "") {
        msgErreur += "Entrez une adresse mail";
    }

    else if (!email.includes(".") || (!email.includes("@"))) {
        msgErreur += "adresse mail invalide";
    }
    console.log(msgErreur)   

    $("#erreurEmail").text(msgErreur);
}

function verifMdp(){
    let mdp = $("#mdp").val();
    let msgErreur = "";
    if (mdp == "") {
        msgErreur += "Entrez un Mot de passe";
    }

    else if (mdp.length < 8) {
        msgErreur += "mot de passe trop petit";
    }       
    console.log("msgErreur")

    $("#erreurMdp").text(msgErreur);
}

function verifAdresse(){
    let adresse = $("#adresse").val();
    let msgErreur = "";
    if (adresse == "") {
        msgErreur += "Entrez une adresse";
    }

    console.log("msgErreur")

    $("#erreurAdresse").text(msgErreur);
}

function verifCodePostal(){
    let codePostal = $("#codePostal").val();
    let msgErreur = "";
    if (codePostal == "") {
        msgErreur += "Entrez un code postal";
    }

    console.log("msgErreur")

    $("#erreurCodePostal").text(msgErreur);
}

function verifAll() {
    verifNom();
    verifPrenom();
    verifEmail();
    verifMdp();
    verifAdresse();
    verifCodePostal();
}

$("#button").click(function() {
    verifAll()
});