const selectors = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    counter: document.querySelector("#value"),
}

selectors.decrementBtn.addEventListener('click', handlerDecBtn);
selectors.incrementBtn.addEventListener('click', handlerIncBtn);

let counterValue = 0
function handlerDecBtn() {
    counterValue -= 1
    selectors.counter.textContent = counterValue
}

function handlerIncBtn() {
    counterValue += 1
    selectors.counter.textContent = counterValue
}