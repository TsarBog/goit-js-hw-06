const selectors = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
    form: document.querySelector(".login-form"),
}
console.log(selectors)

selectors.input.addEventListener('input', handlerQuery);

function handlerQuery(evt) {
    selectors.output.textContent = evt.target.value.trim()
}
if (!evt.target.value.trim()) {
    selectors.output.textContent = "Anonymous!"
    
}