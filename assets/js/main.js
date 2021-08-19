$(document).ready(function () {
  let currentFloor = 0;
  $(".home-image path").on('click', function () {
    currentFloor = ($(this).attr("data-floor"));
    console.log(currentFloor);
  });
});