
const formLogin = document.querySelector(".login-form")

formLogin.addEventListener('submit', hendlerSubmit)

function hendlerSubmit(evt) {
    evt.preventDefault()
    const { email, password } = evt.currentTarget.elements;
    if (!email.value || !password.value) {
        const alMessage = "All fields must be filled!"
        alert(alMessage)
    } else {
        const data = {
            email: email.value,
            password: password.value
        }
        console.log(data)
    }
    formLogin.reset()
    
}
