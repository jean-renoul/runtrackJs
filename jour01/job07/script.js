function jourTravaille(jour, mois, annee) {
    let jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    let moisDeLAnnee = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    let joursFeries = [
        new Date(2024, 0, 1),
        new Date(2024, 3, 1),
        new Date(2024, 4, 8),
        new Date(2024, 4, 30),
        new Date(2024, 6, 14),
        new Date(2024, 7, 15),
        new Date(2024, 10, 1),
        new Date(2024, 10, 11),
        new Date(2024, 11, 25)
    ]
    let date = new Date(annee, mois - 1, jour);
    let jourDeLaSemaine = jours[date.getDay()];
    let moisDate = moisDeLAnnee[date.getMonth()];
    for (let jourFerie of joursFeries) {
        if (date.getTime() == jourFerie.getTime()) {
            console.log ("Le " + jourDeLaSemaine + " " + jour + " " + moisDate + " " + annee + " est un jour férié.")
            return;
        }
    }
    if (jourDeLaSemaine == "samedi" || jourDeLaSemaine == "dimanche") {
        console.log ("Le " + jourDeLaSemaine + " " + jour + " " + moisDate + " " + annee + " est un week-end.")
    }
    else {
        console.log ("Le " + jourDeLaSemaine + " " + jour + " " + moisDate + " " + annee + " est un jour travaillé.")
    }
}
jourTravaille(1, 1, 2024)
jourTravaille(9, 6, 2024)
jourTravaille(25, 6, 2024)
