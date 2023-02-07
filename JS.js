const clock = document.getElementById("#clock"); 
function getclock() {
  const date = new Date;
  const hours = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${min}:${sec}`;
}
getclock();
setInterval(getclock, 1000);

let morningBtn = document.getElementById("morning");
let afternoonBtn = document.getElementById("afternoon");
let eveningBtn = document.getElementById("evening");
let nightBtn = document.getElementById("night");
let back = document.getElementById("bgm");
let hand = document.getElementById("clock-box");
let logob = document.querySelector(".logob")
let logow = document.querySelector(".logow")
let font = document.querySelector(".font")



morningBtn.addEventListener('click', function() {
  back.style.backgroundImage = 'url(./img/bg_morning.jpg)'
  hand.style.backgroundImage = 'url(./img/phone_morning.png)'
  logow.style.display = "none"
  logob.style.display = "block"
});

afternoonBtn.addEventListener('click', function() {
  back.style.backgroundImage = 'url(./img/bg_afternoon.jpg)'
  hand.style.backgroundImage = 'url(./img/phone_afternoon.png)'
  logow.style.display = "none"
  logob.style.display = "block"
});

eveningBtn.addEventListener('click', function() {
  back.style.backgroundImage = 'url(./img/bg_evening.jpg)';
  hand.style.backgroundImage = 'url(./img/phone_evening.png)';
  logow.style.display = "none"
  logob.style.display = "block"
});

nightBtn.addEventListener('click', function() {
  back.style.backgroundImage = 'url(./img/bg_night.jpg)'
  hand.style.backgroundImage = 'url(./img/phone_night.png)'
  logob.style.display = "none"
  logow.style.display = "block"
  document.getElementsByClassName(".font").style.color = '#fff';
});





