;(function() {

  'use strict';

  var doc,
      slider,
      sliderImg,
      count,
      images,
      speed,
      sliderControls,
      slideShowEffect,
      prevBtn,
      nextBtn;

  doc = document;

  // Setup Params

  count = 0;
  speed = 50;
  slideShow('on'); // "on" or "off"


  // Get Elements

  slider = doc.querySelector('#slider');
  sliderImg = doc.querySelector('#slider .slider-img');
  sliderControls = doc.querySelectorAll('#slider .slider-controls a');
  prevBtn = doc.querySelector('#slider .btn.prev');
  nextBtn = doc.querySelector('#slider .btn.next');

  images = ['artisnavi.jpg', 'city.jpg', 'hdoboi.jpg', 'sepik.jpg', 'strah.jpg'];



  // Default

  slider.style.height = document.documentElement.clientHeight + 'px';
  sliderImg.style.opacity = 1;
  showImg(sliderImg);
  showCurrentControlBtn();

  // Add Events

  prevBtn.addEventListener('click', prevImg);
  nextBtn.addEventListener('click', nextImg);

  for (var i = 0; i < sliderControls.length; i++) {
    sliderControls[i].addEventListener('click', showCurrentControlImg);
  }



  // Event Functions

  function prevImg(e) {
    if (e) e.preventDefault();

    if (sliderImg.style.opacity == 1)  {

      fadeOut(count--, fadeIn);

      if (count === 0) {
        count = images.length;
      }

      if (count === -1) { // -1: fix dataset bug ("if" must be alone)
        count = images.length - 1;
      }

      stopSlideShow();
      showImg(slider);
    }
  }

  function nextImg(e) {
    if (e) e.preventDefault();

    if (sliderImg.style.opacity == 1) {

      fadeOut(count++, fadeIn);

      if (count > images.length - 1) {
        count = 0;
      }

      stopSlideShow();
      showImg(slider);
    }
  }

  function showCurrentControlImg(e) {
    if (e) e.preventDefault();

    if (sliderImg.style.opacity == 1) {
      count = this.dataset.num;
      fadeOut('', fadeIn);
      
      stopSlideShow();
      showImg(slider);
    }
  }

  function showCurrentControlBtn() {
    for (var i = 0; i < sliderControls.length; i++) {
      sliderControls[i].style = 'none'
    }
    sliderControls[count > sliderControls.length - 1 ? 0 : count].style.backgroundColor = '#fff';
  }



  // Effects

  function fadeIn() {
    var sliderOpacity = .5;
    var opacityUp = setInterval(function() {
      sliderOpacity += .1;

      if (sliderOpacity > .9) {
        clearInterval(opacityUp);
      }

      sliderImg.style.opacity = sliderOpacity;
    }, speed);
  }

  function fadeOut(value, callback) {
    var sliderOpacity = 1;
    var opacityDown = setInterval(function() {
      sliderOpacity -= .1;

      if (sliderOpacity < .6) {
        clearInterval(opacityDown);
        value;
        showImg(sliderImg);
        showCurrentControlBtn();
        callback();
      }

      sliderImg.style.opacity = sliderOpacity;
    }, speed);
  }

  function slideShow(value) {
    if (value == 'on') {
      slideShowEffect = setInterval(function() {
        if (sliderImg.style.opacity == 1) {

          fadeOut(count++, fadeIn);

          if (count > images.length - 1) {
            count = 0;
          }

          showImg(slider);
        }
      }, 5000);
      console.log('slide-show on');
    } else {
      console.log('slide-show off');
    }
  }

  function stopSlideShow() {
    clearInterval(slideShowEffect);
    console.log('slide-show off');
    setTimeout(function() { slideShow('on') }, 15000);
  }


  // Support Functions

  function showImg(x) {
    x.style.background = 'url(img/' + images[count > images.length - 1 ? 0 : count] + ') no-repeat center';
  }

})();