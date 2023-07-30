const elements = {
    fontSizeControler: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

elements.fontSizeControler.addEventListener('input', handlerChange);

function handlerChange(evt) {
    elements.text.style.fontSize = `${evt.currentTarget.value}px`
}
