var canvas = document.querySelector('.game');
canvas.width = windowWidth;
canvas.height = windowHeight;
var gameCanvas = canvas.getContext('2d');
var stopId = setInterval('draw(gameCanvas);', 500);
var playerObj = {};
var gameLayout = new layout();