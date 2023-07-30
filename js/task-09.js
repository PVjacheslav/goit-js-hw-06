const button = document.querySelector(".change-color");
const body =document.querySelector("body");
const spanColorValue = document.querySelector(".color");

button.addEventListener("click", onClick);

function onClick (evt) {
  let randClr =getRandomHexColor();
  body.style.backgroundColor = randClr;
  spanColorValue.textContent = randClr;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
