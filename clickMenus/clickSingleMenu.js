function clickSingleMenu(x, y) {
    var mainMenuPerHeight = windowHeight / defaultModeOptions.length;
    var mainMenuPerWidth = 4 * mainMenuPerHeight > windowWidth ? windowWidth : 4 * mainMenuPerHeight;
    if (x > (windowWidth - mainMenuPerWidth) / 2 && x < (windowWidth + mainMenuPerWidth) / 2) {
        var item = Math.floor(y / mainMenuPerHeight);
        switch (item) {
            case 0:
                loadgame();
                playerObj.mode = '40L'
                loadMode(playerObj);
                startGame(playerObj);
                break;
            case 1:
                loadgame();
                playerObj.mode = '150L'
                loadMode(playerObj);
                startGame(playerObj);
                break;
            case 2:
                loadgame();
                playerObj.mode = '999L'
                loadMode(playerObj);
                startGame(playerObj);
                break;
            case 3:
                loadgame();
                playerObj.mode = 'marathon'
                loadMode(playerObj);
                startGame(playerObj);
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                baseMenu();
                break;
        }
    }
}
function singleMenu() {
    NowPos = 'singleMenu'
}