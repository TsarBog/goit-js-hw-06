const selectorsInput = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"), 
}

selectorsInput.input.addEventListener('input', handlerInput);

function handlerInput(evt) {
    selectorsInput.output.textContent = evt.target.value.trim()

if (!evt.target.value.trim()) {
    selectorsInput.output.textContent = "Anonymous"
    }
}