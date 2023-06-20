const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');


input.addEventListener("input", handlerInput)

function handlerInput(evn) {
    span.style.fontSize = `${evn.target.value}px`
    console.log(span.style.fontSize)
}
