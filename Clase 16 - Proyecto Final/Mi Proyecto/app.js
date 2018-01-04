// 1. Buscar una API en https://github.com/toddmotto/public-apis

var API = `https://dog.ceo/api/img`

// 2. Que en la columna de Auth diga "No"
//  Auth == "No"

// 3. Debería de poder listar los elementos de la API

$.ajax({
    url: 'https://dog.ceo/api/breeds/list',
    success: function (data) {
        var breeds = data.message
        var $select = $('select')
        console.log(breeds)
        for (var i = 0; i < breeds.length; i++) {
            var breed = breeds[i]

            var option = `<option value="${breed}">${breed}</option>`

            $select.append(option)
        }
    },
})

$('form').on('submit', function (event) {
        event.preventDefault()
        var breedSelected = $('select').val()

    $.ajax({
        url: `https://dog.ceo/api/breed/${breedSelected}/images`,
        success: function (data) {
            var breedImage = data.message
            var $container = $('div.container')
            console.log(breedImage)
            for (let i = 0; i < breedImage.length; i++) {
                var images = breedImage[i]

                var img = `<img src="${images}"</img>`
                
                $container.append(img)
            }
        }
    })
})




// 4. Agregar más funcionalidades a creer conveniente


