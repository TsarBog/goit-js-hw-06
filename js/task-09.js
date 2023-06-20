function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor())


const buttonColor = document.querySelector('.change-color');
const nameColor = document.querySelector('.color')

buttonColor.addEventListener('click', handlerClick)

function handlerClick() {
  document.body.style.backgroundColor = nameColor.textContent = getRandomHexColor()
}