//letter definitions 5x7
var letters = {
  'a': [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1]],
  'b': [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [0, 1, 1, 0, 1, 1, 0]],
  'c': [[0, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1]],
  'd': [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [0, 1, 1, 1, 1, 1, 0]],
  'e': [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1]],
  'f': [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0]],
  'g': [[0, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 1, 0, 1], [1, 0, 0, 0, 1, 1, 1]],
  'h': [[1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1]],
  'i': [[0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0]],
  'j': [[0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 0]],
  'k': [[1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1]],
  'l': [[1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1]],
  'm': [[1, 1, 1, 1, 1, 1, 1], [0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1]],
  'n': [[1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1]],
  'o': [[0, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [0, 1, 1, 1, 1, 1, 0]],
  'p': [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0]],
  //'q': [[0,1,1,0,0,0,0],[1,0,0,1,0,0,0],[1,0,0,1,0,0,0],[1,0,0,1,0,0,0],[1,1,1,1,1,1,1]],
  'q': [[0, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 0, 1]],
  'r': [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 1, 0, 0], [0, 1, 1, 1, 0, 1, 1]],
  's': [[0, 1, 1, 0, 0, 1, 0], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [0, 1, 0, 0, 1, 1, 0]],
  't': [[1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0]],
  'u': [[1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 0]],
  'v': [[1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [1, 1, 1, 1, 1, 0, 0]],
  'w': [[1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1]],
  'x': [[1, 1, 0, 0, 0, 1, 1], [0, 0, 1, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1]],
  'y': [[1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1], [0, 0, 1, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0]],
  'z': [[1, 0, 0, 0, 0, 1, 1], [1, 0, 0, 0, 1, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 1, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 1]],
  //' ': [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],
  ' ': [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],
  '.': [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0]],
  //':': [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],
  ':': [[0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0]],
  ',': [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0]],
  '-': [[0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0]],
  '_': [[0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1]],
  '/': [[0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0]],
  '#': [[0, 0, 1, 0, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 1, 0, 0]],
  '0': [[0, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 1, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 1, 0, 0, 0, 1], [0, 1, 1, 1, 1, 1, 0]],
  '1': [[0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0]],
  '2': [[0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 1, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [0, 1, 1, 0, 0, 0, 1]],
  '3': [[0, 1, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [0, 1, 1, 0, 1, 1, 0]],
  '4': [[1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1]],
  '5': [[1, 1, 1, 1, 0, 1, 0], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1, 0]],
  '6': [[0, 1, 1, 1, 1, 1, 0], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 1, 1, 0]],
  '7': [[1, 0, 0, 0, 0, 1, 1], [1, 0, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0]],
  '8': [[0, 1, 1, 0, 1, 1, 0], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [0, 1, 1, 0, 1, 1, 0]],
  '9': [[0, 1, 1, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [0, 1, 1, 1, 1, 1, 0]],
  '♥': [[0, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 0, 0, 0]],
  '☺': [[0, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 0, 1, 1], [1, 1, 0, 1, 1, 0, 1], [1, 1, 1, 1, 1, 0, 1], [1, 1, 0, 1, 1, 0, 1], [1, 1, 1, 1, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0]],
  '♦': [[0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 0], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1], [0, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]

};

//'♥':[[0,1,1,1,0,0,0],[1,1,1,1,1,0,0],[1,1,1,1,1,1,0],[0,1,1,1,1,1,1],[1,1,1,1,1,1,0],[1,1,1,1,1,0,0],[0,1,1,1,0,0,0]]


let Array2D = (r, c) => [...Array(r)].map(_ => Array(c).fill(0));

const rowlength = 7;
const collength = 89;

var demo = document.getElementById("demo"),
  matrix = document.getElementById("matrix"),
  base = document.getElementById("base"),
  mat = new Array(), vmat = new Array(),
  rotationL = 0,
  rotationR = 0;

// Positioning Base
var parWidth = window.getComputedStyle(base.parentNode).width;
parWidth = parWidth.slice(0, parWidth.length - 2);
var baseWidth = window.getComputedStyle(base).width;
baseWidth = baseWidth.slice(0, baseWidth.length - 2);
base.style.left = (parWidth / 2) - (baseWidth / 2) + "px";


var start_index = 0;
document.getElementById("startindex").addEventListener("input", function () {
  start_index = this.valueAsNumber;
});

var end_index = -1;
document.getElementById("endindex").addEventListener("input", function () {
  end_index = this.valueAsNumber;
});

var start_anim_index = 0;
document.getElementById("startanimindex").addEventListener("input", function () {
  start_anim_index = this.valueAsNumber;
});

// Filling matrix
function newLine() {
  var line = new Array();
  for (var i = 0; i < collength; i++) {
    var led = document.createElement("div");
    led.onclick = function () { onOff(this) };
    led.onmouseover = function () {
      if (isDrawing) {
        this.className = "led";
      }
    };
    led.className = "led off";
    matrix.appendChild(led);
    line[i] = led;
  }
  return line;
}
for (var i = 0; i < 7; i++)
  mat[i] = newLine();

// Tturning on/off
function onOff(led) {
  if (led.className == "led off")
    led.className = "led";
  else
    led.className = "led off"
}

function write(arr) {
  var i = 0;
  while (i < arr.length) {
    mat[arr[i++]][arr[i++]].className = "led";
  }
}

var ons = new Array(0, 1, 0, 2, 0, 3, 0, 7, 0, 8, 0, 10, 0, 11, 0, 18, 0, 21, 0, 22, 0, 23, 1, 2, 1, 6, 1, 7, 1, 8, 1, 9, 1, 10, 1, 11, 1, 12, 1, 18, 1, 20, 1, 24, 2, 2, 2, 6, 2, 7, 2, 8, 2, 9, 2, 10, 2, 11, 2, 12, 2, 18, 2, 20, 3, 2, 3, 6, 3, 7, 3, 8, 3, 9, 3, 10, 3, 11, 3, 12, 3, 18, 3, 21, 3, 22, 3, 23, 4, 2, 4, 7, 4, 8, 4, 9, 4, 10, 4, 11, 4, 14, 4, 18, 4, 24, 5, 2, 5, 8, 5, 9, 5, 10, 5, 14, 5, 18, 5, 20, 5, 24, 6, 1, 6, 2, 6, 3, 6, 9, 6, 15, 6, 16, 6, 17, 6, 21, 6, 22, 6, 23);
//write(ons);

let vmatrowlength = 0;
function drawText(text_) {
  /*   start_index = document.getElementById("startindex").valueAsNumber;
    end_index = document.getElementById("endindex").valueAsNumber; */
  if (start_index > 0 && (end_index != -1 && end_index < start_index)) {
    alert("End index must be greater than start index or -1(-1==end of text)");
    return;
  }
  //vmatrowlength = 0 + start_index;
  if (start_index > 0) {
    if (end_index == -1) {
      vmatrowlength = start_index;
    } else {
      vmatrowlength = start_index;
    }
  } else {
    if (end_index == -1) {
      vmatrowlength = 0
    } else {
      vmatrowlength = vmatrowlength;
    }
  }
  var text = (text_) ? text_.toLowerCase() : document.getElementById("text").value.toLowerCase();
  text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  var textarr = text.split("");
  if (end_index == -1) {
    //textarr.push(" ");
    //textarr.push(" ");
  }

  //set vmat
  if (end_index == -1) {
    for (var c = 0; c < textarr.length - 1; c++) {
      var arr = letters[textarr[c]];
      vmatrowlength += arr.length;
    }
    vmatrowlength += (textarr.length - 1);
  }
  //vmatrowlength = textarr.length * 5 + (textarr.length - 1);
  for (var i = 0; i < 7; i++) {
    //vmat[i] = (start_index > 0) ? vmat[i].slice(0, start_index).concat(new Array(vmatrowlength-start_index)) : new Array(vmatrowlength);
    if (start_index > 0) {
      if (end_index == -1) {
        vmat[i] = vmat[i].slice(0, start_index).concat(new Array(vmatrowlength + start_index).fill(0));
      } else {
        vmat[i] = vmat[i].slice(0, start_index).concat(new Array(end_index - start_index).fill(0)).concat(vmat[i].slice(end_index));
      }
    } else {
      if (end_index == -1) {
        vmat[i] = new Array(vmatrowlength).fill(0);
      } else {
        vmat[i] = vmat[i].slice(0, start_index).concat(new Array(end_index - start_index).fill(0)).concat(vmat[i].slice(end_index));
      }
    }
  }

  //clearM();
  var offset = 0 + start_index;
  for (var c = 0; c < textarr.length; c++) {
    var arr = letters[textarr[c]];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        let y = (j * collength) % collength;
        let x = i;
        vmat[j][i + offset] = arr[i][j];
      }
    }
    offset += (arr.length + 1);
  }
  //if(rotationL==0 && rotationR==0){
  draw();
  //}
}

function getCoords() {
  var coords = new Array();
  for (var i = 0; i < mat.length; i++)
    for (var j = 0; j < mat[i].length; j++)
      if (mat[i][j].className == "led") {
        coords.push(i);
        coords.push(j);
      }
  demo.innerHTML = coords;
}

function getCoordsChar() {
  var pixels = document.getElementById("pixels").valueAsNumber;
  var coords = Array2D(pixels, 7);
  // print formated array
  /* console.log(JSON.stringify(coords)
    .replace(/(\[\[)(.*)(\]\])/g, '[\n  [$2]\n]').replace(/],/g, '],\n  ')
  ); */
  for (var i = 0; i < mat.length; i++)
    for (var j = 0; j < pixels; j++)
      if (mat[i][j].className == "led") {
        coords[j][i] = 1;
      } else {
        coords[j][i] = 0;
      }
  demo.innerHTML = JSON.stringify(coords);
}

function draw() {
  for (var i = 0; i < mat.length; i++) {
    var max = (end_index == -1) ? (mat[i].length - 1) : end_index;
    for (var j = 0 + start_index; j < max; j++) {
      mat[i][j].className = (vmat[i][j] == 1) ? "led" : "led off";
    }
  }
}

function stop() {
  clearInterval(rotationL);
  clearInterval(rotationR);
  clearInterval(timer);
  rotationL = 0;
  rotationR = 0;
  timer = 0;
}

function rotate(dir) {
  if (dir == "left" && rotationL == 0) {
    rotationL = setInterval(function () { moveLeft() }, 100);
    clearInterval(rotationR);
    rotationR = 0;
  }
  else if (dir == "right" && rotationR == 0) {
    rotationR = setInterval(function () { moveRight() }, 100);
    clearInterval(rotationL);
    rotationL = 0;
  }
}

function moveLeft0() {
  for (var i = 0; i < mat.length; i++) {
    var first = mat[i][0].className;
    for (var j = 0; j < mat[i].length - 1; j++)
      mat[i][j].className = mat[i][j + 1].className;
    mat[i][mat[i].length - 1].className = first;
  }
}

let leftOffset = 0;
function moveLeft() {
  if (vmatrowlength < collength) { moveLeft0(); return; }

  for (var i = 0; i < mat.length; i++) {
    //var first = (vmat[i][0] == 1) ? "led" : "led off";//(vmat[i][0+start_anim_index]==1) ? "led" : "led off";
    var calcLeftOffset = leftOffset + start_anim_index;
    for (var j = calcLeftOffset; j < mat[i].length + leftOffset - 1; j++)
      mat[i][(j - leftOffset) % vmatrowlength].className = (vmat[i][((j - start_anim_index + 1) % (vmatrowlength)) + start_anim_index] == 1) ? "led" : "led off";
    //mat[i][mat[i].length - 1].className = first;
  }
  leftOffset++;
  if (leftOffset >= vmatrowlength) {
    leftOffset = 0;
  }
}

let rightOffset = vmatrowlength;
function moveRight() {
  if (vmatrowlength < collength) { moveRight0(); return; }

  for (var i = 0; i < mat.length; i++) {
    var last = vmat[i][vmat[i].length - 1];
    for (var j = rightOffset; j < mat[i].length + rightOffset - 1; j++)
      mat[i][(j - rightOffset) % vmatrowlength].className = (vmat[i][(j - 1) % vmatrowlength] == 1) ? "led" : "led off";
    mat[i][mat[i].length - 1].className = last;
  }
  rightOffset--;
  if (rightOffset <= 0) {
    rightOffset = vmatrowlength;
  }
}

function moveRight0() {
  for (var i = 0; i < mat.length; i++) {
    var last = mat[i][mat[i].length - 1].className;
    for (var j = mat[i].length - 1; j > 0; j--)
      mat[i][j].className = mat[i][j - 1].className;
    mat[i][0].className = last;
  }
}

function clearM() {
  for (var i = 0; i < mat.length; i++)
    for (var j = 0; j < mat[i].length; j++)
      mat[i][j].className = "led off";
}

function fill() {
  for (var i = 0; i < mat.length; i++)
    for (var j = 0; j < mat[i].length; j++)
      mat[i][j].className = "led";
}

var root = document.querySelector(':root');
var rs = getComputedStyle(root);
var primary_color = 'rgb(' + rs.getPropertyValue('--primary-color') + ')'; //'rs.getPropertyValue('--primary-color');
changeColor = function (value) {
  let [r, g, b] = value.match(/\w\w/g).map(x => +`0x${x}`);
  let rgbvalue = r + ',' + g + ',' + b;
  root.style.setProperty('--primary-color', rgbvalue);
}



///draw listeners
var isDrawing = false;
document.addEventListener("mousedown", function (e) {
  if (e.button == 0) {
    isDrawing = true;
  }
}
);

document.addEventListener("mouseup", function (e) {
  if (e.button == 0) {
    isDrawing = false;
  }
}
);


drawText("♦");


var timer = 0;
function clockRibbon() {
  clearM();

  start_index = 0;
  end_index = -1;
  drawText("18:00");

  start_index = 35;
  end_index = -1;
  drawText("10.Nightwish - ♥ - Kuolema_Tekee_Taiteilijan.mp3");

  start_anim_index = 35;
  rotate('left');

  timer = setInterval(clockTimer, 1000);
}

function changeClockRibbon() {
  clearInterval(timer);
  timer = 0;

  start_index = 35;
  end_index = -1;
  drawText(document.getElementById("text").value);

  timer = setInterval(clockTimer, 1000);
}

function clockTimer() {
  start_index = 0;
  end_index = 35;
  var date = new Date();
  //drawText(date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  drawText(date.toLocaleTimeString([], { minute: "2-digit", second: "2-digit" }));
}


