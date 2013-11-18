$(document).ready(function() {
  timer();

  var isKeyboardHidden = false;

  $('.device-keyboard button').fastClick(function (e) {
    var keyValue = e.target.id.split('-')[1];
    var keyCode = charCode(keyValue)
    var msg = keyCode + ' was pressed';

    try{
      // Android call
      Android.setKeyCode(keyCode);
    }
    catch(err){
      console.log(err);
    }

    display(5, msg);

    switch(keyCode) {
      case 666:
        // hide
        hideKeyboard();
        break;
      case 27:
        // cancel
        displayKeyboard();
        break;
      default:
        return;
    }
  });

  // Style options
  var customStyle = window.location.hash;

  if(customStyle.indexOf("#") > 0) {
    $("a").removeClass("selected");
    $("#custom-emulator").attr("href", "css/" + customStyle.substring(1) + ".css");
    $("#custom-" + customStyle.substring(1)).addClass("selected");
  }

  $("#options li a").click(function() {
    $("#custom-emulator").attr("href",$(this).attr('rel'));
    $("a").removeClass("selected");
    $(this).addClass("selected");
  });
});

function charCode(key){
  switch(key) {
    case "back":
      return 8;
    case "enter":
      return 13;
    case "cancel":
      return 27;
    case "hide":
      return 666;
    case "menu":
      return 777;
    case "alpha":
      return 888;
    case "hide":
      return 999;
    default:
      return key.charCodeAt(0);
  }
}

function hideKeyboard(){
  $('.extra-keys').fadeOut();
  $('.number-keys').fadeOut(function(){
    $('.device-screen').height(348);
    isKeyboardHidden = true;
  });
}

function displayKeyboard(){
  if(isKeyboardHidden){
    $('.device-screen').height(130);
    $('.extra-keys').fadeIn();
    $('.number-keys').fadeIn(function(){
      isKeyboardHidden = false;
    });
  }
}

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
