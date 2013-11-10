/* global jQuery */

var main = {};

(function ($) {
  'use strict';

  main.init = function () {
    this.bindEventListeners();
  }

  main.bindEventListeners = function () {
    $('#translate input[type=range]').on(
      'change',
      main.handleTranslateValueChange
    )

    $('#scale input[type=range]').on(
      'change',
      main.handleScaleValueChange
    )

    $('#rotate .transform-rule-slider').on(
      'change',
      this.handleRotateValueChange
    )

    $('#skew input[type=range]').on(
      'change',
      this.handleSkewValueChange
    )
  }

  // Event handlers
  // --------------

  main.handleTranslateValueChange = function () {
    var translateX = $('#translate .transform-rule-slider-x').val()
    var translateY = $('#translate .transform-rule-slider-y').val()

    $('#translate .code-rule-value-translate-x').html(translateX)
    $('#translate .code-rule-value-translate-y').html(translateY)

    $('#translate .transform-rule-img-transformed').css(
      '-webkit-transform',
      'translate(' + translateX + 'px, ' + translateY + 'px)'
    )
  }

  main.handleScaleValueChange = function () {
    var scaleX = ($('#scale .transform-rule-slider-x').val() / 1000).toFixed(2)
    var scaleY = ($('#scale .transform-rule-slider-y').val() / 1000).toFixed(2)

    $('#scale .code-rule-value-scale-x').html(scaleX)
    $('#scale .code-rule-value-scale-y').html(scaleY)

    $('#scale .transform-rule-img-transformed').css(
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

  main.handleSkewValueChange = function () {
    var skewX = parseFloat($('#skew .transform-rule-slider-x').val())
    var skewY = parseFloat($('#skew .transform-rule-slider-y').val())

    $('#skew .code-rule-value-skew-x').html(skewX + 'deg')
    $('#skew .code-rule-value-skew-y').html(skewY + 'deg')

    $('#skew .transform-rule-img-transformed').css(
      '-webkit-transform',
      'skew(' + skewX + 'deg, ' + skewY + 'deg)'
    )
  }

  main.init();

}(jQuery))
