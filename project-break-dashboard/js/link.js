//IMPORT LINK
import { saveUrl } from "./functions/functionLinks.js";

// BACKGROUND IMAGE
let bg = ["bg/1.jpg", "bg/2.jpg", "bg/3.jpg", "bg/4.jpg"];

function getRandomImage() {
  let randomNumber = Math.floor(Math.random() * bg.length);
  return bg[randomNumber];
}

function setBackgroundImage() {
  let randomBG = getRandomImage();
  document.body.style.backgroundImage = "url('" + randomBG + "')";
}

setBackgroundImage();

setInterval(setBackgroundImage, 5000);

// LINKS
const insertButton = document.querySelector(".insertButton");
const insertURL = document.getElementById("insertURL");

insertButton.addEventListener("click", saveUrl);
