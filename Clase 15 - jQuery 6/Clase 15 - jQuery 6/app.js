$(document).ready(function() {
  $('form').on('submit', function(evento) {
    // Previene el comportamiento por defecto
    // cuando el navegador se refresca
    evento.preventDefault()

    // Obtenemos el valor del input
    var $input = $('input')
    var valorInput = $input.val()

    // Limpiamos el valor del input
    $input.val('')

    // Hacer la llamada AJAX
    var API_URL = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=6&prop=pageimages%7Cextracts&pilimit=max&pithumbsize=80&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${valorInput}`

    $.ajax({
      url: API_URL,
      success: function(data) {
        var articulos = data.query.pages

        for (var propiedad in articulos) {
          var articulo = articulos[propiedad]

          var componente = `
            <div class="box">
              <h2>${articulo.title}</h2>
              <p>${articulo.extract}</p>
              <a
                target="_blank"
                href="https://en.wikipedia.org/?curid=${articulo.pageid}">
                link
              </a>
            </div>
          `

          $('.container').append(componente)
        }
      },
      error: function(error) {
        console.error(error)
      },
    })
  })
})
