function clickSettingsMenu(x, y) {
    var mainMenuPerHeight = windowHeight / defaultSettingOptions.length / 8 * 7;
    var mainMenuPerWidth = Math.min(windowWidth / 2, 4 * mainMenuPerHeight);
    var mainMenuPerHeight2 = windowHeight / defaultSettingOptions2.length / 8 * 7;
    var mainMenuPerWidth2 = Math.min(windowWidth / 2, 4 * mainMenuPerHeight2);
    settingsPos = -1;
    if (y > windowHeight / 8 * 7 && x > (windowWidth - (mainMenuPerWidth + mainMenuPerWidth2) / 2) / 2 && x < (windowWidth + (mainMenuPerWidth + mainMenuPerWidth2) / 2) / 2) {
        baseMenu();
        return;
    }
    if (x > (windowWidth / 2 - mainMenuPerWidth) / 2 && x < (windowWidth / 2 + mainMenuPerWidth) / 2) {
        var item = Math.floor(y / mainMenuPerHeight);
        if (item < 11) {
            settingsPos = item;
        }
    }
    if (x > (windowWidth / 2 * 3 - mainMenuPerWidth2) / 2 && x < (windowWidth / 2 * 3 + mainMenuPerWidth2) / 2) {
        var item = Math.floor(y / mainMenuPerHeight2);
        switch (item) {
            case 0:
                var i = prompt('重力 可以输表达式如1/60', gameSettings.gravity)
                if (eval(i) != null) {
                    gameSettings.gravity = eval(i);
                }
                break;
            case 1:
                var i = prompt('软降间隔', gameSettings.softDropSpeed)
                if (eval(i) != null) {
                    gameSettings.softDropSpeed = eval(i);
                }
                break;
            case 2:
                gameSettings.enableGhost = !gameSettings.enableGhost;
                break;
            case 3:
                gameSettings.enableHardDrop = !gameSettings.enableHardDrop;
                break;
            case 4:
                gameSettings.enableHold = !gameSettings.enableHold;
                break;
            case 5:
                var i = prompt('暂存数量', gameSettings.holdCount)
                if (eval(i) != null) {
                    gameSettings.holdCount = eval(i);
                }
                break;
            case 6:
                gameSettings.singleRotate = !gameSettings.singleRotate;
                break;
            case 7:
                gameSettings.enableRotate180 = !gameSettings.enableRotate180;
                break;
            case 8:
                gameSettings.enableNext = !gameSettings.enableNext;
                break;
            case 9:
                var i = prompt('预览数量', gameSettings.nextCount)
                if (eval(i) != null) {
                    gameSettings.nextCount = eval(i);
                    gameSettings.maxNextCount = gameSettings.nextCount * 2;
                }
                break;
            case 10:
                gameSettings.enableBlockSpace = !gameSettings.enableBlockSpace;
                break;
            case 11:
                var i = prompt('ARR', gameSettings.ARR)
                if (eval(i) != null) {
                    gameSettings.ARR = eval(i);
                }
                break;
            case 12:
                var i = prompt('DAS', gameSettings.DAS)
                if (eval(i) != null) {
                    gameSettings.DAS = eval(i);
                }
                break;
        }
        if (window.localStorage) {
            window.localStorage.gameSettings = JSON.stringify(gameSettings);
        }
    }
}
function settingMenu() {
    NowPos = 'settings';
}