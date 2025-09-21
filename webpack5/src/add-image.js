import javascript from "./javascript.jpg";
import altText from './altText.txt'

function addImage() {
  const img = document.createElement("img");
  // img.alt = "javascript";
  img.alt = altText;
  img.width = 300;
  img.src = javascript;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
