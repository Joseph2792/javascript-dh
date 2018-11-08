/*
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
*/
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