function switchUp() {
  if ($('.switch button').attr('class') === 'on') {
    $('.switch button').attr('class', 'off')
  }
  else {
    $('.switch button').attr('class', 'on')
  }
};

function switchLight() {
  if ($('.switch button').attr('class') === 'on') {
    $('body').css('background-color', 'white')
    $('.status').html("It's so bright in here!").css('color', 'black')
  }
  else {
    $('body').css('background-color', 'black')
    $('.status').html('Hey, who turned off the lights?').css('color', 'white')
  }
};


$(document).on('ready', function() {

  $('.switch button').on('click', switchUp);
  $('.switch button').on('click', switchLight);

});
