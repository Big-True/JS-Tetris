function clickMoreMenu(x, y) {
    var mainMenuPerHeight = windowHeight / defaultModeOptions.length;
    var mainMenuPerWidth = Math.min(windowWidth, 4 * mainMenuPerHeight);
    if (x > (windowWidth - mainMenuPerWidth) / 2 && x < (windowWidth + mainMenuPerWidth) / 2 && y > (windowHeight - mainMenuPerHeight) / 2 && y < (windowHeight + mainMenuPerHeight) / 2) {
        baseMenu();
    }
}
function moreMenu() {
    NowPos = 'more';
}