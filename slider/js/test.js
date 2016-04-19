

  // slider = {
  //   slides: ['artisnavi.jpg', 'city.jpg', 'hdoboi.jpg', 'sepik.jpg', 'strah.jpg'],
  //   frame: 0,
  //   show: function() {
  //     sliderEl.style.background = 'url(img/' + slider.slides[slider.frame] + ') no-repeat center, #222';
  //   },
  //   prevImg: prevBtn.addEventListener('click', function(e) {
  //     e.preventDefault();
  //     console.log(slider.frame);

  //     if (slider.frame == 0) {
  //       slider.frame = slider.slides.length - 1;
  //     } else {
  //       slider.frame--;
  //     }
  //   }),
  //   nextImg: nextBtn.addEventListener('click', function(e) {
  //     e.preventDefault();
  //     console.log(slider.frame);

  //     if (slider.frame > slider.slides.length - 2) {
  //       slider.frame = 0;
  //     } else {
  //       slider.effectDown(function() {
  //         var opacity = .6;
  //         var opacityUp = setInterval(function() {
  //           opacity += .1;

  //           if (opacity > .9) {
  //             clearInterval(opacityUp);
  //           }

  //           sliderEl.style.opacity = opacity;
  //         }, 60)
  //       });
  //     }
  //     // document.body.style.background = 'url(img/' + slider.slides[slider.frame > slider.slides.length -1 ? 0 : slider.frame] + ') no-repeat center, #222';
  //   }),
  //   effectDown: function(callback) {
  //     var opacity = 1;
  //     var opacityDown = setInterval(function() {
  //       opacity -= .1;

  //       if (opacity < .7) {
  //         clearInterval(opacityDown);
  //         slider.frame++;
  //         slider.show();
  //         callback();
  //       }

  //       sliderEl.style.opacity = opacity;
  //     }, 60)
  //   }
  // };

  // sliderEl.style.background = 'url(img/' + slider.slides[slider.frame] + ') no-repeat center, #222';