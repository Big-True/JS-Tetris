var canvas = document.querySelector('.game');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var gameCanvas = canvas.getContext('2d');
gameCanvas.fillStyle = 'rgb(255,255,255)'
gameCanvas.fillRect(0, 0, width / 2, height / 2);
