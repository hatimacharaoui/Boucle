const prompt = require("prompt-sync")();
let nombre = 0;
let som = 0;
let max = 0;
do {
  nombre = +prompt("Entrer un nombre: ");
  if (nombre < 100) {
    som = som + nombre;
  }
  if (nombre > max) {
    max = nombre;
  }
} while (nombre != 0);
console.log("la somme est " + som + " le max est " + max);
