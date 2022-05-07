"strict mode";

const formButton = document.querySelector('button');
const errorLogo = document.querySelector('.error-logo');
const errorMsg = document.querySelector('.error-msg');
const inputEmail = document.querySelector('.input-email');

let errorsCount = 0;

formButton.addEventListener('click', errorContent);

function errorContent(e){
    e.preventDefault();

    errorsCount++;

    if(validateEmail(inputEmail.value)){
        errorLogo.style.display = 'none';
        inputEmail.style.cssText = 'border: 1px solid hsla(0, 74%, 74%, 0.4);'
        errorMsg.innerHTML = 'Suscribed!';
        return;
    } 

    if(errorsCount > 3){
        errorLogo.style.display = 'block';
        errorMsg.innerHTML = `Please do it, you've already tried ${errorsCount} times!`;
        return;
    }

    inputEmail.style.cssText = 'border: 2px solid hsla(355, 74%, 70%, 1);'

    errorLogo.style.display = 'block';
    errorMsg.innerHTML = 'Please provide a valid email';
}

function validateEmail (email) {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}