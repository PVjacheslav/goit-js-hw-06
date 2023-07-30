const value = document.querySelector('#validation-input')

value.addEventListener('blur', handlerBlur) 

function handlerBlur(evt) {
   if(evt.currentTarget.value.length === Number(value.dataset.length)) {
        value.classList.add('valid');
        value.classList.remove('invalid')} 
    else {value.classList.add('invalid');
        value.classList.remove('valid')};
};