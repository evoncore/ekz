;(function() {

  'use strict';

  var doc,
      email,
      password,
      emailErr,
      passwordErr,
      emailX,
      passX,
      submit,
      emailPattern,
      passPattern,
      form;

  doc = document; // Caches Object "document"

  // Get Elements

  form = doc.querySelector('form');
  email = doc.querySelector('form .email');
  password = doc.querySelector('form .password');
  submit = doc.querySelector('form input[type=submit]');
  emailErr = doc.querySelector('form span.error-email');
  passwordErr = doc.querySelector('form span.error-pass');



  // RegExp Patterns

  emailPattern = /^\w[a-zA-Z0-9_-]+@[a-zA-Z]+?\.[a-zA-Z]/;
  passPattern = /^[a-zA-Z0-9_-]{6}/;



  // Events

  addBlur(email, emailX, emailErr, emailPattern);
  addBlur(password, passX, passwordErr, passPattern);

  showErr(email, emailErr);
  showErr(password, passwordErr);



  // Event Functions

  function addBlur(object, regexpName, errorName, namePattern) {
    object.addEventListener('blur', function() {
      regexpName = object.value.search(namePattern);

      if (regexpName == -1 && object.value != '') {
        errorName.style.display = 'block';
      }
    });
  }

  function showErr(object, errorName) {
    object.addEventListener('keyup', function() {
      errorName.style.display = 'none';
    });
  }



  // Submit Event

  submit.addEventListener('click', function(e) {
    e.preventDefault();
    emailX = email.value.search(emailPattern);
    passX = password.value.search(passPattern); 

    if (emailX == -1 || passX == -1) {
      if (emailX == -1) {
        emailErr.style.display = 'block';
      }
      if (passX == -1) {
        passwordErr.style.display = 'block';
      }
    } else if (email.value == '' || password.value == '') {  
      if (email.value == '') {
        emailErr.style.display = 'block';
      }
      if (password.value == '') {
        passwordErr.style.display = 'block';
      }
    } else if (emailX != -1 && passX != -1 && email.value != '' && password.value != '' && emailX != undefined && passX != undefined) {
      form.submit();
    }

  });

})();