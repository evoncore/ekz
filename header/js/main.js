;(function() {

  'use strict';

  var doc,
      header,
      headerA,
      blocks,
      anchor,
      squareBlock,
      flyingBlocks,
      h1;

  doc = document;
  h1 = doc.querySelector('h1');
  header = doc.querySelector('header');
  headerA = doc.querySelectorAll('header nav a');
  blocks = doc.querySelectorAll('.block');
  flyingBlocks = doc.querySelectorAll('.flying-block');
  anchor = doc.querySelector('#anchor');
  squareBlock = doc.querySelector('.square-block');

  function addForCollection(object, value) {
    for (var i = 0; i < object.length; i++) {
      object[i].style.padding = value;
    }
  }

  doc.addEventListener('scroll', function() {
    h1.style.opacity = 0;
<<<<<<< HEAD

=======
>>>>>>> 8cf74487947348dd06bb50939791da9335c1ec17
    if (window.pageYOffset > 20) {
      addForCollection(headerA, '10px 20px');
      header.style.backgroundColor = 'rgba(34, 34, 34, .5)';
    } else if (window.pageYOffset < 100) {
      addForCollection(headerA, '20px 20px');
      header.style.backgroundColor = 'rgba(34, 34, 34, 1)';
    }

    if (window.pageYOffset > 200) {
      setInterval(function() {
        blocks[0].style.opacity = 1;
      }, 350);
      setInterval(function() {
        blocks[1].style.opacity = 1;
      }, 700);
      setInterval(function() {
        blocks[2].style.opacity = 1;
      }, 1050);
    }

    if (window.pageYOffset > 550) {
<<<<<<< HEAD
      setInterval(function() {
        squareBlock.style.opacity = 1;
      }, 700)
    }

    if (window.pageYOffset > 1000) {
=======
      squareBlock.style.opacity = 1;
    }

    if (window.pageYOffset > 750) {
>>>>>>> 8cf74487947348dd06bb50939791da9335c1ec17
      setInterval(function() {
        flyingBlocks[0].style.opacity = 1;
        flyingBlocks[0].style.marginLeft = '55px';
      }, 1050);
      setInterval(function() {
        flyingBlocks[1].style.opacity = 1;
        flyingBlocks[1].style.marginLeft = '75px';
      }, 700);
      setInterval(function() {
        flyingBlocks[2].style.opacity = 1;
        flyingBlocks[2].style.marginLeft = '95px';
      }, 350);
    }

    if (window.pageYOffset > 5) {
      anchor.style.display = 'block';
      if (window.pageYOffset > 20 && anchor.style.display == 'block') {
        anchor.style.opacity = 1;
      }
    } else if (window.pageYOffset < 5) {
      anchor.style.opacity = 0;
      if (anchor.style.opacity == 0 && anchor.style.display == 'block') {
        anchor.style.display = 'none';
      }
    }
  });


})();