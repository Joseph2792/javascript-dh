var redDiv = document.querySelector('.red');
var blueDiv = document.querySelector('.blue');
var orangeDiv = document.querySelector('.orange');
var inputName = document.querySelector('[name=user]');
var inputEmail = document.querySelector('[name=email]');
var enlace = document.querySelector('a');
var form = document.querySelector('form');

/* Estos 2 eventos si se disparan pues el eventListener pone en cola todos los eventos por más que sean el mismo disparador (click) */
redDiv.addEventListener('click', alertar);
redDiv.addEventListener('click', hacerConsoleLog);

function alertar () {
	window.alert('Hiciste clic sobre el DIV rojo');
}

function hacerConsoleLog () {
	console.log('Hiciste click en el DIV rojo');
}

blueDiv.onmouseover = function () {
	window.alert('Pasaste sobre el DIV azul');
	redDiv.removeEventListener('click', alertar);
};

// este evento no se ejecuta porque se pizza con el evento que le sigue
orangeDiv.onmouseout = function () {
	window.alert('Saliste del DIV naranja');
};

// Este evento pisa el anterior
orangeDiv.onmouseout = function () {
	console.log('Sale por consola lo del DIV naranja');
};

window.onscroll = function () {
	console.log(window.scrollY);
};

window.addEventListener('mousemove', function (ev) {
	console.log('Mouse X:', ev.clientX);
	console.log('Mouse Y:', ev.clientY);
});

inputName.onfocus = function () {
	this.style.boxShadow = '0 0 15px #000';
};

inputName.onblur = function () {
	if (this.value === '') {
		this.style.border = 'solid 5px red';
	} else {
		this.style.border = 'solid 5px green';
	}
};

enlace.addEventListener('click', function (e) {
	e.preventDefault();
});

form.addEventListener('submit', function (e) {
	if (inputName.value === '' || inputEmail.value === '') {
		e.preventDefault();
		window.alert('Llena todos los campos');
	} else {
		window.alert('Datos enviados');
	}
});
