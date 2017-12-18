import COLORS from './colors'

$.ajax({
  url : 'https://color-swatch-api.herokuapp.com/api/v1/top_color',
  type : 'GET',
})
.then(function(data) {
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

function sendPostRequest(color){
  return $.ajax({
    url : 'https://color-swatch-api.herokuapp.com/api/v1/colors',
    type : 'POST',
    data : {color: {value: color}}
  })
  .then(function(data) {
    
  })
  .catch(function(data) {
    console.log("Bad Request")
  })
}

var getAndColor = function() {
  var inputArray = $('.text-submission textarea').val().split(" ").unique()
  inputArray.forEach(function(color, index, full) {
    if(COLORS[color]){
      sendPostRequest(color)
      $('article.colorized-text')[0].append(createColorizedText(color))
    }
  })
}

$('button').on('click', getAndColor)
