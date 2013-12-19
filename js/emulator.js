$(document).ready(function() {
  timer();
  init();

  var isKeyboardHidden = false;
  var currentStep = 0;

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

    // Just a demo navigation, should be removed

    // Recarga
    if(currentStep == 0 && keyCode == 49){
      display(1, "** RECARGA **");
      display(2, "&nbsp;");
      display(3, "Valor da recarga:");
      display(4, "&nbsp;");
      display(5, "$ ");
      return currentStep++;
    }

    // Recarga
    if(currentStep == 0 && keyCode == 50){
      display(1, "** PRIVATE LABEL **");
      display(2, "&nbsp;");
      display(3, "Valor da compra:");
      display(4, "&nbsp;");
      display(5, "$ ");
      return currentStep++;
    }

    // Crédito e débito
    if(currentStep == 0 && keyCode == 51){
      display(1, "** CRÉDITO/DÉBITO **");
      display(2, "&nbsp;");
      display(3, "Valor da operação:");
      display(4, "&nbsp;");
      display(5, "$ ");
      return currentStep++;
    }

    if(currentStep == 0){
      return;
    }

    switch(keyCode) {
      case 8:
        if($("#line-5").text().length > 2)
          display(5, $("#line-5").text().slice(0, -1));
        break;
      case 27:
        currentStep = 0;
        init();
        break;
      case 48:
        display(5, $("#line-5").text() + '0');
        break;
      case 49:
        display(5, $("#line-5").text() + '1');
        break;
      case 50:
        display(5, $("#line-5").text() + '2');
        break;
      case 51:
        display(5, $("#line-5").text() + '3');
        break;
      case 52:
        display(5, $("#line-5").text() + '4');
        break;
      case 53:
        display(5, $("#line-5").text() + '5');
        break;
      case 54:
        display(5, $("#line-5").text() + '6');
        break;
      case 55:
        display(5, $("#line-5").text() + '7');
        break;
      case 56:
        display(5, $("#line-5").text() + '8');
        break;
      case 57:
        display(5, $("#line-5").text() + '9');
        break;
      default:
        return;
     }
  });
});

function init(){
  display(1, "1. RECARGA");
  display(2, "2. PRIVATE LABEL");
  display(3, "3. CRÉDITO E DÉBITO");
  display(4, "&nbsp;");
  display(5, "&nbsp;");
}

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
