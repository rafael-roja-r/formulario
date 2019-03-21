

var tabla= [
{codigo:"0015",nombre: "Jose Rafael",nota: 18},
{codigo:"0011",nombre: "Jessica andrea",nota: 20},

];

window.onload = cargarEventos;

function cargarEventos() {
document.getElementById("mostra").addEventListener("click",mostrar,false);
document.getElementById("nuevoEstudiante").addEventListener("submit",nuevoEstudiante,false);
document.getElementById("promedio").addEventListener("click",promedio,false);
document.getElementById("nota-mayor").addEventListener("click",Nota_Mayor,false);
document.getElementById("nota-menor").addEventListener("click",Nota_Menor,false);
}

function mostrar(argument) {
	var cuerpoTabla =document.getElementById("estudiantetabla");
	var tablallena ="";

for (var i = 0; i < tabla.length; i++) {
	tablallena += "<tr><td>" +tabla[i].codigo + "</td><td>" +tabla[i].nombre + "</td><td>"+tabla[i].nota+"</td></tr>";
}

 
 cuerpoTabla.innerHTML = tablallena;
}

function nuevoEstudiante(event) {
event.preventDefault();

var Usuariocodigo= document.getElementById("codigo").value;
var Usuarionombre= document.getElementById("nombre").value;
var Usuarionota= document.getElementById("nota").value;


	var nuevo = {codigo: Usuariocodigo, nombre:Usuarionombre, nota:Usuarionota};
	tabla.push(nuevo);
}

function promedio(event) {
  var i;
  nota = 0;

 for (var i = 0; i < tabla.length;i++){
nota += parseFloat(tabla[i].nota);
 }
 document.getElementById('prom').innerHTML =  nota / tabla.length;
}

function Nota_Mayor(event){
 mayor = tabla[0].nota;
 for (var i = 0; i < tabla.length; i++) {
   if (tabla[i].nota >mayor) {
     mayor = tabla[i].nota;
   }
 }
 document.getElementById('prom').innerHTML = mayor;
}

function Nota_Menor(event){
 menor = tabla[0].nota;
 for (var i = 0; i < tabla.length; i++) {
   if (tabla[i].nota < menor) {
     menor = tabla[i].nota;
   }
 }
 document.getElementById('prom').innerHTML = menor;
}

