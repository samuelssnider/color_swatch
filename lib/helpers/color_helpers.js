// import { unique } from '../prototypes/prototype'
import { sendPostRequest } from '../requests/color_requests'
var $ = require('jQuery')
import COLORS from '../data/colors'


Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}

var getAndColor = function() {
  var theColors = $('.text-submission textarea').val().split(" ")
  var allLower = theColors.map(function(color){return color = color.toLowerCase()})
  var uniqueColors = allLower.unique()
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

var enterPressed = function() {
  var message = $("textarea").val();
  if (event.keyCode == 13) {
    if (message == "") {
      alert("Enter Some Text In Text Area");
    } else {
      alert("Succesfully submitted:- " + message);
      getAndColor();
    }
  $("textarea").val('');
  return false;
  }
};

function createColorizedText(color){
  var div = document.createElement('DIV')
  $(div).addClass('swatch')
  div.style = `background-color:${COLORS[color]}`
  return div
}

module.exports = {getAndColor, enterPressed}