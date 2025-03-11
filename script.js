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

/* Novi zadatak (2)*/

/*4*/
function canDrive(godine) {
  const driveing = godine >= 18 ? true : false;
  const drive = godine >= 18 ? console.log(driveing) : console.log(driveing);
  return drive;
}
canDrive(18);

/*5*/
function isPositive(broj) {
  const negative = 0 <= broj;
  const pozitivanNegativan =
    0 <= broj ? console.log(negative) : console.log(negative);
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
function getInitials(ime, prezime) {
  const inicijalJedan = ime.charAt(0);
  const inicijalDva = prezime.charAt(0);
  console.log(inicijalJedan, inicijalDva);
  return getInitials;
}
getInitials("Luka", "Popovic");

/*10*/
function calculateTicketPrice(age) {
  const card = age < 15 ? "50e" : "70e";
  console.log(card);
  return card;
}
calculateTicketPrice(16);

/*11*/
function input(string) {
  const inputOne = string === "";
  const inputE = string === "" ? console.log(inputOne) : console.log(inputOne);
  return inputE;
}
input("");
/*12*/
function inputeDva(stringDva) {
  const inputTwo = stringDva.length === 0;
  const inputeS =
    stringDva.length === 0 ? console.log(inputTwo) : console.log(inputTwo);
  return inputeS;
}
/*inputeDva("");
function checkInput(input) {
  /*if (input==false){}*/
/*if (input)*/

/*Zadatak 3*/

/*13*/

function login(username, password) {
  if (username === "admin") {
    console.log(true);
  } else if (username === "monkey" && password === "123") {
    console.log(true);
  } else if (username === "moomoo" && password === "farm") {
    console.log(true);
  } else {
    console.log(false);
  }
  return login;
}
const test = login("hello", "meow");
const test2 = login("admin", "lol");
const test3 = login("monkey", "123");
const test4 = login("moomoo", "farm");
const test5 = login("moomoo", "moo");

/*14l*/
function convertDistance(brojDistanca, vrednost) {
  if (vrednost === "m") {
    const conD = convertDistanceToM(brojDistanca);
    console.log(conD);
  } else if (vrednost === "km") {
    const convertedDistance = convertDistanceToKilometers(brojDistanca);
    console.log(convertedDistance);
  } else {
    throw new Error("nepoznata distanca");
  }
}
convertDistance(3, "m");

function convertDistanceToKilometers(metar) {
  const kilometri = metar / 1000;
  return kilometri;
}
convertDistanceToKilometers();

function convertDistanceToM(kilometar) {
  const metar = kilometar * 1000;
  return metar;
}
convertDistanceToM();
/*15*/

const ime = "Marko";
const prezime = "Markovic";
const godine = 32;
const plata = 3000;
const trenutnaGodina = 2027;
const godinaZaposlenja = 2024;
const poslednjaPovisica = 2020;
const zemlja = "Srbija";
const ulica = "Petra petrovica 25";
const brojTelefona = "069 123456";
/*1*/
function getInfo() {
  console.log(
    ime,
    prezime,
    godine,
    plata,
    trenutnaGodina,
    godinaZaposlenja,
    poslednjaPovisica,
    zemlja,
    ulica,
    brojTelefona
  );
  return getInfo;
}
getInfo();
/*2*/
function calculateWorkYears() {
  const yeraOfWork = trenutnaGodina - godinaZaposlenja;
  console.log(yeraOfWork);
  return yeraOfWork;
}
calculateWorkYears();
/*3*/
function calculateYearsUntilRetreat() {
  const penzija = 65 - godine;
  console.log(penzija);
  return penzija;
}
calculateYearsUntilRetreat();
/*4*/
function getSalary() {
  console.log(plata);
  return plata;
}
getSalary();
/*5*/
function setSalary(povisica) {
  const povecanje = plata + povisica;
  console.log(povecanje);
  return povecanje;
}
setSalary(1000);
/*6*/
function getLastYearRaise() {
  /*if (setLastYearsRaise !== poslednjaPovisica) {
    console.log(poslednjaPovisica);
  }*/
  return poslednjaPovisica;
}
getLastYearRaise();
/*7*/
function setLastYearsRaise(raise) {
  const year = raise;
  return year;
}
setLastYearsRaise(2027);
/*8*/
function calculateRaise(broj) {
  const calcuLate = plata * (broj / 100);
  console.log(calcuLate);
  return calcuLate;
}
calculateRaise(15);
/*9*/
function isEligibleForRaise(plus) {
  if (poslednjaPovisica < trenutnaGodina) {
    console.log(plata + plus);
  }
  return isEligibleForRaise;
}
isEligibleForRaise(1000);
/*10 */
function raiseSalary() {
  const novaPlata = plata + calculateRaise(15);
  calculateRaise(15);
  console.log(novaPlata);
  return raiseSalary;
}
raiseSalary();
