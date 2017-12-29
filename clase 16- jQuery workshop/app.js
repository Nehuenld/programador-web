var $form = $("form")

$form.on("submit",function(evento){
    evento.preventDefault()
    

    var uno = $("div.uno")
    var uno = $("div.dos")
    var a =$("a")
    

    var input = $("input").val()
    console.log(input)
    var API_QUERY = `https://crossorig.in/https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=6&prop=pageimages%7Cextracts&pilimit=max&pithumbsize=80&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${input}`

    $.ajax({
        url: API_QUERY,
        success: function(data) {
            console.log(data)
            var queryText = data.query.pages.pageid;
            console.log(quoteText);
            var queryAuthor = data.query.title;
            var coment = data.query.extract;

            $("div").append(`href="https://en.wikipedia.org/?curid=${queryText}"`);
            $("uno").text(queryAuthor);
            $("dos").text(coment);
        },
        error: function (error) {
            console.error(error)
        },
    })

})