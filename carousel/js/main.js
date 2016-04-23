;(function() {

  'use strict';

  var doc,
      carousel,
      carouselItems,
      position,
      images,
      block,
      blockValue,
      frame,
      leftBtn,
      rightBtn;

  doc = document; // Caches Object "document"

  carousel = doc.querySelector('#carousel');
  carouselItems = doc.querySelector('#carousel-items');
  leftBtn = doc.querySelector('.caru-left');
  rightBtn = doc.querySelector('.caru-right');
  images = doc.querySelectorAll('.caru-item');

  frame = 0;
  block = 2;
  blockValue = images.length / block;

  if (frame == 0) {
    leftBtn.style.display = 'none';
    leftBtn.style.opacity = 0;
  }

  leftBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (position != 0) {
      position = position - carousel.offsetWidth;
      frame--;
      showBtn(rightBtn);
    }

    if (frame == 0) {
      fadeOut(leftBtn, function() {
        leftBtn.style.display = 'none';
      });
    }

    carouselItems.style.marginLeft = '-' + position + 'px';
  });

  rightBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    position = carousel.offsetWidth;

    if (frame < blockValue - 1) {
      frame++;
    }

    if (!(frame < blockValue - 1)) {
      fadeOut(rightBtn, function() {
        rightBtn.style.display = 'none';
      })
    }

    if (frame > 0) {
      position = carousel.offsetWidth * frame;
      showBtn(leftBtn);
    }

    carouselItems.style.marginLeft = '-' + position + 'px';
  });



  // Support Functions

  function showBtn(object) {
    object.style.display = 'block';
    if (object.style.display == 'block' && object.style.opacity == 0 || object.style.opacity == -0.1) {
      fadeIn(object);
    }
  }



  // Effects

  function fadeOut(object, callback) {
    var opacity = .5,
    effect = setInterval(function() {
      opacity -= .1;

      if (opacity < 0) {
        clearInterval(effect);
        callback();
      }

      object.style.opacity = opacity;
    }, 60);
  }

  function fadeIn(object) {
    var opacity = 0,
    effect = setInterval(function() {
      opacity += .1;

      if (opacity > .4) {
        clearInterval(effect);
      }

      object.style.opacity = opacity;
      object.addEventListener('mouseenter', function() { // Imitate Javascript Hover
        object.style.opacity = .8;
      });
      object.addEventListener('mouseleave', function() { // Imitate Javascript Hover
        object.style.opacity = .5;
      });
    }, 60);
  }

})();