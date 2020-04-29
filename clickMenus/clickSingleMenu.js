function clickSingleMenu(x, y) {
    var mainMenuPerHeight = windowHeight / defaultModeOptions.length;
    var mainMenuPerWidth = 4 * mainMenuPerHeight > windowWidth ? windowWidth : 4 * mainMenuPerHeight;
    if (x > (windowWidth - mainMenuPerWidth) / 2 && x < (windowWidth + mainMenuPerWidth) / 2) {
        var item = Math.floor(y / mainMenuPerHeight);
        loadgame();
        switch (item) {
            case 0:
                playerObj.mode = '40L'
                break;
            case 1:
                playerObj.mode = '150L'
                break;
            case 2:
                playerObj.mode = '999L'
                break;
            case 3:
                playerObj.mode = 'marathon'
                break;
            case 4:
                playerObj.mode = '150s'
                break;
            case 5:
                playerObj.mode = 'C4W'
                break;
            case 6:
                playerObj.mode = 'S4W'
                break;
            case 7:
                baseMenu();
                break;
        }
        loadMode(playerObj);
        startGame(playerObj);
    }
}
function singleMenu() {
    NowPos = 'singleMenu'
}