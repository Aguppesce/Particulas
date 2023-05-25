//===============CLASE 07 - LUNES-22/05/2023===============
windows.human = false;

var canvasEl = document.querySelector('.fireworks');
var ctx = canvasEl.getContext('2d');
var numberOfParticules = 30;
var pointerX = 0;
var pointerY = 0;
var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBFF38C'];

function setCanvasSize(){
    canvasEl.width = window.innerWidth * 2;
    canvasEl.height = window.innerHeight * 2;
    canvasEl.style.width = windows.innerWidth + 'px';
    canvasEl.style.height = windows.innerHeight + 'px';
    canvasEl.getContext('2d').scale(2, 2);
}