const buttons = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]')
}

const counter = document.querySelector('#value');

buttons.decrement.addEventListener('click', changeCounter);
buttons.increment.addEventListener('click', changeCounter);

function changeCounter(event) {
    let counterValue = Number(counter.textContent);
    let type = event.target.dataset.action;

    if (type === "decrement") {
        counterValue -= 1;
    }
    else if (type === "increment") {
        counterValue += 1;
    }

    counter.textContent = counterValue;
}