input = document.querySelector('#input');


setInterval(checkForCode,10)

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', e => {
    if(e.target.innerText === 'C'){
      erase();
    }

    processSafeButton(e.target.innerText);

  })
}

const messageResult = document.querySelector('#result');
let safeCombination = '1234';
function processSafeButton(pressedNumber) {
  if(safeCombination.indexOf(pressedNumber) > -1){
    messageResult.innerText += pressedNumber;
  }
}


input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    safeCombination = input.value;    
    input.value = '';
    messageResult.innerText = '';
  }
  });

  function checkForCode () {
    if(safeCombination[safeCombination.length - 1] === messageResult.innerText[messageResult.innerText.length - 1]){
      messageResult.innerText = 'Save OPEN'
    }
  }

  // time 21.55 min





function erase() {
  let arr = messageResult.innerText.split('');
  arr.pop();
  messageResult.innerText = arr.join('');
}


