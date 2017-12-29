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

// 🐳 1. Qué es jQuery ? Como agregarlo?
// 🐳 2. Selectores de jQuery vs document.querySelector
// 🐳 3. Manipular estilos con .css() vs element.style. También usarlo como getter
// 🐳 4. Manipular texto con .text() vs element.textContent. También usarlo como getter
// 🐳 5. Manipular hmtl con .html() vs element.innerHTML. También usarlo como getter
// 🐳 6. Prependear con .prepend() vs element.prependChild()
// 🐳 7. Appendear  con .append() vs element.appendChild()
// 🐳 8. Setear atributos con .attr() vs element.setAttribute()
// 🐳 9. Obtener atributos como .attr() vs element.getAttribute()

// 🐳 10. Obtener valores de los inputs con .val() vs element.value
// 🐳 11. Agregar clases con .addClass() vs element.classList.add()
// 🐳 12. Remover clases con .removeClass() vs element.classList.remove()
// 🐳 13. Togglear clases con .toggleClass() vs element.classList.toggle()
// 🐳 14. Agregar eventos con .on() vs element.addEventListener()
// 🐳 15. Efectos con jQuery como hide(), show(), toggle(), fadeIn(), fadeOut() y más!
// 🐳 16. Crear elementos usando jQuery

// 🐳 17. Usando un carousel de alguna libreria como Slick
// 🐳 18. Ejercicio: Aplicando jQuery
// 🐳 19. Ejercicio: Construí un documento HTML sólamente usando jQuery...
// 🐳 20. Ejercicio: Theme Changer

// 🐳 2. Selectores de jQuery vs document.querySelector

var titulo = document.querySelector('h2.titulo')
console.log(titulo)

// En el símbolo $ tenemos el metodo jQuery,
// y le pasamos como parametro un selector
var $titulo = $('h2.titulo')
console.log($titulo)

// 🐳 3. Manipular estilos con .css() vs element.style. También usarlo como getter
titulo.style.backgroundColor = '#212121'
titulo.style.color = 'white'

// .css() le pasamos 2 parametros, el 1ro es la propiedad y el 2do es el valor de la misma
$titulo.css('background-color', 'goldenrod')

// 🐳 4. Manipular texto con .text() vs element.textContent. También usarlo como getter
titulo.textContent = 'MacBook Air'

$titulo.text('MacBook')
// Tambien podemos usarlo para obtener el valor del texto que tiene el elemento
// sin pasarle ningun parametro
console.log($titulo.text())

// 🐳 5. Manipular hmtl con .html() vs element.innerHTML. También usarlo como getter
var section = document.querySelector('.noticia')
var $section = $('.noticia')

section.innerHTML = '<article>Hoy salio en latinoamerica...</article>'

$section.html('<article>La nueva pelicula de Avengers...</article>')

// 🐳 6. Prependear con .prepend() vs element.prepend()
// 🐳 7. Appendear  con .append() vs element.appendChild()
var $ul = $('ul')

$ul.prepend('<li>1</li>')
$ul.append('<li>5</li>')

// 🐳 8. Setear atributos con .attr() vs element.setAttribute()
var linkCDN = document.querySelector('a.google-cdn')

linkCDN.setAttribute('target', '_blank')

var $link = $('a.google-cdn')

// Funciona igual a .setAttribute() le pasamos 2 parametros
// siend el primer el atributo, y el 2do en el valor del mismo
$link.attr(
  'href',
  'https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview#jQuery_Releases_on_the_CDN_0'
)

// 🐳 9. Obtener atributos como .attr() vs element.getAttribute()
var linkM = linkCDN.getAttribute('href')

// Si le pasamos un solo parametro, nos devuelve el valor del mismo
var linkMicrosoft = $link.attr('href')

console.log(linkMicrosoft)

// 🐳 10. Obtener valores de los inputs con .val() vs element.value
var $form = $('form')

$form.on('submit', function(infoEvento) {
  // Evitamos que se refresque el navegador
  infoEvento.preventDefault()

  // Seleccionamos el input
  var $nombre = $('input#nombre')
  // Obtenemos el valor del mismo
  var valorNombre = $nombre.val()
  // Limpiamos el valor del input
  $nombre.val('')

  console.log(valorNombre)
})
