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
function singleGameMenu(){
    NowPos='singleMenu'
}
function MuitiGameMenu(){
    alert('康明宋恩');
}
function settingMenu(){
    NowPos='settings';
}
function moreMenu(){
    NowPos='More';
}