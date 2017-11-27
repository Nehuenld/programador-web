var peliculas = [
    "Hangman",
    "Marvel’s The Punisher",
    "The Matrix",
    "Superman",
    "X-man",
    "Linterna Verde",
    "Batman"

]
var agregarPeliculas = prompt("busca tu pelicula favorita");
function estaEnLista(peliculaPedida) {
    var peliculaEncontrada = false;

    for (var i = 0; i < peliculas.length; i++) {
        var pelicula = peliculas[i];

        if (peliculaPedida === pelicula) {
            peliculaEncontrada = true;
        }
    }

    return peliculaEncontrada;
}
function atenderCliente(peliculaPedida) {
    if (estaEnLista(peliculaPedida)) {
        alert("La pelicula " + peliculaPedida + " se encuentra en la lista")
    } else {
        alert("La pelicula " + peliculaPedida + "no se encuentra en la lista y sera agregada")
        peliculas.push(primerPeliculaPedida)
        peliculas.push(segundaPeliculaPedida)
    }
}
var primerPeliculaPedida = prompt("Busca tu pelicula");
var segundaPeliculaPedida = prompt("Elige otra pelicula");

atenderCliente(primerPeliculaPedida);
atenderCliente(segundaPeliculaPedida);
console.log(peliculas)

var lista = document.querySelector("table")
var contenido =document.createTextNode(peliculas)
lista.appendChild(contenido)

var quitarPeli = document.getElementById(peliculas[2])
quitarPeli.removeChild(peliculas[2])
