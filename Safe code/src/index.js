const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', e => {
    processSafeButton(e.target.innerText);
  })
}

let safeCombination = '1234';
function processSafeButton(pressedNumber) {
  const messageResult = document.querySelector('#result');
  messageResult.innerText += pressedNumber;
}