let morningBtn = document.getElementById("morning");
let afternoonBtn = document.getElementById("afternoon");
let eveningBtn = document.getElementById("evening");
let nightBtn = document.getElementById("night");
let back = document.getElementById("bgm");
let hand = document.getElementById("clock-box");

morningBtn.addEventListener('click', function() {
  back.style.backgroundImage = 'url(./img/bg_morning.jpg)'
  hand.style.backgroundImage = 'url(./img/phone_morning.png)'
});

afternoonBtn.addEventListener('click', function() {
  back.style.backgroundImage = 'url(./img/bg_afternoon.jpg)'
  hand.style.backgroundImage = 'url(./img/phone_afternoon.png)'
});

eveningBtn.addEventListener('click', function() {
  back.style.backgroundImage = 'url(./img/bg_evening.jpg)'
  hand.style.backgroundImage = 'url(./img/phone_evening.png)'
});

nightBtn.addEventListener('click', function() {
  back.style.backgroundImage = 'url(./img/bg_night.jpg)'
  hand.style.backgroundImage = 'url(./img/phone_night.png)'
});


$(function(){
  $("#night").click(function(){
    $(".logow").css("display", "block");
    $(".font").css("color", "white");
    $(".font-item").children("a").css("color", "white");
    $(".clock").css("color", "white");

  })
  $("#morning").click(function(){
    $(".logow").css("display", "none");
    $(".font").css("color", "black");
    $(".font-item").children("a").css("color", "black");
    $(".clock").css("color", "black");
  })
  $("#afternoon").click(function(){
    $(".logow").css("display", "none");
    $(".font").css("color", "black");
    $(".font-item").children("a").css("color", "black");
    $(".clock").css("color", "black");
  })
  $("#evening").click(function(){
    $(".logow").css("display", "none");
    $(".font").css("color", "black");
    $(".font-item").children("a").css("color", "black");
    $(".clock").css("color", "black");
  })
});





let time = document.querySelectorAll('.clock');

setInterval(() => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  time[0].innerHTML = ('00' + hours).slice(-2);
  time[2].innerHTML = ('00' + minutes).slice(-2);
  time[4].innerHTML = ('00' + seconds).slice(-2);
}, 1000);







