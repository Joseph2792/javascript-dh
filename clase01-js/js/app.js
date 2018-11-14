/* clase 1
var myString = 'Hello';
var myArray = ['Orange', 'Banana', 'Lemon'];
var myBoolean = true;

console.log('String:', myString);
console.log('Array:', myArray);
console.log('Boolean:', myBoolean);
console.log('=========');
console.log(myString);
console.log(myArray);
console.log(myBoolean);
console.log('=========');
console.log(myString, myArray, myBoolean);

var autoDeCarreras = {
	marca: 'Ferrari',
	kilometraje: 345.654,
	color: 'Rojo',
	arrancar: function () {
		return 'Brrunnnn Brunnm';
	},
	pilotos: {
		uno: {
			nombre: 'Juana',
			apellido: 'Heinz'
		},
		dos: {
			nombre: 'Pedro',
			apellido: 'Picapiedra'
		}
	},
	elegirPiloto: function (id) {
		if (id !== 'uno' && id !== 'dos') {
			return 'No existe ese piloto';
		}

		return this.pilotos[id].nombre;
	}
};

for (var key in autoDeCarreras) {
	if (typeof autoDeCarreras[key] !== 'function' && typeof autoDeCarreras[key] !== 'object') {
		console.log(key + ': ' + autoDeCarreras[key]);
	}
}

//------------------------------------------

var ironMan = {
	nombre: "Iron Man",
	equipo: "Avengers",
	poderes: ["volar", "lanzar misiles","disparar laser"],
	energia: 100,
	getPoder: function(poder){
		return this.poderes[poder];
	}
};

var hulk = {
	nombre: "Hulk",
	equipo: "Avengers",
	poderes: ["aplastar", "gritar","golpear"],
	energia: 100,
	getPoder: function(poder){
		return this.poderes[poder];
	}
}

var poderElegido = Math.floor( Math.random(0,2) );
console.log(poderElegido);
console.log(ironMan.getPoder(poderElegido));



//clase 2
window.onload = function(){
	var resultado = 0;
	for (let i = 0; resultado < 135 ; i++) {
		resultado = 3 * i;
		console.log( '3 x '+ i +' = '+ resultado);
		
	}
	var dato = Math.ceil(Math.random() * 6 );
	switch (dato%2) {
		case 0:
			console.log('el numero ' + dato + ' es par');	
			break;

		case 1:
			console.log('el numero ' + dato + ' es impar');
			break;

		default:
			break;
	}

	var contador = 1;
	do {
		var dato = Math.ceil(Math.random() * 37 );
		var contador = contador+ 1; 
	}while (dato != 19)
	console.log('salio el numero 19, se tomaron '+ contador + ' intentos para ello');

	var pares = [];
	for (let i = 0; i < 100; i++) {
		if (i % 2 == 0) {
			pares.push(i);
		}
	}
	console.log(pares);	
}
*/
var estudiante = {
	nombre:"jose",
	curso:"front end",
	dni: 45269458,
	email: "jose@gmail.com"
}

function fromObjectToArray (persona){
	var personaArray = [];
	for (const prop in persona) {
		personaArray.push( persona[prop] );//aca pongo los valores del objeto literal
	}
	return personaArray;
}

console.log(fromObjectToArray(estudiante));

function cambiarColorDeFondoDelBody(color){
	if (color =="green" || color == "#0f0" || color == "#00ff00") {
		var bool=false;
	}
	else {
		var bool=true;
	}
	return bool;
}
 console.log(cambiarColorDeFondoDelBody("blue"));
 
 /*
 hacer el ejercicio 3
 */