function auto(xMarca, xColor) {
    this.marca = xMarca;
    this.color = xColor;
    this.arrancar = function () {
        console.log("Auto en marcha");
    }
}
var autoRojo = new auto("peugeot", "rojo")

autoRojo.arrancar();
console.log(autoRojo)

var nave = {
    tipoDeNave : "espacial",
    pais : "argentina",
    cantidadDeTripulantes : 3,
    tripulantes : "",
    estado: "usada",
    despegar: function () {
        console.log("Despegue en 3, 2, 1 ... OH NO, ESPEREN, ALGO SE ROMPIÓ!")
        alert("BOOOOM!!")
        
    }
}
console.log(nave.pais)
console.log(nave["tipoDeNave"])
var test="estado"
console.log(nave[test])


nave.despegar()

console.log(nave.despegar)
//el creador de notebooks tiene que tener:
// marca, modelo, resolucion, procesador, memoria RAM, disco rigido

function notebooks(marca, modelo, resolucion, procesador, memoriaRam, discoRigido) {
    this.marca = marca
    this.modelo = modelo
    this.resolucion = resolucion
    this.procesador = procesador
    this.memoriaRam = memoriaRam
    this.discoRigido = discoRigido
}

var macbook = new notebooks('Macbook', 'Pro2017', '1920x1080', "i7", "16gb", "560")
var bangho = new notebooks('Bangho', 'G5 I7 F', '1920x1080', "i7", "8GB", "HDD")

console.log(macbook)
console.log(bangho)

// 🔥 10. Recorrer un objeto con for-in

var departamento = {
    cantidadHabitaciones: 2,
    dueñoDirecto: true,
    direccion: 'Avenida Córdoba y Acevedo'
}

// Nos permite recorrer y obtener todos los valores de un objeto
for (var clave in departamento) {
    console.log(clave)
    console.log(clave, ' es igual a ', departamento[clave])
}

// 🔥 12. Ejercicio miAuto

/* 
  1. Creá una variable llamada miAuto y asiganle un objeto vacio.
  2. Asignale a miAuto una propiedad marca, que debería contener un string
  3. Agregá una propiedad año que tenga un entero
  4. Agregá una propiedad nuevo que contenga un booleano
  5. Creá una variable llamada property_key y asignale el string "modelo"
  6. Usá la variable property_key , no el string "modelo", para agregar la propiedad modelo
   al objeto miAuto.
  7. Creá una variable llamada another_property_key y dale el valor "precio".
  8. Usá la variable another_property_key, no la string "precio",
   para cuantificar el valor de tu auto.
  9. Qué devuelve miAuto[property_key] ?
  10. Qué devuelve miAuto["modelo"] ?
  11. Asigna la string "color" a la variable next_property
  12. Usa la variable next_property para añadir el color a tu auto
  13. Qué devuelve miAuto[next_property] ?
  14. Qué devuelve miAuto["color"]?
  15. Usá for in para iterar sobre el objeto miAuto y muestra en la consola el key
   y el value de cada propiedad. 
*/

var miAuto = {
    marca: "lamborghini",
    año: "2017",
    nuevo: "true",

}
console.log(miAuto.modelo)

var property_key = "modelo"
miAuto[property_key] = "diablo"
console.log(miAuto.modelo)

var another_property_key = "precio"
miAuto[another_property_key] = 10000000000
console.log(miAuto.precio)

var next_property = "color"
miAuto[next_property] = "rojo" 
console.log(miAuto.color)

for (var i in miAuto) {
    console.log(i, ' es igual a ', miAuto[i])
}

/*El objeto pelicula Debera tener ID, titulo,
 descripcion, año, duracion, actores, director
Debera tener metodos para editar todas sus propiedades,
 menos su ID, y para los actores tendra que ir agregando uno a uno*/
var pelicula = {
    id: "peli",
    titulo: "transformers",
    descripcion: "autos robot luchan por salvar el planeta tierra",
    año: "2017",
    duracion: "2h 34m",
    actores: "Ken Nolan, Akiva Goldsman, Art Marcum, Matt Holloway",
    director: "Michael Bay"

}
pelicula.titulo = ""
pelicula.actores
pelicula.descripcion
pelicula.año
pelicula.duracion
pelicula.director
