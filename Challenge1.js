const prompt = require("prompt-sync")();

let nombre = prompt("Entrer un nombre positif: ");

for (let i = 1; i < 11; i++) {
  console.log(nombre + " * " + i + " = " + i * nombre);
}
