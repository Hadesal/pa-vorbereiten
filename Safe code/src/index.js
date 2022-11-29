const messageResult = document.querySelector('#result');
let input = document.querySelector('input');

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', e => {
    processSafeButton(e.target.innerText);
    if(e.target.innerText === 'C'){
      messageResult.innerText = messageResult.innerText.slice(1)
    }
  })
}

let safeCombination = '1234';

function processSafeButton(pressedNumber) {

  if(safeCombination.indexOf(pressedNumber) !== -1){
    messageResult.innerText += pressedNumber;
  }
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    safeCombination = input.value
    console.log(input.value)
  }
  
})

input.onchange = function() {
  input.value = ''
}

function checkValid(){

  if(messageResult.innerText === safeCombination){
    messageResult.innerText = 'OPEN'
  }
}

setInterval(checkValid,10)


