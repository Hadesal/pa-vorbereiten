let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submitBtn = document.querySelector('#submit');
let messagebox = document.querySelector('#messagebox');
let passwordIsValid;
let emailIsValid;

submitBtn.addEventListener('click', () =>{
    // email validation
    if(email.value.indexOf('@') === -1){
        emailIsValid = false;
    } else{
        emailIsValid = true;
    }
    if(password.value.length < 10){
        passwordIsValid = false;
    } else{
        passwordIsValid = true;
    }

    //email Msg
    
     if(!emailIsValid){
        messagebox.classList.add('fail-msg')
        emailErrorMsg = 'email is invalid must contain @'
        messagebox.textContent = emailErrorMsg

    } else if(!passwordIsValid){
        messagebox.classList.add('fail-msg')
        passwordErrorMsg = 'password length min. 10'
        messagebox.textContent = passwordErrorMsg

    } else if(emailIsValid && passwordIsValid){
        messagebox.classList.remove('fail-msg')
        messagebox.classList.add('good-msg')
        messagebox.textContent = 'Account created'
    }
})

