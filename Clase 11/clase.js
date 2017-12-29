// 💍 11. Agregar clases con .addClass() vs element.classList.add()
var titulo = document.querySelector('h1')
// titulo.classList.add('title')

var $titulo = $('h1')
$titulo.addClass('title')

// 💍 12. Remover clases con .removeClass() vs element.classList.remove()
// titulo.classList.remove('title')

setTimeout(function() {
  $titulo.removeClass('title')
}, 4000)

/* 
SPAM
$('#exampleModal').modal('show')

setTimeout(function() {
  $('#exampleModal').modal('hide')
}, 6000) 
*/

// 💍 13. Togglear clases con .toggleClass() vs element.classList.toggle()
// titulo.classList.toggle('title')

setTimeout(function() {
  $titulo.toggleClass('title')
}, 6000)

// 💍 14. Agregar eventos con .on() vs element.addEventListener()
var buttonModal = document.querySelector('button.launch-modal')
var $buttonModal = $('button.launch-modal')

/* 
buttonModal.addEventListener('click', function() {
  $('#exampleModal').modal('show')
})
 */

$buttonModal.on('click', function() {
  $('#exampleModal').modal('show')
})

// 💍 15. Efectos con jQuery como hide(), show(), toggle(), fadeIn(), fadeOut() y más!
var $subtitulo = $('h3')

$subtitulo.hide()

$subtitulo.show()

$subtitulo.toggle()

setInterval(function() {
  $subtitulo.fadeIn(700)
}, 1000)

// 💍 16. Crear elementos usando jQuery
var $ul = $(`
<ul>
  <li>LG</li>
  <li>Samsung</li>
</ul>`)

var $body = $('body')

$body.append($ul)