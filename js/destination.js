$(function () {

  // datepicker 
  var $tomorrowsDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  $('#check-in').datepicker({
    showOtherMonths: true,
    minDate: 0
  });

  $('#check-out').datepicker({
    showOtherMonths: true,
    minDate: $tomorrowsDate
  });

  // set checkout placeholder = current date
  $('#check-in').attr('placeholder', Date());
  // set checkout placeholder = tomorrows date
  $('#check-out').attr('placeholder', $tomorrowsDate);

  // Price slider
  $('#slider-range').slider({
    range: true,
    step: 100,
    min: 0,
    max: 30000,
    values: [0, 30000],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);

      $("#amount").val("TWD " + $("#slider-range").slider("values", 0) +
        " - TWD " + $("#slider-range").slider("values", 1));
    }
  });

});


/*************************************
          DROP DOWN MENU 
 *************************************/
(function () {

  var dropBtns = document.querySelectorAll('.dropdown');

  function closeOpenItems() {
    var openMenus = document.querySelectorAll('.dropMenu');
    openMenus.forEach(function (menus) {
      menus.classList.remove('show');
    });
  }

  dropBtns.forEach(function (btn) {

    btn.addEventListener('click', function (e) {
      var
        dropContent = btn.querySelector('.dropMenu'),
        shouldOpen = !dropContent.classList.contains('show');
      e.preventDefault();

      // First close all open items.
      closeOpenItems();
      // Check if the clicked item should be opened. It is already closed at this point so no further action is required if it should be closed.
      if (shouldOpen) {
        // Open the clicked item.
        dropContent.classList.add('show');
      }
      e.stopPropagation();
    });


  });

  //   close menus when clicking outside of them
  window.addEventListener('click', function (event) {
    if (event.target != dropBtns) {
      // Moved the code here to its own function.
      closeOpenItems();
    }
  });

})();