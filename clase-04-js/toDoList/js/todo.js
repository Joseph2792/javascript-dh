do {
	var cantTareas = Number(window.prompt('Ingresá la cantidad de tareas'));
	if (isNaN(cantTareas) || cantTareas < 3 || cantTareas === '') {
		window.alert('Ingresa solo números y mayores a 3');
	}
} while (isNaN(cantTareas) || cantTareas < 3 || cantTareas === '');

var arrayDeTareas = [];

for (var i = 1; i <= cantTareas; i++) {
	do {
		var txtTarea = window.prompt('Ingresá texto tarea ' + i);
		if (txtTarea === '') {
			window.alert('Ingresa un texto');
		} else {
			arrayDeTareas.push(txtTarea);
		}
	} while (txtTarea === '');
}

var ul = document.createElement('ul');
var elBody = document.querySelector('body');

for (var n = 0; n < arrayDeTareas.length; n++) {
	var li = document.createElement('li');
	li.innerText = arrayDeTareas[n];
	ul.append(li);
}

elBody.append(ul);
