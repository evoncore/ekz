;(function() {

  'use strict';

  var doc,
      sliderBar,
      bar,
      barDisplay;

  doc = document;
  bar = doc.querySelector('.bar');
  sliderBar = doc.querySelector('.bar .slider-bar');
  barDisplay = doc.querySelector('.bar-display');
  sliderBar.style.left = '0';

  sliderBar.addEventListener('mousedown', function(e) {
    var thumbCoords = getCoords(sliderBar);
    var shiftX = e.pageX - thumbCoords.left;

    var sliderCoords = getCoords(bar);

    doc.onmousemove = function(e) {
      var newLeft = e.pageX - shiftX - sliderCoords.left;

      if (newLeft < 0) {
        newLeft = 0;
      }
      var rightEdge = bar.offsetWidth - sliderBar.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      sliderBar.style.left = newLeft + 'px';
    };

    doc.addEventListener('mouseup', function() {
      var price = sliderBar.style.left,
          result;
      if (price.charAt(1) == 'p') {
        result = 1;
      } else if (price.charAt(2) == 'p') {
        result = 2;
      } else if (price.charAt(3) == 'p') {
        result = 3;
      }

      barDisplay.innerHTML = +price.slice(0, result) * 5 + ' USD';
      doc.onmousemove = doc.onmouseup = null;
    });

    return false;
  });

  sliderBar.addEventListener('dragstart', function() {
    return false;
  });

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

})();