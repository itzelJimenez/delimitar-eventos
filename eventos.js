var idRingo = document.getElementById("idRingo")
var botonRingo = document.getElementById("botonRingo")
var idTablaBeatles = document.getElementById("tablaBeatles")

document.addEventListener("click",bienvenidaATabla)
idRingo.addEventListener("click",felicitarRingo)
botonRingo.addEventListener("click",saludarRingo)

function bienvenidaATabla(){
  alert("bienvienida a tabla");
}

function felicitarRingo(){
	event.stopPropagation()
  alert("Felicidades Ringo"); 
}

function saludarRingo(){
  event.stopPropagation();
  alert("Hola soy ringo y mi cumpleaños es el 10/11/53");
}
