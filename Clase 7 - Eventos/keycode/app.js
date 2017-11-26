// 1. Agregar el evento "keypress" al body (primer parametro del .addEventListener)
// 2. Agregarle el callback  (segundo parametro del .addEventListener)
// 3. En el parámetro del callback nos va a llegar toda la información del evento
// 4. Con esta información debo agregarla al DOM

var body = document.body
var keyCode = document.querySelector('h2')
var key = document.querySelector('button')

body.addEventListener('keypress', function(infoEvento) {
  var codigoAscii = infoEvento.keyCode
  var tecla = infoEvento.key

  keyCode.textContent = codigoAscii
  key.textContent = tecla
})
