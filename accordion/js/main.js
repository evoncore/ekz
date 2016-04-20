;(function() {

  'use strict';

  var doc,
      a,
      ul;

  doc = document;
  a = doc.querySelectorAll('.menu > a');
  ul = doc.querySelectorAll('.menu ul');

  for (var i = 0; i < a.length; i++) {
    a[i].addEventListener('click', accordion);
  }

  function accordion(e) {
    e.preventDefault();

    for (var i = 0; i < ul.length; i++) {
      ul[i].style.display = 'none';
    } 

    this.classList.toggle('active');

    if (this.classList.contains('active')) {
      this.nextSibling.nextSibling.style.display = 'block';
      for (var i = 0; i < ul.length; i++) {
        a[i].classList.remove('active');
      }
      this.classList.add('active');
    } else {
      this.nextSibling.nextSibling.style.display = 'none';
    }
  }

})();