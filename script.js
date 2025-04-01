const userAge = parseInt(prompt("Quanti anni hai?"));
const userDistance = parseInt(prompt("Quanti chimoletri deve percorrere?"));
const price = 0.21 * userDistance;

//console.log(userAge, userDistance, price.toFixed(2));

const discount20 = (price * 20) / 100;
console.log(discount20);
const discount40 = (price * 40) / 100;
console.log(discount40);
const totalPriceUnder18 = price - discount20;
const totalPriceOver65 = price - discount40;

let outputText;

if (userAge < 18) {
  outputText =
    "la tua tariffa è scontata del 20%" + " " + totalPriceUnder18.toFixed(2);
} else if (userAge >= 65) {
  outputText =
    "la tua tariffa è scontata del 40%" + " " + totalPriceOver65.toFixed(2);
} else {
}

alert(outputText);
