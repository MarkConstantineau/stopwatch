let stopButton = document.getElementById('stop-btn');
let startButton = document.getElementById('start-btn');
let resetButton = document.getElementById('reset-btn');
let lapButton = document.getElementById('lap-btn');
let lapList = document.querySelector('.lap-list');

var miliSeconds = document.getElementById('mili');
var seconds = document.getElementById('seconds');
var mins = document.getElementById('mins');
var myInterval; 

var w = 0;
var x = 0;
var y = 0;
var lapNum = 0; 




startButton.addEventListener('click', () => {
  clearInterval(myInterval);
  myInterval = setInterval (miliStarter, 10)
});

stopButton.addEventListener('click', () => {
 clearInterval(myInterval);
});

resetButton.addEventListener('click', () => {
  clearInterval(myInterval);
  lapNum = 0;
  while (lapList.lastElementChild) {
   lapList.removeChild(lapList.lastElementChild)
 }
  miliSeconds.innerText = "00";
  seconds.innerText = "00.";
  mins.innerText = "00:";

  w = 0;
  x = 0;
  y = 0;

});

lapButton.addEventListener('click', () => {
lapNum++;
const newDiv = document.createElement('div');
newDiv.classList.add("newLap");
const newLi = document.createElement('li');
newLi.innerText = "Lap " + lapNum +  " " + mins.innerText + seconds.innerText + miliSeconds.innerText;
newDiv.appendChild(newLi);
lapList.appendChild(newDiv);
});


function miliStarter() {
  w++; 
  miliSeconds.innerText = w
  if (w < 10) {
    miliSeconds.innerText = "0" + w;
  }
  if (w == 99) {
    w = -1;
    secondStarter();
  }
}


function secondStarter() {
  x++;
  if (x < 10) {
    seconds.innerText = "0" + x + ".";
  } else {
    seconds.innerText = x + ".";
  }
  if (x == 59) {
    x = -1;
    setTimeout(minuteStarter, 1000);
  } 
}

function minuteStarter() {
    y++ 
    if (y < 10) {
      mins.innerText = "0" + y + ":"
    } else {
      mins.innerText = y + ":";
  }
} 


