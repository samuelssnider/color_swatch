$.ajax({
  url : 'http://localhost:8080/api/v1/top_color',
  type : 'GET',
})
.then(function(data) {
  $('.top-color').append(data)
})
