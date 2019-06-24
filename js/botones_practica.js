
function ligthsOff (){
	document.getElementById('boton0').src="img/boton0off.png";
	console.log('he pasado el boton0off');
	document.getElementById('boton1').src="img/boton1off.png";
	console.log('he pasado el boton1off');
	document.getElementById('boton2').src="img/boton2off.png";
	console.log('he pasado el boton2off');
	document.getElementById('boton3').src="img/boton3off.png";
	console.log('he pasado el boton3off');
} 

function zero (){
//	var objAudio = document.getElementById('audioBoton0');
//	objAudio.play();
	var objBoton = document.getElementById('boton0').src="img/boton0.png";
}

function uno (){
//	var objAudio = document.getElementById('audioBoton1');
//	objAudio.play();
	var objBoton = document.getElementById('boton3').src="img/boton1.png";

}

function dos (){
//	var objAudio = document.getElementById('audioBoton2');
//	objAudio.play();
	var objBoton = document.getElementById('boton3').src="img/boton2.png";
}

function tres (){
//	var objAudio = document.getElementById('audioBoton3');
//	objAudio.play();
	var objBoton = document.getElementById('boton3').src="img/boton3.png";
}


var GameComputer=[];
var i=0;

GameComputer.push(0);
GameComputer.push(1);
GameComputer.push(2);
GameComputer.push(3);
GameComputer.push(3);
GameComputer.push(1);
GameComputer.push(1);
GameComputer.push(2);
GameComputer.push(2);

console.log(GameComputer.length)
console.log(i)

for (i<GameComputer.length) {
					
console.log('entro en el bucle');
			ligthsOff();
		setTimeout(function (){
		if (GameComputer[i]==0) zero ();
		if (GameComputer[i]==1) uno ();
		if (GameComputer[i]==2) dos ();
		if (GameComputer[i]==3) tres ();
		console.log(i+' vuelta');
		console.log('valor variable despues de la primera vuelta'+i);
		},1000);
	} 

console.log ('fuera del bucle')	
