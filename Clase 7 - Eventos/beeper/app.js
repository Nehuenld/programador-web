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

var boton = document.querySelector('button.btn')
var body = document.body

var seEjecutaEnEvento = function() {
  console.log('hoooo')

  // Alternativa 1 con lo que vimos hasta ahora
  // var parrafo = document.createElement('p')
  // parrafo.textContent = 'BEEP'
  // body.appendChild(parrafo)

  // Alternativa 2
  // .insertAdjacentHTML seria lo mismo que hacer .appendChild
  body.insertAdjacentHTML('beforeend', '<p id="parrafo">BEEP</p>')

  body.style.backgroundColor = generarRGB()
}

boton.addEventListener('click', seEjecutaEnEvento)

function generarColor() {
  return Math.round(Math.random() * 255)
}

function generarRGB() {
  var red = generarColor()
  var green = generarColor()
  var blue = generarColor()

  return `rgb(${red}, ${green}, ${blue})`
}
