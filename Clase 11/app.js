// 💍 18. Ejercicio: Aplicando jQuery

/* 
  1. Inclui la librería jQuery en la página
  2. Escribí una expresión usando jQuery que seleccione todos los elementos h1 y le cambie el texto a color azul.
  3. Que seleccione el elemento body y le cambie el color del background a rojo
  4. Que seleccione el elemento con id "everything" e incremente su font-size
  5. Que seleccione todos los elementos con la clase "holder" y le agregué un borde negro
  6. Que seleccione todos los elemento li dentro de ul y los ponga en negrita
  7. Que seleccione los elementos p que vengan inmediatamente después de un h1 y los pinte de verde
  8. Que seleccione el elemento con id "secret" y le cambié su propiedad display a 'none'
  9. Ahora cambiá el display de #secret de nuevo a block
  10. Que seleccione el elemento con id "change-me" y cambie el texto contenido en él
  11. Que agregue nuevo texto al final de la oración en #change-me
  12. Que reemplace el contenido de #change-me por dos p que tengan texto adentro
  13. Que agregue un nuevo párrafo a #change-me
  14. Que seleccione todos los elemento li y les cambie el texto que tienen
  15. Que seleccione todos los elemento li y les agregue más texto a todos ellos
  16. Que seleccione el elemento con el id "everything" y le agregue una lista desordenada con tres elementos adentro
*/

//1. Inclui la librería jQuery en la página
//  2. Escribí una expresión usando jQuery que seleccione todos los elementos h1 y le cambie el texto a color azul.

var $h2 = $("h2")

$h2.css("color", "blue")

//  3. Que seleccione el elemento body y le cambie el color del background a rojo
var $body = $("body")

$body.css("background-color", "red")

//  4. Que seleccione el elemento con id "everything" e incremente su font-size

var $everything = $("#everything")
$everything.css("font-size", "100px")

//  5. Que seleccione todos los elementos con la clase "holder" y le agregué un borde negro
$h2.addClass("holder")

$(".holder").css("border","solid")
$(".holder").css("border-color", "black")

//  6. Que seleccione todos los elemento li dentro de ul y los ponga en negrita
var $ul = $(`
<ul>
  <li><strong>Estoy en negrita</strong</li>
    <li><strong>Estoy en negrita</strong</li>
</ul>`)

var $body = $('body')

$body.append($ul)

//  7. Que seleccione los elementos p que vengan inmediatamente después de un h1 y los pinte de verde

var $p = $("p")
$p.css("background-color", "green")

var $h1 = $(`
<h1>Soy un Titulo</h1>
<p>soy un texto</p>
<p>soy un texto</p>
<p>soy un texto</p>
`)

$body.append($h1)

// 8. Que seleccione el elemento con id "secret" y le cambié su propiedad display a 'none'

$h1.attr("id", "secret")

$h1.hide()

//  9. Ahora cambiá el display de #secret de nuevo a block

setInterval(function () {
    $h1.fadeIn(700)
}, 1000)

// 10. Que seleccione el elemento con id "change-me" y cambie el texto contenido en él

var $change_me = $("#change-me")
$change_me.hmtl(`
<p>soy un texto</p>`)
