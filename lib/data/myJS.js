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
    console.log(data)
  })
  .catch(function(data) {
    console.log("Bad Request")
  })
}

var getAndColor = function() {
  var theColors = $('.text-submission textarea').val().split(" ")
  var uniqueColors = theColors.unique()
  uniqueColors.forEach(function(color, index, full) {
    color = color.toLowerCase()
    if(COLORS[color]){
      $('article.colorized-text')[0].append(createColorizedText(color))
    }
  })
  theColors.forEach(function(color, index, full) {
    color = color.toLowerCase()
    if(COLORS[color]){
      sendPostRequest(color)
    }
  })
}

$('button').on('click', getAndColor)

$('textarea').keydown(function() {
  var message = $("textarea").val();
  if (event.keyCode == 13) {
    if (message == "") {
      alert("Enter Some Text In Textarea");
    } else {
      $('#my_form').submit();
      alert("Succesfully submitted:- " + message);
      getAndColor();
    }
  $("textarea").val('');
  return false;
  }
});
