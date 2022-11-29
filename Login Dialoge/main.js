let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');
let messagebox = document.querySelector('#messagebox');


submit.addEventListener('click', () =>{
let emailVal = email.value;
let passwordVal = password.value.length;

if(emailVal.indexOf('@') === -1 ){
    messagebox.classList.add('fail-msg');
    messagebox.textContent = 'invalid email';
} else if(passwordVal < 10){
    messagebox.classList.add('fail-msg');
    messagebox.textContent = 'password too short';
} else{
    messagebox.classList.remove('fail-msg');
    messagebox.classList.add('good-msg');
    messagebox.textContent = 'Account created';
}
})

// time 16:45 min
