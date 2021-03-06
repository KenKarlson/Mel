$(document).ready(function () {
  let currentFloor = 2;
  let floorPath = $('.home-image path');
  let counterUp = $('.counter-up'); /* кнопка вверх */
  let counterDown = $('.counter-down'); /* кнопка вниз */

  let modal = $('.modal');
  let modalCloseButton = $('.modal-close-button');
  let viewFlatsButton = $('.view-flats');

  //При наведении мышки на этаж
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor');
    currentFloor = ($(this).attr('data-floor'));
    console.log(currentFloor);
    $('.counter').text(currentFloor);
  });

  floorPath.on('click', toggleModal);
  modalCloseButton.on('click', toggleModal);
  viewFlatsButton.on('click', toggleModal);

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

  function toggleModal() {
    modal.toggleClass('is-open');
  }
});