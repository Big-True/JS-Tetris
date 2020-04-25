var canvas = document.querySelector('.game');
canvas.width = windowWidth;
canvas.height = windowHeight;
var gameCanvas = canvas.getContext('2d');
drawMenu(gameCanvas);