/*Crear una funcion para cargar un autos a un camion

El auto tendra que tener al menos patente y peso
El camnion tiene un peso maximo de carga
El objeto camnion Debera validar con cada auto ingresado si esta por debajo
 del peso o si ya no lo puede agregar
Ademas de almacenar los autos debe tener la posibilidad de validar 
que no tenga patentes repetidas y que me devuelva todas las patentes que tiene a bordo.*/
var auto = [patente, peso, pesoMaximoCarga]
function camionMosquito(patente, pesoMaximoCarga, marca, modelo, cantidadAutos) {
    this.patente = patente
    this.pesoMaximoCarga = pesoMaximoCarga
    this.marca = marca
    this.modelo = modelo
    this.cantidadAutos = cantidadAutos

}

var Toyota = new camionMosquito('NLD146', '200000', 'Iveco', "ivecam", "16")
var toyota = prompt("ingrese cantidad de autos que quiere transportar")


console.log(Toyota)