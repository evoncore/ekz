;(function() {

  'use strict';

  var doc,
      gallery,
      mainImg;

  doc = document;
  mainImg = doc.querySelector('#gallery .main-img');
  gallery = doc.querySelector('#gallery');

  gallery.addEventListener('click', function(e) {
    var target = e.target;
    if (target.src) {
      mainImg.src = target.src;
    }
  });





  //------------// Border Effects //------------//


  // Get Elements

  var mainImgBorderBottom = doc.querySelector('#gallery .main-img-border-bottom'),
      minImgBordersLeft = doc.querySelectorAll('#gallery .min-img-border-left'),
      minImgBordersBottom = doc.querySelector('#gallery .min-img-border-bottom'),
      galleryBorderLeft = doc.querySelector('#gallery .gallery-border-left'),
      galleryBorderRight = doc.querySelector('#gallery .gallery-border-right');

  // Values

  var borderBottomValue = 0;
  setTimeout(function() {
    var borderBottomEffect = setInterval(function() {
      borderBottomValue += 4;
      if (borderBottomValue >= 100) {
        clearInterval(borderBottomEffect);
      }
      mainImgBorderBottom.style.width = borderBottomValue + '%';
    }, 10);
  }, 700);

  var borderLeftValue = 0;
  setTimeout(function(){
    var borderLeftEffect = setInterval(function() {
      borderLeftValue += 10;
      if (borderLeftValue >= 225) {
        clearInterval(borderLeftEffect);
      }
      for (var i = 0; i < minImgBordersLeft.length; i++) {
        minImgBordersLeft[i].style.height = borderLeftValue + 'px';
      }
    }, 10);
  }, 930);

  var minImgBordersBottomValue = 0;
  setTimeout(function() {
    var borderBottomEffectX = setInterval(function() {
      minImgBordersBottomValue += 4;
      if (minImgBordersBottomValue >= 100) {
        clearInterval(borderBottomEffectX);
      }
      minImgBordersBottom.style.width = minImgBordersBottomValue + '%';
    }, 10);
  }, 1150);

  var galleryBorderLeftValue = 0;
  setTimeout(function() {
    var galleryBorderLeftEffect = setInterval(function() {
      galleryBorderLeftValue += 20;
      if (galleryBorderLeftValue >= 841) {
        clearInterval(galleryBorderLeftEffect);
      }
      galleryBorderLeft.style.height = (galleryBorderRightValue + 10) + 'px';
    }, 10);
  }, 1430);

  var galleryBorderRightValue = 0;
  setTimeout(function() {
    var galleryBorderRightEffect = setInterval(function() {
      galleryBorderRightValue += 20;
      if (galleryBorderRightValue >= 841) {
        clearInterval(galleryBorderRightEffect);
      }
      galleryBorderRight.style.height = (galleryBorderRightValue + 10) + 'px';
    }, 10);
  }, 1430);

})();