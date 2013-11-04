$('.transform-rule-slider-label input').on('change', function (event) {
  var scaleX = ($('.transform-rule-slider-X input').val() / 1000).toFixed(2)
  var scaleY = ($('.transform-rule-slider-Y input').val() / 1000).toFixed(2)

  // updates the code
  $('.code-rule-value-scale-x').html(scaleX)
  $('.code-rule-value-scale-y').html(scaleY)

  // reflect changes in the experiment
  $('.transform-rule-img-transformed').css('-webkit-transform', 'scale(' + scaleX + ', ' + scaleY + ')' );
})
