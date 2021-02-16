/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cardSuit;
let cardNumber;

let numberArray = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

window.onload = function() {
  cardSuit = Math.floor(Math.random() * 4) + 1; // 1 - 4
  cardNumber = Math.floor(Math.random() * 12); // 0- 12

  DrawCard(cardSuit, cardNumber);
};

function DrawCard(cardSuit, cardNumber) {
  let card = document.querySelector(".card"); // obtiene el objeto de la clase card
  let bodyNumber = document.querySelector("#cardNumber"); //obtiene el objeto para agregar el numero

  let suit = ""; // seleccionar el tipo de palo o suit que se va a mostrar
  switch (cardSuit) {
    case 1:
      suit = "Hearts";
      break;
    case 2:
      suit = "Diamonds";
      break;
    case 3:
      suit = "Spades";
      break;
    case 4:
      suit = "Clubs";
      break;
    default:
      break;
  }

  card.classList.add(suit); //agregar la clase al div principal;
  bodyNumber.innerHTML = numberArray[cardNumber]; //obtener el numero aleatorio y agregarlo como texto al p numberCard

}
