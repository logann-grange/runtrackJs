function jsonValueKey(jsonString, key) {
  const obj = JSON.parse(jsonString);
  return obj[key];
}

let json = '{"name": "La Plateforme", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}';

console.log(jsonValueKey(json, "creation"));


