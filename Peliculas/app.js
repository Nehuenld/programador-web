var peliculas = ["The Avengers", "Inception", "The Matrix", "The lord of Rings"]

function hayStock(peliculaPedida) {
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
    if (hayStock(peliculaPedida)) {
        alert("La pelicula " + peliculaPedida + " se encuentra disponible ")
    }else {
        alert("La pelicula " + peliculaPedida + " se encuentra sin stock ")
    }
}
var primerPeliculaPedida = prompt("Busca tu pelicula");
var segundaPeliculaPedida = prompt("Elige otra pelicula");

atenderCliente(primerPeliculaPedida);
atenderCliente(segundaPeliculaPedida);
