// 🦔 1. Qué es JSON? Para qué sirve?
// 🦔 2. Convertir nuestros valores de JavaScript a JSON con JSON.stringify()
// 🦔 3. Convertir nuestro JSON a valores de JavaScript con JSON.parse()
// 🦔 4. Qué es AJAX? Para qué nos sirve?

// 🦔 5. Hagamos una App que nos muestre el precio del bitcoin! https://www.bitstamp.net/api/
// 🦔 6. Yapa: lista de APIs públicas: https://github.com/toddmotto/public-apis

// 🦔 7. Ejercicio: Construí un documento HTML sólamente usando jQuery...

/* 
  1. Empezá con un HTML vacío, que tenga incluido a jQuery.
  2. Poné un segundo tag <script> en la página 
      para que contenga tu propio código JavaScript
  3. Usá jQuery para crea un nuevo tag <div> 
      con el id container y agregalo al body
  4. Usá jQuery para crear una nueva tag <img> 
      y ponela dentro de #container
  5. Dale a la imagen un atributo 
      "src" que direccione a una imagen graciosa
  6. Usá jQuery para hacer que la imagen sea muy chica
  7. Ahora hacela bien grande
  8. Ahora agregá algunas imágenes más y algo de texto,
     y utilizá los efectos de jQuery para que se muevan!
*/

// 🦔 8. Ejercicio: Theme Changer

/* 
  1. Crea una página que le pregunte al usuario de que color quisiera que sea la página.
  2. Seguí preguntando hasta que ingresen un color válido. (break)
  3. Usa jQuery para cambiar el css de varios elementos en la página para que usen por los menos tres tonalidades de ese color. e.g. Si eligen "green", mostrá un fondo verde claro, con texto verde y border de verde oscuro
  4. Usa jQuery para mostrar un mensaje que se aplicó el theme del color que eligió el usuario
  5. Tené por lo menos tres colores distintos que el usuario pueda elegi
*/

// 🦔 . Usando un carousel de alguna libreria como Slick

/*   3. Usá jQuery para crea un nuevo tag <div> 
      con el id container y agregalo al body
 */

var $body = $('body')

var $div = $('<div id="container"></div>')

$body.append($div)

/* 
  4. Usá jQuery para crear una nuevo tag <img> 
        y ponela dentro de #container
*/

var $img = $('<img />')

var $container = $('div#container')

$container.append($img)

/* 
  5. Dale a la imagen un atributo 
      "src" que direccione a una imagen graciosa
*/

var $imagen = $('div#container > img')

$imagen.attr(
  'src',
  'http://78.media.tumblr.com/6bfdf54bcef1abb814e3c8090d0df16d/tumblr_opykyrdJl91s10waio1_r1_1280.jpg'
)

/* 
  6. Usá jQuery para hacer que la imagen sea muy chica
 */

$imagen.css({
  width: '40%',
  opacity: 0.4,
})

// 7. Ahora hacela bien grande

$imagen.width('120%')

/* 
8. Ahora agregá un evento click,
   para que aparezca y desaparezca
*/

$imagen.click(function() {
  var $img = $(this)

  $img.fadeToggle()

  setTimeout(function() {
    $img.fadeToggle()
  }, 2000)
})

// 🦔 1. Qué es JSON? Para qué sirve?
/* 
  JSON es un acrónimo para JavaScript Object Notation
  es un formato para el intercambio de datos a través de internet
  De donde sacamos el JSON?
  Lo sacamos de una API, una API es un servidor que devuelve JSON en vez de HTML
  Al fin y al cabo es un link como los que insertamos en Chrome pero ahora vemos JSON
*/

// 🦔 3. Convertir nuestro JSON a valores de JavaScript con JSON.parse()

/* 
  Cuando obtenemos un JSON, este es un string
  debemos de convertirlo a un objeto nativo de JavaScript
*/

var datos = `{
  "high": "17107.03",
  "last": "16341.36",
  "timestamp": "1513205033",
  "bid": "16265.22",
  "vwap": "16461.12",
  "volume": "17547.02664877",
  "low": "15497.69",
  "ask": "16341.36",
  "open": 16650.01
}`

// 🦔 4. Qué es AJAX? Para qué nos sirve?
/* 
  AJAX es un acrónimo para Asynchronous JSON and XML
  Nos permite hacer llamadas a APIs sin bloquear JavaScript
  Entonces el usuario va a poder seguir interactuando con la página web
  mientras se van a buscar esos datos a la API
*/

$.ajax({
  url: 'https://www.bitstamp.net/api/ticker',
  success: function(datos) {
    console.log(datos)
  },
  error: function(error) {
    console.log(error)
  },
})

// 🦔 8. Ejercicio: Theme Changer

/* 
  1. Crea una página que le pregunte al usuario de que color quisiera que sea la página.
  2. Seguí preguntando hasta que ingresen un color válido. (break)
  3. Usa jQuery para cambiar el css de varios elementos en la página para que usen por los menos tres tonalidades de ese color. e.g. Si eligen "green", mostrá un fondo verde claro, con texto verde y border de verde oscuro
  4. Usa jQuery para mostrar un mensaje que se aplicó el theme del color que eligió el usuario
  5. Tené por lo menos tres colores distintos que el usuario pueda elegi
*/

var colors = [
  'silver',
  'gray',
  'white',
  'maroon',
  'red',
  'purple',
  'fuchsia',
  'green',
  'lime',
  'olive',
  'yellow',
  'navy',
  'blue',
  'teal',
  'aqua',
  'antiquewhite',
  'aquamarine',
  'azure',
  'beige',
  'bisque',
  'blanchedalmond',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflowerblue',
  'cornsilk',
  'crimson',
  'cyan',
  'aqua',
  'darkblue',
  'darkcyan',
  'darkgoldenrod',
  'darkgray',
  'darkgreen',
  'darkgrey',
  'darkkhaki',
  'darkmagenta',
  'darkolivegreen',
  'darkorange',
  'darkorchid',
  'darkred',
  'darksalmon',
  'darkseagreen',
  'darkslateblue',
  'darkslategray',
  'darkslategrey',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
  'dimgray',
  'dimgrey',
  'dodgerblue',
  'firebrick',
  'floralwhite',
  'forestgreen',
  'gainsboro',
  'ghostwhite',
  'gold',
  'goldenrod',
  'greenyellow',
  'grey',
  'honeydew',
  'hotpink',
  'indianred',
  'indigo',
  'ivory',
  'khaki',
  'lavender',
  'lavenderblush',
  'lawngreen',
  'lemonchiffon',
  'lightblue',
  'lightcoral',
  'lightcyan',
  'lightgoldenrodyellow',
  'lightgray',
  'lightgreen',
  'lightgrey',
  'lightpink',
  'lightsalmon',
  'lightseagreen',
  'lightskyblue',
  'lightslategray',
  'lightslategrey',
  'lightsteelblue',
  'lightyellow',
  'limegreen',
  'linen',
  'magenta',
  'fuchsia',
  'mediumaquamarine',
  'mediumblue',
  'mediumorchid',
  'mediumpurple',
  'mediumseagreen',
  'mediumslateblue',
  'mediumspringgreen',
  'mediumturquoise',
  'mediumvioletred',
  'midnightblue',
  'mintcream',
  'mistyrose',
  'moccasin',
  'navajowhite',
  'oldlace',
  'olivedrab',
  'orangered',
  'orchid',
  'palegoldenrod',
  'palegreen',
  'paleturquoise',
  'palevioletred',
  'papayawhip',
  'peachpuff',
  'peru',
  'pink',
  'plum',
  'powderblue',
  'rosybrown',
  'royalblue',
  'saddlebrown',
  'salmon',
  'sandybrown',
  'seagreen',
  'seashell',
  'sienna',
  'skyblue',
  'slateblue',
  'slategray',
  'slategrey',
  'snow',
  'springgreen',
  'steelblue',
  'tan',
  'thistle',
  'tomato',
  'turquoise',
  'violet',
  'wheat',
  'whitesmoke',
  'yellowgreen',
]

//   1. Crea una página que le pregunte al usuario de que color quisiera que sea la página.

var pickedColor = prompt(
  'Ingresa un color de CSS. Algunos son: indigo, cyan, wheat'
)

// 2. Seguí preguntando hasta que ingresen un color válido. (break)

while (colors.includes(pickedColor) === false) {
  pickedColor = prompt('Color inexistente!. Ingresa un color de CSS')
}

// 3. Usa jQuery para cambiar el css de varios elementos en la página para que usen por los menos tres tonalidades de ese color.
//  e.g. Si eligen "green", mostrá un fondo verde claro, con texto verde y border de verde oscuro
$('body').css('background-color', pickedColor)

// 4. Usa jQuery para mostrar un mensaje que se aplicó el theme del color que eligió el usuario

$('#exampleModal').modal('show')
