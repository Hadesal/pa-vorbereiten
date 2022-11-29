let input = document.querySelector('#input');
let validator = document.querySelector('#validator');
let maximum = document.querySelector('#maximum');

setInterval(checkifEmpty,1000);

input.addEventListener('keyup', () =>{
    let number = parseInt(input.value);
    
    if(isNaN(number)){
        validator.classList.remove('valid');
        validator.classList.add('invalid');
        validator.textContent = 'Not a valid number';
    } else{
        validator.classList.remove('invalid');
        validator.classList.add('valid');
        validator.textContent = 'Valid number';
        if(number > maximum.textContent){
            maximum.textContent = number;
        }
    }

})

function checkifEmpty(){
    if(input.value.length === 0){
        validator.classList.remove('invalid'); 
        validator.classList.remove('valid');
        validator.textContent = '';
    }
}

//Time 15:14 min