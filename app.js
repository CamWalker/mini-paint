$('document').ready(function () {
  var $box = $('.box');
  var $reset = $('#reset');
  var $color = '';
  var $mouseDown = false



  $box.on('mousedown', function() {
    $mouseDown = true;
  }

  $box.on('mouseup', function() {
    $mouseDown = false;
  }

  $box.on('mouseenter', function() {
    if ($mouseDown === true) {
      $(this).addClass($color);
    }
  })


  $box.on('dblclick', function() {
    $(this).removeClass($color);
  })

  $reset.on('click', function () {
    $box.removeClass();
  })

  $('#red').on('click', function () {
    $color = 'red';
  })
  $('#green').on('click', function () {
    $color = 'green';
  })
  $('#blue').on('click', function () {
    $color = 'blue';
  })
  $('#yellow').on('click', function () {
    $color = 'yellow';
  })
  $('#white').on('click', function () {
    $color = 'white';
  })

})
