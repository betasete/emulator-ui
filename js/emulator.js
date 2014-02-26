var alphaHitCount = 0;
var currentStep = 0;
var currentKey = 0;
  
$(document).ready(function() {
  timer();
  init();

  $('.device-keyboard button small').fastClick(function (e) {
    $(e.target).parents('button').click();
  });  

  $('.device-keyboard button').fastClick(function (e) {
    var keyValue = e.target.id.split('-')[1];
    var keyCode = charCode(keyValue)

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
      display(0, "** RECARGA **");
      display(1, "&nbsp;");
      display(2, "Valor da recarga:");
      display(3, "&nbsp;");
      display(4, "$ ");
      return currentStep++;
    }

    // Recarga
    if(currentStep == 0 && keyCode == 50){
      display(0, "** PRIVATE LABEL **");
      display(1, "&nbsp;");
      display(2, "Valor da compra:");
      display(3, "&nbsp;");
      display(4, "$ ");
      return currentStep++;
    }

    // Crédito e débito
    if(currentStep == 0 && keyCode == 51){
      display(0, "** CRÉDITO/DÉBITO **");
      display(1, "&nbsp;");
      display(2, "Valor da operação:");
      display(3, "&nbsp;");
      display(4, "$ ");
      return currentStep++;
    }

    if(currentStep == 0){
      return;
    }

    if(keyCode != 8 && keyCode != 13 && keyCode != 777 && keyCode != 888){
      currentKey = keyCode;
      alphaHitCount = 0;
    }

    switch(keyCode) {
      case 8:
        backspace();
        break;
      case 27:
        init();
        break;
      case 35:
        display(4, $("#line-4").text() + '#');
        break;
      case 46:
        display(4, $("#line-4").text() + '.');
        break;
      case 48:
        display(4, $("#line-4").text() + '0');
        break;
      case 49:
        display(4, $("#line-4").text() + '1');
        break;
      case 50:
        display(4, $("#line-4").text() + '2');
        break;
      case 51:
        display(4, $("#line-4").text() + '3');
        break;
      case 52:
        display(4, $("#line-4").text() + '4');
        break;
      case 53:
        display(4, $("#line-4").text() + '5');
        break;
      case 54:
        display(4, $("#line-4").text() + '6');
        break;
      case 55:
        display(4, $("#line-4").text() + '7');
        break;
      case 56:
        display(4, $("#line-4").text() + '8');
        break;
      case 57:
        display(4, $("#line-4").text() + '9');
        break;
      case 888:
        if(currentKey > 0 && currentKey != 35) handleAlphaKey();
      default:
        return;
     }
  });
});

function handleAlphaKey(){
  var alphaKeys = {
    46 : [",", "'", "\"", "."],
    48 : ["-", "_", " ", "0"],
    49 : ["Q", "q", "Z", "z", ".", "1"],
    50 : ["A", "a", "B", "b", "C", "c", "2"],
    51 : ["D", "d", "E", "e", "F", "f", "3"],
    52 : ["G", "g", "H", "h", "I", "i", "4"],
    53 : ["J", "j", "K", "k", "L", "l", "5"],
    54 : ["M", "m", "N", "n", "O", "o", "6"],
    55 : ["P", "p", "R", "r", "S", "s", "7"],
    56 : ["T", "t", "U", "u", "V", "v", "8"],
    57 : ["W", "w", "X", "x", "Y", "y", "9"]
  };

  display(4, $("#line-4").text().slice(0, -1));
  display(4, $("#line-4").text() + alphaKeys[currentKey][alphaHitCount++]);

  if(alphaKeys[currentKey].length == alphaHitCount) { alphaHitCount = 0; }
}

function backspace(){
  if($("#line-4").text().length > 2){
    display(4, $("#line-4").text().slice(0, -1));
    
    alphaHitCount = 0;

    if($("#line-4").text().length > 2)
      currentKey = ($("#line-4").text().slice(-1).charCodeAt(0));
    else
      currentKey = 0;
  }
}

function init(){
  currentStep = 0;
  currentKey = 0;

  display(0, "MENU DE SERVIÇOS");
  display(1, "&nbsp;");
  display(2, "1. RECARGA");
  display(3, "2. PRIVATE LABEL");
  display(4, "3. CRÉDITO E DÉBITO");
  display(5, "&nbsp;");
  display(6, "&nbsp;");
  display(7, "&nbsp;");
}

function charCode(key){
  switch(key) {
    case "back":
      return 8;
    case "enter":
      return 13;
    case "cancel":
      return 27;
    case "sharp":
      return 35;
    case "period":
      return 46;
    case "func":
      return 777;
    case "alpha":
      return 888;
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
