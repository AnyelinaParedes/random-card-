/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suit = generateRandomSuit();
  if (suit == "&diams;" || suit == "&hearts;") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
  } else {
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".bottom-suit").style.color = "black";
  }
  document.querySelector(".top-suit").innerHTML = suit;
  document.querySelector(".number").innerHTML = generateRandomNumber();
  document.querySelector(".bottom-suit").innerHTML = suit;
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["&diams;", "&spades;", "&hearts;", "&clubs;"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

setInterval(function() {
  let suit = generateRandomSuit();
  if (suit == "&diams;" || suit == "&hearts;") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
  } else {
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".bottom-suit").style.color = "black";
  }
  document.querySelector(".top-suit").innerHTML = suit;
  document.querySelector(".number").innerHTML = generateRandomNumber();
  document.querySelector(".bottom-suit").innerHTML = suit;
}, 10000);
