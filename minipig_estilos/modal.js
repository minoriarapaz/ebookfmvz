// JavaScript Document


var i=1


/*window.onload = function() {
	noScroll();
}*/

/*
var S=1;
*/
function noScroll() {
	document.body.style.overflow = "hidden";
	console.log("scroll NO funciona [f. noScroll]");
	/*if(S==1) {
		document.body.style.overflow = "hidden"; S=2; console.log("S cambió a 2, scroll NO funciona");
	} else {
		document.body.style.overflow = "auto"; S=1; console.log("S es 1 y scroll funciona");
	}*/
}

function activarScroll() {
	document.body.style.overflow = "auto";
	console.log("scroll funcionando");
}

function cerrarObj() {
            document.getElementById("modalObjetivo").style.display="none";
        }

function modalObj() {
			document.getElementById("textoObjetivo").style.scale=".1";
			document.getElementById("modalObjetivo").style.opacity="0";
			setTimeout(cerrarObj, 400);
			/*noScroll();*/
			activarScroll();
		}



var L=1
function cerrarBiblio() {
	document.getElementById("modalBiblio").style.display=null;
}
function verBiblio() {
			if (L==1) {
				document.getElementById("modalBiblio").style.display="block";
				document.getElementById("modalBiblio").style.opacity="1";
				document.body.style.overflow = "hidden";
				noScroll();
				L=2;
			} else {
				setTimeout(cerrarBiblio, 400);
				document.getElementById("modalBiblio").style.opacity="0";
				cerrarIndice(); /*Cierra menu desplegable*/
				document.body.style.overflow = "auto";
				activarScroll();
				L=1;
			}
}

		















