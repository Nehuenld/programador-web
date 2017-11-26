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
          
  📶 Wi-Fi: Nombre -> "AreaTres Soho" - Contraseña: "somoscreadores"
              
*/

// 🐞 1. Obtener atributos con .getAttribute()
// 🐞 2. Setear atributos con .setAttribute()
// 🐞 3. Manipulando varios elementos con document.querySelectorAll()
// 🐞 3.1 Qué nos devuelve? Es un array realmente? Iterarlos con for

// 🐞 4. Agregar eventos a un elemento del DOM. Evento click
// 🐞 5. Parametro event del callback. Qué nos muestra?

/*
  🐞 6. Ejercicio: Beeper

    1. Creá un HTML que tenga un botón (podés usar un tag button) que diga "BEEP".

    2. Creá un archivo .js y vinculalo a tu html usando un tag script, ahí vas a escribir tu código JavaScript.

    3. Seleccioná el botón (document.querySelector...) y agregale un event listener para que:
    * cada vez que un usuario haga click en el botón
    * se ejecute una función (callback)
    * que seleccione el body
    * y le agregue un párrafo <p> al final que diga 'BEEP', pista: innerHTML

    4. Creá un archivo .css, vinculalo a tu html y creá una clase que se llame .color
    Dentro ponele un background color del color que quieras.

    5. Volvé a la función callback del evento y agregale una línea que haga un .classList.toggle("color") sobre el body, cambiándole el color con cada click.

    6. Ahora definí la función del callback afuera del evento, guardándola en una variable que se llame seEjecutaEnEvento.
    Remplazá la función callback por la variable seEjecutaEnEvento (que contiene la misma función) y asegurate de que el programa funcione igual.
 */

// 🐞 7. Evento keypress. Otras propiedades de event: key y keyCode
// 🐞 8. Hagamos una copia parecida a http://keycode.info️ (pst: atachar al body)

// 🐞 9. Agregar eventos a varios elementos

/* 
  🐞 10. Ejercicio: resaltador

  Vamos a hacer un pequeño código que te va a ayudar cuando estudies, simplificándote la tarea de resaltar los párrafos importantes.

  1. Creá un documento HTML con al menos cinco párrafos( podés usar lorem ipsum para generarlos rápido)
  2. Seleccionalos a todos y guardalos en una variable.
  3. Usando un for loop, recorrelos a todos y agregales un event listener que haga que cuando los clickeás, le ponga o le saque (toggle) una clase "resaltado", que le ponga un background color amarillo y el color de la letra a rojo. Deberías usar el keyword this dentro de la función callback para indicar que lo que tiene que cambiar es el párrafo que está siendo clickeado.

*/

// 🐞 9. Tipos de eventos: mouseover, mouseleave, mousemove
// 🐞 10. Propiedades de los eventos: clientX, clientY

// 🐞 1. Obtener atributos con .getAttribute()

var linkTrabajosPracticos = document.querySelector('.link-tps')

// Usamos .getAttribute() para obtener el valor de algun atributo que quisieramos buscar
// le pasamos como parámetro el atributo buscado
// si el atributo no esta definido devuelve null
// en caso que este definido y no tenga ningun valor devuelve un string vacio ""
var hrefLinkTp = linkTrabajosPracticos.getAttribute('href')

console.log(hrefLinkTp)

// 🐞 2. Setear atributos con .setAttribute()
// Le pasamos 2 parametros, siendo el primero  el atributo a setear,
// y el segundo el valor del mismo
linkTrabajosPracticos.setAttribute('target', '_blank')

// 🐞 3. Manipulando varios elementos con document.querySelectorAll()
var links = document.querySelectorAll('a.link-tps')

console.log(links)

// 🐞 3.1 Qué nos devuelve? Es un array realmente? Iterarlos con for

for (var i = 0; i < links.length; i++) {
  var link = links[i]
  link.setAttribute('target', '_blank')
}

// 🐞 4. Agregar eventos a un elemento del DOM. Evento click
var caja = document.querySelector('.box')

caja.addEventListener('click', function(informacionDelEvento) {
  console.log('hola')
  console.log(informacionDelEvento)
})

// 🐞 5. Parametro event del callback. Qué nos muestra?

/*
  🐞 6. Ejercicio: Beeper

    1. Creá un HTML que tenga un botón (podés usar un tag button) que diga "BEEP".

    2. Creá un archivo .js y vinculalo a tu html usando un tag script, ahí vas a escribir tu código JavaScript.

    3. Seleccioná el botón (document.querySelector...) y agregale un event listener para que:
    * cada vez que un usuario haga click en el botón
    * se ejecute una función (callback)
    * que seleccione el body
    * y le agregue un párrafo <p> al Body al final que diga 'BEEP', pista: innerHTML

    4. Creá un archivo .css, vinculalo a tu html y creá una clase que se llame .color
    Dentro ponele un background color del color que quieras.

    5. Volvé a la función callback del evento y agregale una línea que haga un .classList.toggle("color") sobre el body, cambiándole el color con cada click.

    6. Ahora definí la función del callback afuera del evento, guardándola en una variable que se llame seEjecutaEnEvento.
    Remplazá la función callback por la variable seEjecutaEnEvento (que contiene la misma función) y asegurate de que el programa funcione igual.
 */
