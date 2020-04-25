var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
window.onresize = function () {
    changeWindowSize();
}
function changeWindowSize() {
    canvas.width = windowWidth = window.innerWidth;
    canvas.height = windowHeight = window.innerHeight;
    draw(gameCanvas);
}