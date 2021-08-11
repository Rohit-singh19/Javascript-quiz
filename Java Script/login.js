const loginbtnEl = document.getElementById('loginbtn');
const username = document.getElementById('username');
const password = document.getElementById('password');

let user = undefined;
let pass = undefined;


loginbtnEl.addEventListener('click', e => {
	checkInputs();

	if (user !== true || pass !== true) {
		e.preventDefault();
	}

});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		user = false;
	} else {
		setSuccessFor(username);
		user = true;
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		pass = false;
	} else {
		setSuccessFor(password);
		pass = true;
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
