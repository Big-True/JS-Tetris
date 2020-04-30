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
                var i = prompt('重力 可以输表达式如1/60', defaultGameSettings.gravity)
                if (eval(i) != null) {
                    defaultGameSettings.gravity = eval(i);
                }
                break;
            case 1:
                var i = prompt('软降间隔', defaultGameSettings.softDropSpeed)
                if (eval(i) != null) {
                    defaultGameSettings.softDropSpeed = eval(i);
                }
                break;
            case 2:
                defaultGameSettings.enableGhost = !defaultGameSettings.enableGhost;
                break;
            case 3:
                defaultGameSettings.enableHardDrop = !defaultGameSettings.enableHardDrop;
                break;
            case 4:
                defaultGameSettings.enableHold = !defaultGameSettings.enableHold;
                break;
            case 5:
                defaultGameSettings.singleRotate = !defaultGameSettings.singleRotate;
                break;
            case 6:
                defaultGameSettings.enableRotate180 = !defaultGameSettings.enableRotate180;
                break;
            case 7:
                defaultGameSettings.enableNext = !defaultGameSettings.enableNext;
                break;
            case 8:
                var i = prompt('预览数量', defaultGameSettings.gravity)
                if (eval(i) != null) {
                    defaultGameSettings.nextCount = eval(i);
                    defaultGameSettings.maxNextCount = defaultGameSettings.nextCount;
                }
                break;
            case 9:
                var i = prompt('ARR', defaultGameSettings.ARR)
                if (eval(i) != null) {
                    defaultUserSettings.ARR = eval(i);
                }
                break;
            case 10:
                var i = prompt('DAS', defaultGameSettings.ARR)
                if (eval(i) != null) {
                    defaultUserSettings.DAS = eval(i);
                }
                break;
        }
    }
}
function settingMenu() {
    NowPos = 'settings';
}