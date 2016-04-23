;(function() {

  'use strict';

  var doc,
      tiles;

  doc = document;
  tiles = doc.querySelectorAll('.tile-photo');



  setTimeout(function() {
    for (var i = 0; i < tiles.length; i++) {
      var num = r(0, 8), imgNum = r(1, 9);
      if (tiles[num].src == '') {
        tiles[num].src = 'img/' + imgNum + '.jpg';
        break;
      }
    }
  }, 2000);



  // Get random integer number

  function r(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
  }

})();