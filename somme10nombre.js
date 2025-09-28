const prompt = require("prompt-sync")();

let som = 0;

for (let i = 0; i < 10; i++) {
  let nbr = +prompt("Entrer un nombre : ");

  if (nbr >= 0) {
    som = som + nbr;
  }
}

console.log("La somme des nombres : " + som);
