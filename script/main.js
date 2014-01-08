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
      this.handleTranslateValueChange
    )

    $('#scale input[type=range]').on(
      'change',
      this.handleScaleValueChange
    )

    $('#rotate input[type=range]').on(
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
    var translateX = $('#translate .experiment__controls__slider.axis-x').val()
    var translateY = $('#translate .experiment__controls__slider.axis-y').val()

    $('#translate .experiment__code__rule-value-translate-x').html(translateX)
    $('#translate .experiment__code__rule-value-translate-y').html(translateY)

    $('#translate .experiment__stage__img-transformed').css(
      'transform',
      'translate(' + translateX + 'px, ' + translateY + 'px)'
    )
  }

  main.handleScaleValueChange = function () {
    var scaleX = $('#scale .experiment__controls__slider.axis-x').val()
    scaleX = (scaleX / 1000).toFixed(2)
    var scaleY = $('#scale .experiment__controls__slider.axis-y').val()
    scaleY = (scaleY / 1000).toFixed(2)

    $('#scale .experiment__code__rule-value-scale-x').html(scaleX)
    $('#scale .experiment__code__rule-value-scale-y').html(scaleY)

    $('#scale .experiment__stage__img-transformed').css(
      'transform',
      'scale(' + scaleX + ', ' + scaleY + ')'
    )
  }

  main.handleRotateValueChange = function () {
    var rotation = parseFloat($(this).val()).toFixed(2)

    $('#rotate .experiment__code__rule-value-rotation').html(rotation)

    $('#rotate .experiment__stage__img-transformed').css(
      'transform',
      'rotate(' + rotation + 'deg)'
    )
  }

  main.handleSkewValueChange = function () {
    var skewX = $('#skew .experiment__controls__slider.axis-x').val()
    skewX = parseFloat(skewX)
    var skewY = $('#skew .experiment__controls__slider.axis-y').val()
    skewY = parseFloat(skewY)

    $('#skew .experiment__code__rule-value-skew-x').html(skewX + 'deg')
    $('#skew .experiment__code__rule-value-skew-y').html(skewY + 'deg')

    $('#skew .experiment__stage__img-transformed').css(
      'transform',
      'skew(' + skewX + 'deg, ' + skewY + 'deg)'
    )
  }

  main.init();

}(jQuery))
