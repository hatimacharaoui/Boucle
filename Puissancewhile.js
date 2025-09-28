const prompt = require("prompt-sync")();

let base = +prompt("entrer la base >0 : ");
let expo = +prompt("entrer l'exposant >=0 : ");

let result = 1;
let i = 0;

while (i < expo) {
  result = result * base;
  i++;
}

console.log(base + " ^ " + expo + " = " + result);
