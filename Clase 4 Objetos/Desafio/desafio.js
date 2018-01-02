// El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director
function peliculas(titulo, descripcion, año, duracion, actores, director,ID) {
    this.titulo = titulo
    this.descripcion = descripcion
    this.año = año
    this.duracion = duracion
    this.director = director

}
console.log(peliculas)

// Debera tener metodos para editar todas sus propiedades, menos su ID, y para los actores tendra que ir agregando uno a uno

var avengers = new peliculas('The Avengers', 'The Avengers es una película estadounidense de superhéroes de 2012 escrita y dirigida por Joss Whedon. Fue producida por Marvel Studios y distribuida por Walt Disney Pictures, y basada en el cómic homónimo de Marvel Comics.', '2012', "2h 23m", "Joss Whedon")
var superman = new peliculas('Superman', ' Superman es una película estadounidense del año 1978 basada en el personaje de cómics Superman, dirigida por Richard Donner y protagonizada por Christopher Reeve, Marlon Brando, Gene Hackman y Margot Kidder, entre otros.', '1978 ', "3h 8m", "Richard Donner")

console.log(avengers)
console.log(superman)

var actores = "actores"
peliculas[actores] = ""
console.log(peliculas.actores)

avengers[actores] = [
    "Scarlett Johansson",
    "Chris Evans",
    "Robert Downey Jr.",
    "MÁS"
]
superman[actores] = [
    "Christopher Reeve",
    "Margot Kidder",
    "Marlon Brando.",
    "MÁS"
]