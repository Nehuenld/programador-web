$(document).ready(function() {
  $.ajax({
    url: 'https://dog.ceo/api/breed/hound/images',
    success: function(data) {
      for (var i = 0; i < data.message.length; i++) {
        var href = data.message[i]

        var slide = `
          <div>
            <img src="${href}">
          </div>
      `
        $('.carousel-container').append(slide)
      }

      $('.carousel-container').slick({
        slidesToShow: 1,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '60px',
        adaptiveHeight: true,
      })
    },
  })
})
