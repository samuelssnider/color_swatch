import COLORS from '../data/colors'
var $ = require('jQuery')
// start
$(document).ready(function(){
  $.ajax({
    url : 'https://color-swatch-api.herokuapp.com/api/v1/top_color',
    type : 'GET',
  })
  .then(function(data) {
    $('.top-color').append(data['value'] + " (" + data['color_count']+  ")")
  })
})

var sendPostRequest = function (color){
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


module.exports = {sendPostRequest}

