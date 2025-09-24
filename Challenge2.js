const prompt = require("prompt-sync")();

let nombre = prompt("Entrer un nombre positif: ");
let som = 0;
for (let i = 2; i < nombre + 1; i++) {
  if (nombre % i == 0) {
    som = som + 1;
  }
}
if (som < 2) {
  console.log(nombre + " est un nombre premier");
} else {
  console.log(nombre + " n'est pas un nombre premier");
}
