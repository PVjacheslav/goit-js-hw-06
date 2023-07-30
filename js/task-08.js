const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    // console.dir(event.currentTarget)
    const {email, password} = event.currentTarget.elements;

    if(email.value === "" || password.value === ""){
        const message = "Всі поля повинні бути заповнені!"
        alert(message);
    } 
        
    const data = {
        email: email.value,
        password: password.value,
    }
    console.log(data)
    formEl.reset()
}
