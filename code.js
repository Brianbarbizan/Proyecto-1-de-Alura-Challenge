/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/









function encriptar(elemento) {
	var palabra = document.querySelector("input")[0].value;
	let palabra_codificada = btoa(palabra);
	document.getElementById("Mensaje encriptada").innerHtml = palabra_codificada;

}

function desencriptar(elemento) {
	var palabra = document.querySelector("input")[0].value;
	let palabra_descodificada = atob(palabra);
	document.getElementById("Mensaje encriptada").innerHtml = palabra_descodificada;
}

 var palabra = elemento;
 var palabra_codificada = palabra + elemento;
 var palabra_descodificada = palabra_codificada - palabra_codificada

 encriptar();
 desencriptar();
