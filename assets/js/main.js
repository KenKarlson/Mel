$(document).ready(function () {
  let currentFloor = 0;
  let floorPath = $('.home-image path');
  let counterUp = $('.counter-up'); /* кнопка вверх */
  let counterDown = $('.counter-down'); /* кнопка вниз */

  //При наведении мышки на этаж
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor');
    currentFloor = ($(this).attr('data-floor'));
    console.log(currentFloor);
    $('.counter').text(currentFloor);
  });

  //при нажатии кнопки вверх
  counterUp.on('click', function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });

  //при нажатии кнопки вниз
  counterDown.on('click', function () {
    if (currentFloor > 02) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });
});