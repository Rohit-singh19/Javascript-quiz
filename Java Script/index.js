const stbtnEL = document.getElementById('stbtn');

const username = document.getElementById('username');
const pin = document.getElementById('pin');




// function getData() {
// 	const usernameEl = document.getElementById('username').value;
// 	const pinEl = document.getElementById('pin').value;
	
//     sessionStorage.setItem("NAME", usernameEl);
//     sessionStorage.setItem("PIN", pinEl);

//     return;
// }

let user = undefined;
let pinEls = undefined;


stbtnEL.addEventListener('click', e => {
	checkInputs();
    // getData();
    console.log('its working');

	if (user !== true || pinEls !== true) {
		e.preventDefault();
	}
    else{
		const usernameEl = document.getElementById('username').value;
	const pinEl = document.getElementById('pin').value;
	
    sessionStorage.setItem("NAME", usernameEl);
    sessionStorage.setItem("PIN", pinEl);

    return;
	}

});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const pinValue = pin.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		user = false;
	} else {
		setSuccessFor(username);
		user = true;
	}
	
	if(pinValue === '') {
		setErrorFor(pin, 'Exam PIN cannot be blank');
		pinEls = false;
	} else {
		setSuccessFor(pin);
		pinEls = true;
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
