;(function() {

  'use strict';

  var doc,
      menu,
<<<<<<< HEAD
      menuUl,
      a;
=======
      menuUl;
>>>>>>> 8cf74487947348dd06bb50939791da9335c1ec17

  doc = document;
  menu = doc.querySelector('.menu');
  menuUl = doc.querySelector('.menu ul');
<<<<<<< HEAD
  a = doc.querySelectorAll('.menu a');
=======
>>>>>>> 8cf74487947348dd06bb50939791da9335c1ec17

  menu.addEventListener('click', function() {

    if (menuUl.style.display == 'block') {
      menuUl.style.display = 'none';
    } else {
      menuUl.style.display = 'block';
    }
  });

<<<<<<< HEAD
  doc.addEventListener('click', function(e) {
    var target = e.target; 
    if (target == doc.body && target != a) {
      menuUl.style.display = 'none';
    }
  });

=======
>>>>>>> 8cf74487947348dd06bb50939791da9335c1ec17
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