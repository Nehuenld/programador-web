function getQuote() {
  var API_QUOTE =
    'https://crossorig.in/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'

  $.ajax({
    url: API_QUOTE,
    success: function(data) {
      var author = data.quoteAuthor
      var quote = data.quoteText

      $('h2.quote').text(quote)
      $('h3.author').text(author)
    },
    error: function(error) {
      console.error(error)
    },
  })
}

function tweetQuote(quote) {
  var URL = `https://twitter.com/intent/tweet?text=${encodeURI(quote)}`
  window.open(URL, '_blank')
}

function translateQuote(quote) {
  var API_KEY =
    'trnsl.1.1.20171221T005322Z.d3f8bfbc6dc7237c.d4542fb0ec0a53cb506742046c9bdf68495e5a70'
  var API_URL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=${encodeURI(
    quote
  )}&lang=es`

  $.ajax({
    url: API_URL,
    success: function(data) {
      var translation = data.text[0]
      $('h2.quote').text(translation)
    },
    error: function(error) {
      console.error(error)
    },
  })
}

$(document).ready(function() {
  getQuote()

  $('svg.feather-zap').click(function() {
    getQuote()
  })

  $('svg.feather-twitter').click(function() {
    var quote = $('h2.quote').text()
    var author = $('h3.author').text()
    var finalQuote = `"${quote}" - ${author}`

    tweetQuote(finalQuote)
  })

  $('svg.feather-flag').click(function() {
    var quote = $('h2.quote').text()
    translateQuote(quote)
  })
})
