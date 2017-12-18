import COLORS from './colors'

$.ajax({
  url : 'https://color-swatch-api.herokuapp.com/api/v1/top_color',
  type : 'GET',
})
.then(function(data) {
  console.log(data)
  $('.top-color').append(data['value'] + " with " + data['color_count']+  " switches")
})

var getAndColor = function() {
  var inputArray = $('.text-submission textarea').val().split(" ")
  inputArray.forEach(function(color, index, full) {
    
  })
  debugger
}

$('button').on('click', getAndColor)
