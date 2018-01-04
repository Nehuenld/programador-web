$(document).ready(function() {
  $.ajax({
    url: 'http://ufc-data-api.ufc.com/api/v1/us/fighters',
    success: function(data) {
      var $fighters = $('.fighters')

      for (var i = 0; i < data.length; i++) {
        var peleador = data[i]
        var nombreCompleto = `${peleador.first_name} ${peleador.last_name}`
        var componente = `
          <div class="card">
            <img src=${peleador.thumbnail}
              alt=${nombreCompleto} class="thumbnail">
            <div class="info">
              <h2 class="name">${nombreCompleto}</h2>
              <h3 class="weightclass">${
                peleador.weight_class ? peleador.weight_class : ''
              }</h3>
              <p>
                <span class="wins">Wins: ${peleador.wins}</span>
                <span class="losses">Losses: ${peleador.losses}</span>
              </p>
            </div>
        </div>
    `
        $fighters.append(componente)
      }
    },
  })
})
