
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

function comprobacion (x){
	if (pulsado!=GameComputer[indice]){
		error=1;
		console.log("error en condicional boton"+error);
	}else {
		indice++;
		console.log("sin error"+indice);}
}

var indice=0;
var GameComputer=[];
GameComputer[0]=0;

document.getElementById('boton0').onclick=function(){
	pulsado=0;
	var objBoton = document.getElementById('boton0').src="img/boton0.png";
	console.log('he pasado el encendido del boton0 por presion');
	setTimeout(function(){
			ligthsOff();
		},500);
	var objAudio = document.getElementById('audioBoton0');
	objAudio.play();
	comprobacion (indice);
	console.log("quiero sabe el indice despues de la funcion "+indice)	
}
