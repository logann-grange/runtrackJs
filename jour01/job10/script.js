function compterVoyelles(phrase) {
    let tab_voyelles = ["a", "e", "i", "o", "u", "y"];
    let count = 0;
    for (let lettre of phrase) {
        for (let voyelle of tab_voyelles) {
            if (lettre == voyelle) {
                count++;
                break;
            }
        }
    }
    return count;
}

console.log(compterVoyelles("aqzesrtdytuyirhgrfed"));