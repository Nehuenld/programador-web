// 1. agregar el evento keypress al body (primer parameto del .allEventlistener)
// 2. dar la funcion callback (segundo parametro del .allEventlistener)
// 3 . 
// 4. Con esta informacion debo agregarla al DOM

var body = document.body  
var KeyCode = document.querySelector("h2")
var key = document.querySelector("button")

body.addEventListener("Keypress", function (infoEvento) {
    var tecla = infoEvento.key
    var codigoAscii = infoEvento.KeyCode

    KeyCode.textContent = codigoAscii
    key.textContent = tecla
})
