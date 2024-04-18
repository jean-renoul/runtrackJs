function jsonValueKey(json, key) {
    return json[key];
}

let json = {
    name: "La Plateforme_",
    address: "8 rue d'hozier",
    city: "Marseille",
    nb_staff: "11",
    creation: "2019"
}

test = jsonValueKey(json, "city");
console.log(test);