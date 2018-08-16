var con = document.getElementById('container')
var box = document.getElementById('box')
var arr = box.getElementsByTagName('div')
var radius = calculateRadius(129, 20);

for ( var i = 0; i <arr.length; i++){
  arr[i].style.background = 'url("./images/p' + (i + 1) + '.png") no-repeat';
  arr[i].style.WebkitTransform = "rotateY(" + 360 / arr.length * i + 'deg) translatez(' + radius + 'px)';
}

function calculateRadius(length, totalNum) {
  return Math.round(length / (2 * Math.tan(Math.PI / totalNum))) - 3;
}

var audio = document.getElementById('audio');
$('#laba').on('tap', function(e) {
  if (audio.paused) {
    audio.play();
    $('#laba').text('🎺');
  } else {
    audio.pause();
    $('#laba').text('⏸');
  }
})


var startX = 0,
  x = 0,
  endX = 0;
var flag = true;

$('#box').on('touchstart', function (e) {
  e.preventDefault()
  // console.log(e)
  var touch = e.changedTouches[0].pageX
  startX = touch - x
})

$('#box').on('touchmove', function (e) {
  if (flag){
    e.preventDefault()
    endX= e.changedTouches[0].pageX
    x = endX - startX
    box.style.transform = 'rotateY(' + x + 'deg)';
  } else {
    return false
  }
})

$('#box').on('touchmove', function (e) {
  console.log('over')
})


window.addEventListener('deviceorientation', function (e) {
  var gamma = e.gamma
  if(Math.abs(gamma) > 1){
    flag = false
    box.style.transform = 'rotateY(' + gamma * 3 + 'deg)';
  } else {
    flag = true
  }
})