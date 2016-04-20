;(function() {

  'use strict';

  var doc,
      menu,
      menuUl,
      a;

  doc = document;
  menu = doc.querySelector('.menu');
  menuUl = doc.querySelector('.menu ul');
  a = doc.querySelectorAll('.menu a');

  menu.addEventListener('click', function() {

    if (menuUl.style.display == 'block') {
      menuUl.style.display = 'none';
    } else {
      menuUl.style.display = 'block';
    }
  });

  doc.addEventListener('click', function(e) {
    var target = e.target; 
    if (target == doc.body && target != a) {
      menuUl.style.display = 'none';
    }
  });

  // menu.addEventListener('click', function(e) {
  //   e.preventDefault();
  //   var target = e.target;

  //   if (target.nextElementSibling.style.display == 'block') {
  //     target.nextElementSibling.style.display = 'none';
  //   } else {
  //     target.nextElementSibling.style.display = 'block';
  //   }
  // });

})();