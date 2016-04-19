;(function() {

  'use strict';

  var doc,
      menu,
      menuUl;

  doc = document;
  menu = doc.querySelector('.menu');
  menuUl = doc.querySelector('.menu ul');

  menu.addEventListener('click', function() {

    if (menuUl.style.display == 'block') {
      menuUl.style.display = 'none';
    } else {
      menuUl.style.display = 'block';
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