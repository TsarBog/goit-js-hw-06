const input = document.querySelector('#validation-input');
input.addEventListener("blur", handlerInputBlur);

function handlerInputBlur(evn) {
    const dataLength = input.getAttribute("data-length")
    console.log(dataLength)

    const currentLength = input.value.length
    console.log(currentLength)
    
    input.classList.add("invalid")

    if (Number(dataLength) === Number(currentLength)) {
        input.classList.replace("invalid", "valid")
    }
    
}
