var noticiaNueva = document.getElementById("noticia");

var titulo = document.createElement("h1");
var nombreTitulo = document.createTextNode("Aras San Juan");

var parrafo = document.createElement("p");
var contenido = document.createTextNode("El vocero de la Armada, Enrique Balbi, informó esta tarde que el operativo multinacional armado para encontrar el submarino ARAS San Juan ...");
 
var imagen = document.createElement("img");
imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6OYeYJtX20b2N40VpcsEi0RdhI_YSdKOtwfAVWROCU4jtudHk";

titulo.appendChild(nombreTitulo);
parrafo.appendChild(contenido);
noticiaNueva.appendChild(titulo);
noticiaNueva.appendChild(parrafo);
noticiaNueva.appendChild(imagen);

noticiaNueva.parentNode.removeChild(noticia);


