const input = document.querySelector("#validation-input");
input.addEventListener("blur", handlerInput);

function handlerInput(evt) {
    const inputBlur = evt.currentTarget;
    if (inputBlur.value.trim().lenght === Number(inputBlur.dataset.lenght)) {
        inputBlur.classList.remove("invalid");
        inputBlur.classList.add("valid");
    } else {
        inputBlur.classList.remove("valid");
        inputBlur.classList.add("invalid");
    }
}
