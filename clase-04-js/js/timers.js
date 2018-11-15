var stopBtn = document.querySelector('[name=stop]');
var resetBtn = document.querySelector('[name=reset]');
var startBtn = document.querySelector('[name=start]');

// Se ejecuta 1 sola vez
setTimeout(function () {
	console.log('Pasaron 2 segundos');
}, 2000);

var seg = 0;
// Se ejecuta cada segundo
var myInterval = setInterval(function () {
	intervalHandle();
}, 1000);

function intervalHandle () {
	seg++;
	console.log(seg);
	if (seg === 5) {
		console.log('Me detuve solito');
		clearInterval(myInterval);
	}
}

stopBtn.addEventListener('click', function () {
	clearInterval(myInterval);
	console.log('Se detuvo el Interval');
});

resetBtn.addEventListener('click', function () {
	clearInterval(myInterval);
	seg = 0;
	myInterval = setInterval(function () {
		intervalHandle();
	}, 1000);
	console.log('Reinicié el Interval');
});

startBtn.addEventListener('click', function () {
	myInterval = setInterval(function () {
		console.log(seg);
		seg++;
	}, 1000);
	console.log('Continuo el Interval');
});
