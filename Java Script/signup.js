const form = document.getElementById('signupbtn');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

let user = undefined;
let em = undefined;
let pass = undefined;
let pass2 = undefined;


form.addEventListener('click', e => {
	checkInputs();

	if (user !== true || em !== true || pass !== true || pass2 !== true) {
		
		e.preventDefault();
	}
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		user = false;
	} else {
		setSuccessFor(username);
		user = true;
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		em = false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		em = false;
	} else {
		setSuccessFor(email);
		em = true;
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		pass = false;
	} else {
		setSuccessFor(password);
		pass = true;
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
		pass2 = false;
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
		pass2 = false;
	} else{
		setSuccessFor(password2);
		pass2 = true;
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}