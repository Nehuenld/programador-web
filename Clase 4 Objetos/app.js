var cantidadAlumnos = 18
var direccion = "Honduras 4762"
var id = 2610
var carrera = "Front-end Developer"
var curso = "Programador Web"
var FechaInicio = "25/10/17"

var camada = {
    cantidadAlumnos: 18,
    direccion: "Honduras 4762",
    id: 2610,
    carrera: "Front-end Developer",
    curso: "Programador Web",
    FechaInicio: "25/10/17",
    aumentCantAlumnos: function () {
        this.cantidadAlumnos++
        
    }
}

console.log(camada["id"])
console.log(camada["fechaInicio"])

camada["aumentarCantAlumnos"]


console.log(camada.aumentCantAlumnos)
camada.aumentCantAlumnos()

function auto(marcaAuto, modeloAuto, colorAuto) {
    this.marca = marcaAuto
    this.modelo = modeloAuto
    this.color = colorAuto
}

var volkswagen = new auto('Volkswagen', 'X3', 'Rojo')
var mercedes = new auto('Audi', 'A3', 'Azul')

console.log(volkswagen)
console.log(mercedes)