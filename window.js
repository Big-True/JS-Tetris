var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
window.onresize = function () {
    changeWindowSize();
    switch (NowPos) {
        case 'singleGame':
            gameLayout = new layout(windowWidth, windowHeight);
            break;
    }
    draw(gameCanvas);
}
function changeWindowSize() {
    canvas.width = windowWidth = window.innerWidth;
    canvas.height = windowHeight = window.innerHeight;
}