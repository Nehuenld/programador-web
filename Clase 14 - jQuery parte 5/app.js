/* 
  1. Deben de pegarle a la API de frases usando $.ajax()
  2. Deben de insertar la frase y el autor en el DOM
  3. Que pueda twittear la frase y el autor (Investigar)
  4. (Opcional) que le pegue a otra API para poder traducir la frase

  Toda la UI pueden usar Bootstrap, o hacerla custom con flexbox, google fonts, etc
*/
//1.

var $h3 = $(`
<h3 class="quoteText">
  
</h3>`
)

var $body = $('body')

$body.append($h3)


var $h4 = $(`
<h4 class="quoteAuthor boton.2">
</h4>`
)
$body.append($h4)

$.ajax({
    url:`https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote`,
    success: function (data) {
        console.log(data)
        var quoteText = data.quoteText;
        console.log(quoteText)
        var quoteAuthor = data.quoteAuthor;
        
        $("h3.quoteText").append(quoteText);
        $("h4.quoteAuthor").append(quoteAuthor);
    }
})

var $i = $(`
<i class="ion-social-twitter-outline twitter">
</i>`
)
$body.append($i)
//https://twitter.com/intent/tweet?=
/*var key = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171220T234615Z.b4851565b601c8a1.f7b6df28e8ef1130ba0598e0751c3759ac23e86e` + quoteText + `&lang=en-es`;

$(".boton.2").click(function (trasl) {

    $.ajax({
        url = key
 
        success: function (traduccion) {
            console.log(traduccion)
            $.(".pasarela2").text(traduccion.quoteText)
        }
        error: function (error) {
            console.log(error)
        }        
    })

})*/
