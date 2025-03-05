"use strict";
/*1*/

function calculateDiscaunt(cena, popust) {
  const priceWithDiscount = cena - cena * (popust / 100);
  const calculate = `Cena je ${cena}, popust je ${popust}, cena sa popustom je 
  ${priceWithDiscount}`;
  console.log(calculate);
  return priceWithDiscount;
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
/*3*/

function combineStrings(ime, prezime) {
  const imeJed = `Moje ime je ${ime}, moje prezime je ${prezime}, zajedno se pisu ${
    ime + prezime
  }.`;
  return imeJed;
}
const imePrezime = combineStrings("Luka", "Popovic");
console.log(imePrezime);

/*4*/
function canDrive(godine) {
  const drive = godine >= 18 ? "true" : "false";
  console.log(drive);
  return drive;
}
canDrive(18);

/*5*/
function isPositive(broj) {
  const pozitivanNegativan = 0 <= broj ? "true" : "false";
  console.log(pozitivanNegativan);
  return pozitivanNegativan;
}
isPositive(-3);

/*6*/

function maxOfTwoNumbers(brojJedan, brojDva) {
  const max = brojJedan > brojDva ? brojJedan : brojDva;
  console.log(max);
  return max;
}
maxOfTwoNumbers(15, 20);

/*7*/

function isWeekend(dan) {
  console.log(dan === "Nedelja" || dan === "Subota");
}
isWeekend("Subota");

/*8*/

function isValidPassword(password) {
  if (password.length > 8) {
    console.log("Lozinka je duza od 8 karaktera");
  } else {
    console.log("Nije duza od 8 karaktera");
  }
}
isValidPassword("MojaLozinka1234");
/*9*/
function calculateTicketPrice(age) {
  const card = age < 15 ? "50e" : "70e";
  console.log(card);
  return card;
}
calculateTicketPrice(16);
/*10*/
function getInitials(ime, prezime) {
  const inicijalJedan = ime.charAt(0);
  const inicijalDva = prezime.charAt(0);
  console.log(inicijalJedan, inicijalDva);
  return getInitials;
}
getInitials("Luka", "Popovic");
