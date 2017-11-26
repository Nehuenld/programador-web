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

// 👩‍🚒 1. Qué es el DOM?
// 👩‍🚒 1.1 Usando console.dir() para mostrar la representación real del objeto
// 👩‍🚒 2. Manipulando los elementos con document.querySelector()
// 👩‍🚒 3. Manipulando el texto con .textContent y los estilos con .style
// 👩‍🚒 4. Separation of Concerns o Separación de Intereses.
// 👩‍🚒 4.1 Agregar una clase que aplique un estilo con classList
// 👩‍🚒 4.2 Remover una clase que aplique un estilo con classList
// 👩‍🚒 4.3 Togglear una clase que aplique un estilo con classList

/* 
  👩‍🚒 5. Ejercicio: Manipulando Estilos

    1. Crea un documento HTML con un div adentro
    2. Usando la propiedad style del elemento en javascript dale a ese div altura, ancho y un color de fondo
    3. Ahora crea la clase .square en tu stylesheet, y dale las mismas propiedades
    4. Ahora en vez de agregarsela con la propiedad style, hazlo con la propiedad classList.
    5. Que devuelve h1.classList?
    6. Desde tu consola quitale la clase .square al div
    7. Haz una funcion que cada un segundo (setInterval()) se fije si tiene la clase square, si la tiene que se la quite, y si no la tiene la agregue.
    8. Si lo hiciste con un if y un else no esta mal, pero prueba usando classList.toggle(). Mucho mas simple no?

*/

// 👩‍🚒 6. Crear elementos con document.createElement()
// 👩‍🚒 7. Appendear (agregar al final) a un elemento con document.appendChild()

// 👩‍🚒 8. Ejercicio: Iterar nuestro menu del día y mostrar por pantalla las comidas separadas por tipo

var menuDelDia = [
  {
    nombre: 'Porción de Rabas',
    tipo: 'Entrada',
    tiempo: 10
  },
  {
    nombre: 'Empanadas al Horno',
    tipo: 'Entrada',
    tiempo: 15
  },
  {
    nombre: 'Ñoquis',
    tipo: 'Plato Principal',
    tiempo: 20
  },
  {
    nombre: 'Ravioles',
    tipo: 'Plato Principal',
    tiempo: 25
  },
  {
    nombre: 'Lomo con Papas',
    tipo: 'Plato Principal',
    tiempo: 30
  }
]

// 👩‍🚒 9. Manipulando el contenido con .innerHTML

/* 
  👩‍🚒 10. Ejercicio: Manipulando Texto

    1. Abrí alguno de tus páginas HTML previas
    2. Mirá el textContent de un elemento en la consola.
    3. Dale al textContent de ese elemento un nuevo string.
    4. Elige otro elemento y agregale codigo html en su interior
    5. Mira el innerHTML de ese elemento
    6. Mira el textContent de ese mismo elemento

 */

// 👩‍🚒 11. Obtener atributos con .getAttribute()
// 👩‍🚒 12. Setear atributos con .setAttribute()
// 👩‍🚒 13. Manipulando varios elementos con document.querySelectorAll()
// 👩‍🚒 13.1 Qué nos devuelve? Es un array realmente? Iterarlos con for

// Patrón de Módulo
// La idea es poder definir variables y funciones privadas, que no puedan accedidas para el usuario
// Por ejemplo la lista de clientes, donde tenemos datos sensibles

// También podemos definir variables y funciones públicas, que si pueden  ser accedidas
// Por ejemplo la lista de peliculas, o el método para buscar un cliente

var videoClub = (function(){

  var peliculas = ['Batman',
                   'Scarface',
                   'The Matrix']

  var clientes = [
    {id: 01, nombre: 'Juan Pedro Gorriti'},
    {id: 02, nombre: 'Miguel Acevedo'}
  ]

  function buscarCliente(id){
    for (var i = 0; i < clientes.length; i++) {
      if (clientes[i].id === id){
        return clientes[i].nombre
      }
    }
  }

  function cargarPelicula(nombre) {
    if (typeof nombre === 'string'){
      peliculas.push(nombre)
    }
  }

  return {
    peliculas: peliculas,
    buscarCliente: buscarCliente,
    cargarPelicula: cargarPelicula
  }
})()

// console.log(videoClub.cargarPelicula('Esperando la Carroza'))
// console.log(videoClub.peliculas)

// 👩‍🚒 1. Qué es el DOM?
// Nos sirve para crear, modificar los elementos que definimos en nuestro HTML
// Es un objeto común y corriente de JavaScript
// Qué podemos hacer? 
// Podemos modificar, agregar, eliminar clases, podemos modificar estilos, podemos eliminar estilos
// DOM significa Document Object Model


// 👩‍🚒 1.1 Usando console.dir() para mostrar la representación real del objeto
// El DOM vive en el navegador en la variable document
// console.dir(document)


// 👩‍🚒 2. Manipulando los elementos con document.querySelector()

var sectionTitle = document.querySelector('.caja-noticia h2')


// 👩‍🚒 3. Manipulando el texto con .textContent y los estilos con .style

console.log(sectionTitle.textContent)

sectionTitle.textContent = 'Nueva serie de LOTR'

sectionTitle.style.color = 'limegreen'

sectionTitle.style.backgroundColor = '#212121'

// 👩‍🚒 4. Separation of Concerns o Separación de Intereses.
// La idea de Separations of Concerns es tener separados y delimitados las responsabilidades de cada lenguaje
// HTML: estructura, contenido y semántica
// CSS: todos los estilos
// JavaScript: lógica de nuestro sitio

// Entonces es un mala práctica modificar estilos desde JavaScript usando .style

// 👩‍🚒 4.1 Agregar una clase que aplique un estilo con classList
var subtitle = document.querySelector('.caja-noticia h3')

subtitle.classList.add('bg-green')

// 👩‍🚒 4.2 Remover una clase que aplique un estilo con classList
// Quiero eliminar la clase "sub-green" del h2 del section
  sectionTitle.classList.remove('sub-green')


// 👩‍🚒 4.3 Togglear una clase que aplique un estilo con classList
// Entonces .toggle va a agregar una clase si esta no existe, y en caso que exista eliminarla
  sectionTitle.classList.toggle('sub-green')



/* 
  👩‍🚒 5. Ejercicio: Manipulando Estilos

    1. Crea un documento HTML con un div adentro
    2. Usando la propiedad style del elemento en javascript dale a ese div altura, ancho y un color de fondo
    3. Ahora crea la clase .square en tu stylesheet, y dale las mismas propiedades
    4. Ahora en vez de agregarsela con la propiedad style, hazlo con la propiedad classList.
    5. Que devuelve h1.classList?
    6. Desde tu consola quitale la clase .square al div
    7. Haz una funcion que cada un segundo (setInterval()) se fije si tiene la clase square, si la tiene que se la quite, y si no la tiene la agregue.
    8. Si lo hiciste con un if y un else no esta mal, pero prueba usando classList.toggle(). Mucho mas simple no?

*/

var div = document.querySelector('div')

/* 
div.style.width = '200px'
div.style.height = '200px'
div.style.backgroundColor = 'green'
 */

div.classList.add('square')

var title = document.querySelector('h1')

console.log(title.classList)

setInterval(function(){
  div.classList.toggle('square')
}, 1000)

// 👩‍🚒 1. Qué es el DOM?
// Nos sirve para crear, modificar los elementos que definimos en nuestro HTML
// Es un objeto común y corriente de JavaScript
// Qué podemos hacer? 
// Podemos modificar, agregar, eliminar clases, podemos modificar estilos, podemos eliminar estilos
// DOM significa Document Object Model


// 👩‍🚒 1.1 Usando console.dir() para mostrar la representación real del objeto
// El DOM vive en el navegador en la variable document
// console.dir(document)


// 👩‍🚒 2. Manipulando los elementos con document.querySelector()

var sectionTitle = document.querySelector('.caja-noticia h2')


// 👩‍🚒 3. Manipulando el texto con .textContent y los estilos con .style

console.log(sectionTitle.textContent)

sectionTitle.textContent = 'Nueva serie de LOTR'

sectionTitle.style.color = 'limegreen'

sectionTitle.style.backgroundColor = '#212121'

// 👩‍🚒 4. Separation of Concerns o Separación de Intereses.
// La idea de Separations of Concerns es tener separados y delimitados las responsabilidades de cada lenguaje
// HTML: estructura, contenido y semántica
// CSS: todos los estilos
// JavaScript: lógica de nuestro sitio

// Entonces es un mala práctica modificar estilos desde JavaScript usando .style

// 👩‍🚒 4.1 Agregar una clase que aplique un estilo con classList
var subtitle = document.querySelector('.caja-noticia h3')

subtitle.classList.add('bg-green')

// 👩‍🚒 4.2 Remover una clase que aplique un estilo con classList
// Quiero eliminar la clase "sub-green" del h2 del section
sectionTitle.classList.remove('sub-green')


// 👩‍🚒 4.3 Togglear una clase que aplique un estilo con classList
// Entonces .toggle va a agregar una clase si esta no existe, y en caso que exista eliminarla
sectionTitle.classList.toggle('sub-green')