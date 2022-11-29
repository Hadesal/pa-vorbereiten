let input = document.querySelector("#input");
let validator = document.querySelector("#validator");
let maximum = document.querySelector("#maximum");

let numberValidation;
let numberOnPage = parseInt(maximum.textContent);



input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    number = parseInt(input.value);

    if (isNaN(number)) {
      validator.classList.add("invalid");
      validator.textContent = "Not a valid number";
    } else {
      validator.classList.add("valid");
      validator.textContent = "valid number";
      highestValue = Math.max(numberOnPage, number);
      maximum.textContent = highestValue;
      numberOnPage = highestValue;
    }
  }
});

setInterval(checkInput,1000);

function checkInput(){
    if(input.value.length === 0){
        validator.textContent = ''
    }
}

