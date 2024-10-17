/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/cards.ico";

window.onload = function() {
  //write your code here
  //Declaramos dos arrays, uno con los palos y otro con los valores de cada carta
  let palo = ["♥", "♦", "♣", "♠"];
  let carta = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "🦹🏻"];
  let color = "";

  let cartaRandom = Math.floor(Math.random() * carta.length);
  let paloRandom = Math.floor(Math.random() * palo.length);

  if (palo[paloRandom] === "♦" || palo[paloRandom] === "♥") {
    color = "red";
  } else {
    color = "black";
  }

  document.querySelector(".generarCarta").innerHTML = carta[cartaRandom];
  document.querySelector(".generarPaloTop").innerHTML = palo[paloRandom];
  document.querySelector(".generarPaloBottom").innerHTML = palo[paloRandom];

  document.querySelector(".generarCarta").style.color = color;
  document.querySelector(".generarPaloTop").style.color = color;
  document.querySelector(".generarPaloBottom").style.color = color;
};
