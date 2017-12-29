function traerDatos() {
  $.ajax({
    url: 'https://www.bitstamp.net/api/ticker',
    success: function(datos) {
      $('.display-2').text(datos.last)
    },
    error: function(error) {
      console.error(`uups hubo un error: ${error.statusCode}`)
    },
  })
}

traerDatos()

setInterval(function() {
  traerDatos()
}, 4000)
