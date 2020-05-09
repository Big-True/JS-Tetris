function clickBaseMenu(x, y) {
    var mainMenuPerHeight = windowHeight / 4 * 3 / defaultMenuOptions.length;
    var mainMenuPerWidth = Math.min(windowWidth, 4 * mainMenuPerHeight);
    if (x > (windowWidth - mainMenuPerWidth) / 2 && x < (windowWidth + mainMenuPerWidth) / 2 && y > windowHeight / 4) {
        var item = Math.floor((y - windowHeight / 4) / mainMenuPerHeight);
        switch (item) {
            case 0:
                singleMenu();
                break;
            case 1:
                multiMenu();
                break;
            case 2:
                settingMenu();
                break;
            case 3:
                moreMenu();
                break;
            case 4:
                window.open('http://www.beian.miit.gov.cn');
                break;
        }
    }
}
function baseMenu() {
    NowPos = 'menu'
}