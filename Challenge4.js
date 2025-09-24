const prompt = require("prompt-sync")();

let espace = "";
let nombre = prompt("Entrer un nombre positif: ");
let text = nombre.toString();
for (let i = nombre.length; i >= 0; i--) {
  espace = espace + i;
}
console.log(espace);
