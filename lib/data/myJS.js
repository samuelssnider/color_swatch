import COLORS from './colors'

$.ajax({
  url : 'https://color-swatch-api.herokuapp.com/api/v1/top_color',
  type : 'GET',
})
.then(function(data) {
  console.log(data)
  $('.top-color').append(data['value'] + " with " + data['color_count']+  " switches")
})

Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}

function createColorizedText(color){
  var div = document.createElement('DIV')
  $(div).addClass('swatch')
  div.style = `background-color:${COLORS[color]}`
  return div
}

var getAndColor = function() {
  var inputArray = $('.text-submission textarea').val().split(" ").unique()
  inputArray.forEach(function(color, index, full) {
    if(COLORS[color]){
      $('article.colorized-text')[0].append(createColorizedText(color))
    }
  })
}

$('button').on('click', getAndColor)
