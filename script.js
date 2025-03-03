"use strict";
/*1*/

function calculateDiscaunt(cena, popust) {
  const calculate = `Cena je ${cena}, popust je ${popust}, cena sa popustom je ${
    cena - cena * (popust / 100)
  }`;
  return calculate;
}
const racun = calculateDiscaunt(100, 20);
console.log(racun);
