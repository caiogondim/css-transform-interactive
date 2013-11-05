/* global jQuery */

var main = {};

(function ($) {
  'use strict';

  main.init = function () {
    this.bindListeners();
  }

  main.bindListeners = function () {
    $('.transform-rule-slider-label input').on(
      'change',
      main.handleScaleValueChange
    )

    $('#rotate .transform-rule-slider').on(
      'change',
      main.handleRotateValueChange
    )
  }

  // Event handlers
  // --------------

  main.handleScaleValueChange = function () {
    var scaleX = ($('.transform-rule-slider-X input').val() / 1000).toFixed(2)
    var scaleY = ($('.transform-rule-slider-Y input').val() / 1000).toFixed(2)

    $('.code-rule-value-scale-x').html(scaleX)
    $('.code-rule-value-scale-y').html(scaleY)

    $('.transform-rule-img-transformed').css(
      '-webkit-transform',
      'scale(' + scaleX + ', ' + scaleY + ')'
    )
  }

  main.handleRotateValueChange = function () {
    var rotation = parseFloat($(this).val()).toFixed(2)

    $('#rotate .code-rule-value-rotation').html(rotation)

    $('#rotate .transform-rule-img-transformed').css(
      '-webkit-transform',
      'rotate(' + rotation + 'deg)'
    )
  }

  main.init();

}(jQuery))
