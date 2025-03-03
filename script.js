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
/*2*/

function izmedjuJedanIDvadeset(broj) {
  if (broj >= 1 && broj <= 20) {
    const brojIzmedju = "jeste izmedju 1 i 20";
    return brojIzmedju;
  } else {
    const brojNije = "nije izmedju 1 i 20";
    return brojNije;
  }
}
console.log(izmedjuJedanIDvadeset(5));
