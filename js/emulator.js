$(document).ready(function() {
  timer();

  var isKeyboardHidden = false;

  // Extra keys
  $('#btn-menu').click(function(){ display(5, 'menu was pressed'); });
  $('#btn-alpha').click(function(){ display(5, 'alpha was pressed'); });
  $('#btn-hide').click(function(){
    display(5, 'hide was pressed');
    $('.extra-keys').fadeOut();
    $('.number-keys').fadeOut(function(){
      $('.device-screen').height(330);
      isKeyboardHidden = true;
    });
  });

  // Number keys
  $('#btn-0').click(function(){ display(5, '0 was pressed'); });
  $('#btn-1').click(function(){ display(5, '1 was pressed'); });
  $('#btn-2').click(function(){ display(5, '2 was pressed'); });
  $('#btn-3').click(function(){ display(5, '3 was pressed'); });
  $('#btn-4').click(function(){ display(5, '4 was pressed'); });
  $('#btn-5').click(function(){ display(5, '5 was pressed'); });
  $('#btn-6').click(function(){ display(5, '6 was pressed'); });
  $('#btn-7').click(function(){ display(5, '7 was pressed'); });
  $('#btn-8').click(function(){ display(5, '8 was pressed'); });
  $('#btn-9').click(function(){ display(5, '9 was pressed'); });
  $('#btn-asterisc').click(function(){ display(5, '* was pressed'); });
  $('#btn-sharp').click(function(){ display(5, '# was pressed'); });

  // Action keys
  $('#btn-cancel').click(function(){
    display(5, 'cancel was pressed');
    if(isKeyboardHidden){
      $('.device-screen').height(130);
      $('.extra-keys').fadeIn();
      $('.number-keys').fadeIn(function(){
        isKeyboardHidden = false;
      });
    }
  });
  $('#btn-back').click(function(){ display(5, 'back was pressed'); });
  $('#btn-enter').click(function(){ display(5, 'enter was pressed'); });
});

function display(line, message){
  $('#line-' + line).html(message);
}

// Status bar
function timer(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = zeroPad(m);
  $('#timer').html(h + ":" + m);
  t = setTimeout(function() { timer() }, 500);
}

function zeroPad(i){
  if(i < 10) { i = "0" + i; }
  return i;
}
