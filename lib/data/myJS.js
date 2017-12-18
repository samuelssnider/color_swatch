import COLORS from './colors'

$.ajax({
  url : 'https://color-swatch-api.herokuapp.com/api/v1/top_color',
  type : 'GET',
})
.then(function(data) {
  console.log(data)
  $('.top-color').append(data['value'] + " with " + data['color_count']+  " switches")
})

function createColorizedText(color){
  var div = document.createElement('DIV')
  console.log(COLORS[color])
  debugger
  $(div).addClass(COLORS[color])
}

var getAndColor = function() {
  var inputArray = $('.text-submission textarea').val().split(" ")
  inputArray.forEach(function(color, index, full) {
    $('article.colorized-text')[0].append(createColorizedText(color))
  })
}

$('button').on('click', getAndColor)
