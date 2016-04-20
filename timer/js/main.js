;(function() {

  'use strict';

  var doc,
      endtime,
      clockDisplay;

  doc = document; // Caches Object 'document'
  clockDisplay = doc.querySelector('.clock'); // Get Element 'clock'

  endtime = prompt('Введите дату. Стандартный формат год-месяц-день \n Также можно ввести более точную дату: \n 12 31 2016 23:59:59 GMT+02:00', '2017-01-01');

  function clockTimer() {
    var t = getEndTime(endtime);
    clockDisplay.innerHTML = validDate(setDate(endtime)); // Insert data into the clockDisplay

    if(t.total <= 0){
     clearInterval(timer); // If timer end - the timer stop
    }
  }

  clockTimer(); // Start instant timer
  var timer = setInterval(clockTimer, 1000); // Set timer interval

  function setDate(time) {
    var result,
        t;

    t = addZero(getEndTime(time));

    if (t.minutes == 0) {
      result = addZero(t.seconds); // just seconds
    } else if (t.hours == 0) {
      result = addZero(t.minutes) + ' : ' + addZero(t.seconds); // minutes : seconds
    } else if (t.days == 0) {
      result = addZero(t.hours) + ' : ' + addZero(t.minutes) + ' : ' + addZero(t.seconds); // hours : minutes : seconds
    } else {
      result = addZero(t.days) + ' : ' + addZero(t.hours) + ' : ' + addZero(t.minutes) + ' : ' + addZero(t.seconds); // days : hours : minutes : seconds
    }

    return result;
  }

  function validDate(time) { // Check clockValues for valid data 
    var result;

    if (getEndTime(endtime).total) {
      result = time;
    } else {
      result = 'Вы ввели неккоректную дату';
    }

    return result;
  }

  function addZero(x) {
    return x < 10 ? '0' + x : x; // If timeValue < 10 - add zero to the clock value
  }

  // Get endtime

  function getEndTime(time) {
    var t = Date.parse(time) - Date.parse(new Date()),   // Get Date
        seconds = Math.floor((t / 1000) % 60),           // Get Seconds
        minutes = Math.floor((t / 1000 / 60) % 60),      // Get Minutes
        hours = Math.floor((t / (1000 * 60 * 60)) % 24), // Get Hours
        days = Math.floor(t / (1000 * 60 * 60 * 24));    // Get Days

    return { // Return Object with clock values
     'total': t,
     'days': days,
     'hours': hours,
     'minutes': minutes,
     'seconds': seconds
    };
  }

})();