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
  var inText = $('.text-submission textarea').val()
  var theColors =  splitAndRemovePunctuation(inText)
  var allLower = theColors.map(function(color){return color = color.toLowerCase()})
  var uniqueColors = allLower.unique()
  appendToSwatches(uniqueColors)
  makeRequests(allLower)
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

function splitAndRemovePunctuation(inText){
  var returnText = inText.replace(/\./g, ' ')
  returnText = returnText.replace(/\,/g, ' ')
  returnText = returnText.replace(/\n/g, ' ')
  returnText = returnText.replace(/\?/g, ' ')
  returnText = returnText.replace(/\!/g, ' ')
  return returnText.split(" ")
}

function appendToSwatches(inColors){
  inColors.forEach(function(color, index, full) {
    color = color.toLowerCase()
    if(COLORS[color]){
      $('article.colorized-text')[0].append(createColorizedText(color))
    }
  })
}

function makeRequests(inColors){
  inColors.forEach(function(color, index, full) {
    if(COLORS[color]){
      sendPostRequest(color)
    }
  })
}

module.exports = {getAndColor, enterPressed}