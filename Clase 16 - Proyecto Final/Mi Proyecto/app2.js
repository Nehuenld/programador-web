
$(document).ready(function () {
    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#myCarousel").carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#myCarousel").carousel("next");
    });
});
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
            var $item = $(".item").slide()
            console.log(breedImage)

            for (let i = 0; i < breedImage.length; i++) {
                var images = breedImage[i]

                var img = `<img src="${images}">`

                $(".item").append(img)

            }
            // event.$("img").val("")
        },

        error: function (error) {
            console.error(error)
        },
    })
    $(document).ready(function () {
        // Activate Carousel
        $("#myCarousel").carousel();

        // Enable Carousel Indicators
        $(".item1").click(function () {
            $("#myCarousel").carousel($images);
        });
        $(".item2").click(function () {
            $("#myCarousel").carousel($images);
        });
        $(".item3").click(function () {
            $("#myCarousel").carousel($images);
        });
        $(".item4").click(function () {
            $("#myCarousel").carousel($images);
        });

        // Enable Carousel Controls
        $(".left").click(function () {
            $("#myCarousel").carousel("prev");
        });
        $(".right").click(function () {
            $("#myCarousel").carousel("next");
        });
    });
})