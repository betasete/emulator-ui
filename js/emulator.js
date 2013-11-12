$(document).ready(function() {
  timer();

  var isKeyboardHidden = false;

  // Extra keys
  $('#btn-menu').fastClick(function () { display(5, 'menu was pressed'); });
  $('#btn-alpha').fastClick(function () { display(5, 'alpha was pressed'); });
  $('#btn-hide').fastClick(function () {
    display(5, 'hide was pressed');
    $('.extra-keys').fadeOut();
    $('.number-keys').fadeOut(function(){
      $('.device-screen').height(330);
      isKeyboardHidden = true;
    });
  });

  // Number keys
  $('#btn-0').fastClick(function () { display(5, '0 was pressed'); });
  $('#btn-1').fastClick(function () { display(5, '1 was pressed'); });
  $('#btn-2').fastClick(function () { display(5, '2 was pressed'); });
  $('#btn-3').fastClick(function () { display(5, '3 was pressed'); });
  $('#btn-4').fastClick(function () { display(5, '4 was pressed'); });
  $('#btn-5').fastClick(function () { display(5, '5 was pressed'); });
  $('#btn-6').fastClick(function () { display(5, '6 was pressed'); });
  $('#btn-7').fastClick(function () { display(5, '7 was pressed'); });
  $('#btn-8').fastClick(function () { display(5, '8 was pressed'); });
  $('#btn-9').fastClick(function () { display(5, '9 was pressed'); });
  $('#btn-asterisc').fastClick(function () { display(5, '* was pressed'); });
  $('#btn-sharp').fastClick(function () { display(5, '# was pressed'); });

  // Action keys
  $('#btn-cancel').fastClick(function () {
    display(5, 'cancel was pressed');
    if(isKeyboardHidden){
      $('.device-screen').height(130);
      $('.extra-keys').fadeIn();
      $('.number-keys').fadeIn(function(){
        isKeyboardHidden = false;
      });
    }
  });
  $('#btn-back').fastClick(function () { display(5, 'back was pressed'); });
  $('#btn-enter').fastClick(function () { display(5, 'enter was pressed'); });
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

// fastclick
(function(e){e.fn.fastClick=function(t){return e(this).each(function(){e.FastButton(e(this)[0],t)})};e.FastButton=function(t,n){var r,i;var s=function(){e(t).unbind("touchend");e("body").unbind("touchmove.fastClick")};var o=function(t){t.stopPropagation();s();n.call(this,t);if(t.type==="touchend"){e.clickbuster.preventGhostClick(r,i)}};var u=function(e){if(Math.abs(e.originalEvent.touches[0].clientX-r)>10||Math.abs(e.originalEvent.touches[0].clientY-i)>10){s()}};var a=function(n){n.stopPropagation();e(t).bind("touchend",o);e("body").bind("touchmove.fastClick",u);r=n.originalEvent.touches[0].clientX;i=n.originalEvent.touches[0].clientY};e(t).bind({touchstart:a,click:o})};e.clickbuster={coordinates:[],preventGhostClick:function(t,n){e.clickbuster.coordinates.push(t,n);window.setTimeout(e.clickbuster.pop,2500)},pop:function(){e.clickbuster.coordinates.splice(0,2)},onClick:function(t){var n,r,i;for(i=0;i<e.clickbuster.coordinates.length;i+=2){n=e.clickbuster.coordinates[i];r=e.clickbuster.coordinates[i+1];if(Math.abs(t.clientX-n)<25&&Math.abs(t.clientY-r)<25){t.stopPropagation();t.preventDefault()}}}};e(function(){if(document.addEventListener){document.addEventListener("click",e.clickbuster.onClick,true)}else if(document.attachEvent){document.attachEvent("onclick",e.clickbuster.onClick)}})})(jQuery)
