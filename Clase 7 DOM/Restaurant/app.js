var menuDelDia = [
comida = {
    nombre: "rabas",
    src: "https://ugc.kn3.net/i/origin/http://www.colisito.com.ar/wp-content/uploads/2009/06/rabas.jpg",
    tipo: "entrada",
    tiempo: "10",
},
{
    nombre: "empanadas",
    src: "http://globalcdn03.mundotkm.com/2017/04/Empanadas_Small.jpg",
    tipo: "entrada",
    tiempo: "15",
},
{
    nombre: "ñoquis",
    src: "https://media-cdn.tripadvisor.com/media/photo-s/05/f2/b9/6f/gusto-italiano.jpg",
    tipo: "principal",
    tiempo: "20",
},
{
    nombre: "lomo con papas",
    src: "https://previews.123rf.com/images/burin1144099/burin11440991404/burin1144099140400007/27490512-Filete-de-lomo-de-cerdo-en-un-plato-de-servir-con-papas-fritas-Foto-de-archivo.jpg",
    tipo: "principal",
    tiempo: "30",
}
]

var columnaEntradas = document.querySelector("#entradas")
var columnaPrincipales = document.querySelector("#principales")

function crearCaja(fuenteImagen, nombreComida) {
    var componente = `<div class="card" style= "width: 20rem;" >
        <img class="card-img-top" src="${fuenteImagen}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${nombreComida}</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
                </div>`
    return componente
}

for (var i = 0; i < menuDelDia.length; i++) {
    var comida = menuDelDia[i];

    if (comida.tipo === "entrada") {
        var cajaEntrada = crearCaja(comida.imagen, comida.nombre)
        columnaEntradas.innerHTML += cajaEntrada
    }else {
        var cajaPrincipal = crearCaja(comida.imagen, comida.nombre)
        columnaPrincipales.innerHTML += cajaPrincipal
    }
    
}