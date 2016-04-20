;(function() {

  'use strict';

  var doc,
      header,
      headerA,
      blocks,
      anchor,
      squareBlock,
      flyingBlocks;

  doc = document;
  header = doc.querySelector('header');
  headerA = doc.querySelector('header nav a');
  blocks = doc.querySelectorAll('.block');
  flyingBlocks = doc.querySelectorAll('.flying-block');
  anchor = doc.querySelector('#anchor');
  squareBlock = doc.querySelector('.square-block');

  document.addEventListener('scroll', function() {
    if (window.pageYOffset > 20) {
      header.style.padding = '20px 20px';
    } else if (window.pageYOffset < 100) {
      header.style.padding = '40px 20px'
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

    if (window.pageYOffset > 450) {
      squareBlock.style.opacity = 1;
    }

    if (window.pageYOffset > 550) {
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