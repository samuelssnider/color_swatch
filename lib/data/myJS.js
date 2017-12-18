$.ajax({
  url : 'https://color-swatch-api.herokuapp.com/api/v1/top_color',
  type : 'GET',
})
.then(function(data) {
  console.log(data)
  $('.top-color').append(data['value'] + " with " + data['color_count']+  " switches")
})
