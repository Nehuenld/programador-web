/* 
  👨🏼‍🏫 Profesor: Leonardo Galante -> https://leonardogalante.com

  📕 Carrera Front-end: Nivel 2 Programador Web

  🏎 Inicio: Miércoles 25 de Octubre 

  🏁 Fin: Miércoles 3 de Enero

  📅 Días y Horarios: Lúnes y Miércoles de 18:30hs a 22:00hs 

  🚻 Baños al fondo, al lado de las escaleras

  ☕️ Recreo: 15 minutos a las 20:15hs y hay café, agua caliente, galletitas.

  🏢 Lugar: Urban Station - Didi Soho - Sala Auditorio - Honduras 4762 (40min, salir máx 17:30hs)

  ✅ ToDo: 
      * Presentarnos
      * Tomar asistencia
      * Validación Slack (soporte@coderhouse.com)
      * Completar encuestas a las 21:45hs (10min antes)
      * Requisitos para el certificado: 80% de asistencia
      * Plataforma https://plataforma.coderhouse.com
      * Sala de Chat (Slack), canal #curso2610 https://developershouse.slack.com
      * Devolución de TPs por GitHub y Plataforma
      * Organizar bien la sala, proyector y sillas
      * Podemos pedir zapatillas/snacks en recepción si hace falta

  🛠 Herramientas:
      * Visual Studio Code
      * Prettier (Plugin)

  👌 Slides Introducción a JavaScript: https://intro-js.now.sh

  📄 Documentación de JavaScript: https://developer.mozilla.org/es/docs/Web/JavaScript
          
  📶 Wi-Fi: Nombre -> "DIDIHoteles" - Contraseña: "holadidi"

                  
*/

/* 🚃 Arrays 🚃 */

// 🧝‍ 1. Qué es un arreglo o array ?
// 🧝‍ 2. Como acceder a cada elemento?
// 🧝‍ 3. Como saber la cantidad de elementos?
// 🧝‍ 4. Cuál es la posición del último elemento?

/* 
  Primer ejercicio de meses del año 📅 
    1. Dado el siguiente array de meses del año:
      var meses = [
          'Enero', // índice `0`
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'  // índice 11, equivalente a `meses.length - 1`
      ];

    2. Escribir un programa que:
      2.1 Declare y asigne una variable que tenga como valor el número del mes de tu cumpleaños.
      2.2 Muestre por terminal el nombre del mes de tu cumpleaños.

  Segundo ejercicio de planetas 🌎
    1.Dado los siguientes arrays:
      var meses = [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
      ];

      var planetas = [
          'Mercurio',
          'Venus',
          'Tierra',
          'Marte',
          'Saturno',
          'Jupiter',
          'Urano',
          'Neptuno',
          'Plutón'
      ];

      2. Escribir un programa que:
        2.1 Muestre por la consola la cantidad de elementos que tiene cada uno.
        2.2 Muestre por la consola el último elemento de cada array (usando la propiedad length que tienen los arrays).
        2.3 Muestre por la consola el cuarto planeta (Marte).
 */

// 🧝‍ 6. Metodos mutables como .push() y .pop() (insertar y eliminar al final, recordar push retorna nueva longitud y pop retorna elemento)
// 🧝‍ 7. Metodos mutables como .unshift() y .shift() (insertar y eliminar al principio, recordar unshift retorna nueva longitud y shift() retorna elemento)

/* 
    Tercer ejercicio Lista de Super 🍕
      1. Crea un nuevo arreglo y guardalo en la variable listaDeSuper
      2. Usá la notacion con corchetes y agregá dos productos que tenés que comprar. Ej listaDeSuper[0] = "sal"
      3. Agrega dos productos más a la lista al final del array
      3. Accedé al primer elemento de tu lista usando la notación de corchetes.
      4. Elimina el primer y último elemento de la lista
      5. Accedé a ese último ingrediente usando la variable ultimoElemento
*/

// 🧝‍ 8. Método .indexOf() para saber en que posición se encuentra en el array
// 🧝‍ 9. Método .includes() para saber si un elemento se encuentra o no en el array
// 🧝‍ 10. Método .sort() para ordenar los elementos en el array
// 🧝‍ 11. Método .reverse() para invertir el orden de los elementos del array
// 🧝‍ 12. Método .concat() para concatenar un array a otro array que querramos

// 🧝‍ 8. Los arrays son pasados por valor o por referencia?
// 🧝‍ 9. Método inmutable slice() para generar una copia de nuestro array
// 🧝‍ 10. Usar slice() para dividir nuestro arreglo desde donde hasta donde querramos (exclusive)
// 🧝‍ 11. Método mutable splice() para eliminar una cantidad de elementos desde donde hasta donde querramos (inclusive)
// 🧝‍ 12. Método split() de los Strings para separar en partes nuestro string, guardando cada parte cada elemento de nuestro array
// 🧝‍ 13. Método mutable join() unirá los elementos de nuestro array con el string que querramos
// 🧝‍ 14. Como introducción veamos For loop (si llegamos con el tiempo)

/* 
    Cuarto ejercicio sumArray➕
      1. Crea una función sumArray que acepte un arreglo de numeros y devuelva la suma de todos los numeros del arreglo.
         Usa el codigo de abajo para testear tu función:
            sumArray([1,2,3]) // 6
            sumArray([10, 3, 10, 4]) // 27
            sumArray([-5,100]) // 95
*/

// 🧝‍ 1. Qué es un arreglo o array ?
// Una colección ordenada de elementos tantos homogéneos como heteregéneos
// Nos sirven para hacer listas de cosas

var notas = [4, 4, 6, 7, 2, 7, 8, 10, 2, 4, 7, 7, 9, 6]

// 🧝‍ 2. Como acceder a cada elemento?
// Lectura
console.log(notas[0])

var cuartaNota = notas[3]

console.log(notas[6])

// Escritura
notas[7] = 9

console.log(notas[7])

console.log(notas)

// 🧝‍ 3. Como saber la cantidad de elementos?
// Con la propiedad .length obtenemos la longitud de nuestro array
console.log(notas.length)

// 🧝‍ 4. Cuál es la posición del último elemento?
var ultimaPosicion = notas.length - 1

console.log(ultimaPosicion)

console.log(notas[ultimaPosicion])

var meses = [
  'Enero', // índice `0`
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre' // índice 11, equivalente a `meses.length - 1`
]

var planetas = [
  'Mercurio',
  'Venus',
  'Tierra',
  'Marte',
  'Saturno',
  'Jupiter',
  'Urano',
  'Neptuno',
  'Plutón'
]

console.log(meses.length)

console.log(planetas.length)

var ultimaPosicionMeses = meses.length - 1
var ultimaPosicionPlanetas = planetas.length - 1

console.log(meses[ultimaPosicionMeses])
console.log(planetas[ultimaPosicionPlanetas])

console.log(planetas[3])

// 🧝‍ 6. Metodos mutables como .push() y .pop()
//  (insertar y eliminar al final, recordar push retorna nueva longitud y pop retorna elemento)

// Método .push()
// Nos appendea o agrega al final de nuestro array un elemento que le pasamos como parámetro

var listaAlumnos = [
  'Anahi Sol Mansilla',
  'Edgar Ramirez',
  'Abel Gustavo',
  'Yamil Amando Selene',
  'Fernando Castoldi'
]

listaAlumnos.push('Mercedes Baylac')

console.log(listaAlumnos.length)

var nuevaLongitud = listaAlumnos.push('Gabriel De Simone')

console.log(nuevaLongitud)

// Método .pop()
// Elimina el último elemento del array y a su vez lo devuelve

console.log(listaAlumnos.pop())

console.log(listaAlumnos)

// 🧝‍ 7. Metodos mutables como .unshift() y .shift()
// (insertar y eliminar al principio, recordar unshift retorna nueva longitud y shift() retorna elemento)

// Método .unshift()
// A contrario de .push() ahora .unshift() agrega un elemento que le pasemos como parámetro
// en la primer posición del array, también nos devuelve la nueva longitud del array
console.log(listaAlumnos.unshift('Nehuen Diaz'))

console.log(listaAlumnos)

// Método .shift()
// Al contrario de .pop() ahora .shift() remueve el primer elemento del array y nos lo devuelve
console.log(listaAlumnos.shift())

// Mutabilidad
// Los métodos vistos hasta ahora son mutables porque modifican nuestra variable o array original

/* 
    Tercer ejercicio Lista de Super 🍕
      1. Crea un nuevo arreglo y guardalo en la variable listaDeSuper
      2. Usá la notacion con corchetes y agregá dos productos que tenés que comprar. Ej listaDeSuper[0] = "sal"
      3. Agrega dos productos más a la lista al final del array
      4. Accedé al primer elemento de tu lista usando la notación de corchetes.
      5. Elimina el primer y último elemento de la lista
      6. Accedé a ese último ingrediente usando la variable ultimoElemento
*/
//       1. Crea un nuevo arreglo y guardalo en la variable listaDeSuper

var listaDeSuper = []

//       2. Usá la notacion con corchetes y agregá dos productos que tenés que comprar. Ej listaDeSuper[0] = "sal"

listaDeSuper[0] = 'Harina'
listaDeSuper[1] = 'Huevos'

//       3. Agrega dos productos más a la lista al final del array

listaDeSuper.push('Aceite')
listaDeSuper.push('Manteca')

//       4. Accedé al primer elemento de tu lista usando la notación de corchetes.

console.log(listaDeSuper[0])

//       5. Elimina el primer y último elemento de la lista
console.log(listaDeSuper)

listaDeSuper.shift()

console.log(listaDeSuper)

listaDeSuper.pop()

console.log(listaDeSuper)

//       6. Accedé a ese último ingrediente usando la variable ultimoElemento

var ultimaPosicion = listaDeSuper.length - 1

console.log(listaDeSuper[ultimaPosicion])

// 🧝‍ 8. Método .indexOf() para saber en que posición se encuentra en el array

// .indexOf() nos devuelve la posición de la primer coincidencia que matchee lo que busquemos
// nos devuelve -1 si el elemento no se encuentra en el array

console.log(listaAlumnos)

var posicionGustavo = listaAlumnos.indexOf('Gabriel De Simone')

console.log(posicionGustavo)

// 🧝‍ 9. Método .includes() para saber si un elemento se encuentra o no en el array
console.log(listaAlumnos.includes('Abel Gustavo'))

/* var alumnoIngresado = prompt('Ingresa tu nombre y apellido')

var estaElAlumno = listaAlumnos.includes(alumnoIngresado)

if (estaElAlumno) {
  alert('Estas en el sistema')
} else {
  alert('No estas en el sistema')
} */

// 🧝‍ 10. Método .sort() para ordenar los elementos en el array

var numerosAleatorios = [3, 9, 7, 4, 2, 9, 1]

console.log(numerosAleatorios)

// El método .sort() ordena de menor a mayor
numerosAleatorios.sort()

console.log(numerosAleatorios)

// 🧝‍ 11. Método .reverse() para invertir el orden de los elementos del array

// El primer elemento pasa a ser el último y viceversa
console.log(listaAlumnos)

listaAlumnos.reverse()

console.log(listaAlumnos)

// 🧝‍ 12. Método .concat() para concatenar un array a otro array que querramos

// El método .concat() nos permite concanetar un array con uno o más arrays
// Pasandoselos como parámetros separados por coma
var notasPrimerGrado = [7, 7, 6, 8, 9]
var notasSegundoGrado = [9, 7, 6, 5, 9, 4]

var notasTotales = notasPrimerGrado.concat(notasSegundoGrado)

console.log(notasTotales)

// 🧝‍ 9. Método inmutable slice() para generar una copia de nuestro array
// El método .slice() nos devuelve una copia de nuestro array
var copiaPrimerGrado = notasPrimerGrado.slice()

copiaPrimerGrado.push(4)

console.log(copiaPrimerGrado)

console.log(notasPrimerGrado)

// 🧝‍ 10. Usar slice() para dividir nuestro arreglo desde donde hasta donde querramos (exclusive)

// Generamos un subconjunto de nuestro array
// Donde el primer parámetro es de donde queremos cortarlo de manera inclusiva
// Y erl segundo parámetro (opcional) es hasta donde querramos cortalo de manera exclusiva
console.log(listaAlumnos)

var lAlumnos = listaAlumnos.slice(3, 5)

console.log(lAlumnos)
