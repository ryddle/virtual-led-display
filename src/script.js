var output = document.getElementById("output"),
  matrix = document.getElementById("matrix"),
  vledcontainer = document.getElementById("vledcontainer"),
  vledcontainer2 = document.getElementById("vledcontainer2");
  base = document.getElementById("base");


//var ons = new Array(0, 1, 0, 2, 0, 3, 0, 7, 0, 8, 0, 10, 0, 11, 0, 18, 0, 21, 0, 22, 0, 23, 1, 2, 1, 6, 1, 7, 1, 8, 1, 9, 1, 10, 1, 11, 1, 12, 1, 18, 1, 20, 1, 24, 2, 2, 2, 6, 2, 7, 2, 8, 2, 9, 2, 10, 2, 11, 2, 12, 2, 18, 2, 20, 3, 2, 3, 6, 3, 7, 3, 8, 3, 9, 3, 10, 3, 11, 3, 12, 3, 18, 3, 21, 3, 22, 3, 23, 4, 2, 4, 7, 4, 8, 4, 9, 4, 10, 4, 11, 4, 14, 4, 18, 4, 24, 5, 2, 5, 8, 5, 9, 5, 10, 5, 14, 5, 18, 5, 20, 5, 24, 6, 1, 6, 2, 6, 3, 6, 9, 6, 15, 6, 16, 6, 17, 6, 21, 6, 22, 6, 23);
//write(ons);

var root = document.querySelector(':root');
var rs = getComputedStyle(root);
var primary_color = 'rgb(' + rs.getPropertyValue('--primary-color') + ')'; //'rs.getPropertyValue('--primary-color');
changeColor = function (value) {
  let [r, g, b] = value.match(/\w\w/g).map(x => +`0x${x}`);
  let rgbvalue = r + ',' + g + ',' + b;
  root.style.setProperty('--primary-color', rgbvalue);
}

var vledDiplay1 = new XVirtualLedDisplay(vledcontainer, {width:1200, height:60});
vledDiplay1.drawText("♦|♦|♦|♦|♦|♦|♦|♦|♦|♦|♦|♦|♦|♦|♦|");

var vledDiplay2 = new XVirtualLedDisplay(vledcontainer2, {width:1200, height:120});
vledDiplay2.drawText("♥♦|");

var vledDiplay3 = new XVirtualLedDisplay(vledcontainer3, {width:1200, height:180});
vledDiplay3.drawText("♥♦|");

var selectedVledDisplay = vledDiplay1;

getCoordsChar(document.getElementById('pixels').valueAsNumber);


var vledSel = document.getElementsByName("vled");
vledSel.forEach(element => {
  element.addEventListener('change', function() {
    if (this.checked) {
      selectedVledDisplay = eval(this.value);
    }
  });
})

function getCoordsChar(pixels) {
  output.innerText = selectedVledDisplay.getCoordsChar(pixels);
}

function rotate(direction) {
  selectedVledDisplay.rotate(direction);
}

function stop() {
  selectedVledDisplay.stop();
}

function fill() {
  selectedVledDisplay.fill();
}

function drawText(text, start_index, end_index) {
  selectedVledDisplay.drawText(text, start_index, end_index);
}

var timer = 0;
function clockRibbon() {
  selectedVledDisplay.clearM();

  //start_index = 0;
  //end_index = -1;
  selectedVledDisplay.drawText("18:00", 0, -1);

  //start_index = 35;
  //end_index = -1;
  selectedVledDisplay.drawText("10.Nightwish - ♥ - Kuolema_Tekee_Taiteilijan.mp3", 30, -1);


  //start_anim_index = 35;
  selectedVledDisplay.rotate('left', 30);

  timer = setInterval(clockTimer, 1000);
}

function changeClockRibbon() {
  selectedVledDisplay.stop();
  clearInterval(timer);
  timer = 0;

  //start_index = 35;
  //end_index = -1;
  selectedVledDisplay.drawText(document.getElementById("text").value, 30, -1);
  selectedVledDisplay.rotate('left', 30);

  timer = setInterval(clockTimer, 1000);
}

function clockTimer() {
  //start_index = 0;
  //end_index = 35;
  var date = new Date();
  selectedVledDisplay.drawText(date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), 0, 30);
  //selectedVledDisplay.drawText(date.toLocaleTimeString([], { minute: "2-digit", second: "2-digit" }), 0, 30);
}


function clearVLD() {
  selectedVledDisplay.clearM();
  clearInterval(timer);
  timer = 0;
}