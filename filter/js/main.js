;(function() {

  'use strict';

  var doc,
      controls,
      blocks;

  doc = document;
  controls = doc.querySelectorAll('.panel input');
  blocks = doc.querySelectorAll('.block');

  for (var i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', show);
  }

  function show() {
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].style.display = 'none';
      if (blocks[i].dataset.num == this.dataset.num) {
        blocks[i].style.display = 'block';
      } else if (this.dataset.num == 'all') {
        blocks[i].style.display = 'block';
      }
    }
    for (var i = 0; i < controls.length; i++) {
      controls[i].parentNode.classList.remove('current');
    }

    if (this.dataset.num != 'all') {
      controls[this.dataset.num].parentNode.classList.add('current');
    } else if (this.dataset.num == 'all') {
      controls[0].parentNode.classList.add('current');
    }
  }

})();