/* 
    Tercer ejercicio Lista de Super 🍕
      1. Crea un nuevo arreglo y guardalo en la variable
       listaDeSuper
      2. Usá la notacion con corchetes y agregá dos
       productos que tenés que comprar.
        Ej listaDeSuper[0] = "sal"
      3. Agrega dos productos más a la lista al
       final del array
      3. Accedé al primer elemento de tu lista
       usando la notación de corchetes.
      4. Elimina el primer y último elemento de la lista
      5. Accedé a ese último ingrediente usando la variable
       ultimoElemento
*/
var listaDeSuper = [
    
]
var frutas = 0
var carnes = 1
listaDeSuper[0] = "frutas"
listaDeSuper[1] = "carnes"

listaDeSuper.push("verduras" , "sal")


console.log(listaDeSuper[0])

listaDeSuper.pop()
listaDeSuper.shift()


console.log(listaDeSuper)

var ultimaPosicion = listaDeSuper.length -1
console.log(listaDeSuper[ultimaPosicion])