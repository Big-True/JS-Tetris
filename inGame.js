function startGame(obj) {
    obj.hold = 0;
    obj.holdUsed = false;
    obj.next = new Array(obj.maxNextCount);
    obj.rng = new rng();
    for (var i = 0; i < obj.maxNextCount; ++i) {
        generateNext(obj);
    }
    newBlock(obj);
    clearInterval(stopId);
    stopId = setInterval('inGame(playerObj);', 1000 / 60);
    NowPos = 'singleGame';
    gameLayout = new layout(windowWidth, windowHeight);
}
function inGame(obj) {
    moveBlock(obj);
    obj.nextTimeDrop += obj.gravity;
    if (canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation)) {
        while (obj.nextTimeDrop >= 1) {
            if (canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation)) {
                obj.posy--;
                obj.minHeight = Math.min(obj.posy, obj.minHeight, obj.nowBlock, obj.rotation);
                obj.nextTimeDrop--;
                obj.lockTime = 0;
            }
            else {
                obj.lockTime++;
                break;
            }
        }
    }
    else {
        obj.lockTime++;
    }
    if (obj.lockTime > obj.maxLockTime) {
        put(obj.posx, obj.posy, obj.nowBlock, obj.rotation);
        clearLine(obj);
        newBlock(obj);
        if (!canBePutted(obj.posx, obj.posy, obj.nowBlock, obj.rotation)) {
            clearInterval(stopId);
        }
    }
    draw(gameCanvas);
}
function canBePutted(x, y, id, rotation) {
    var flag = true;
    for (var i = 0; i < blocks[id][rotation].length; ++i) {
        for (var j = 0; j < blocks[id][rotation][0].length; ++j) {
            if (blocks[id][rotation][i][j] == 1) {
                if (!(x + j >= 0 && x + j < playerObj.width && y - i > 0 && playerObj.map[y - i - 1][x + j] == 0)) {
                    flag = false;
                    break;
                }
            }
        }
    }
    return flag;
}
function put(x, y, id, rotation) {
    for (var i = 0; i < blocks[id][rotation].length; ++i) {
        for (var j = 0; j < blocks[id][rotation][0].length; ++j) {
            if (blocks[id][rotation][i][j] == 1) {
                playerObj.map[y - i - 1][x + j] = id;
            }
        }
    }
}
function moveBlock(obj) {
    for (var i in keyDown) {
        if (keyDown[i]) {
            keyPress[i]++;
        }
        else {
            keyPress[i] = 0;
        }
    }
    if (keyDown[key2str[defaultInputKeys.moveLeft]]) {
        if (keyPress[key2str[defaultInputKeys.moveLeft]] == 1 || keyPress[key2str[defaultInputKeys.moveLeft]] == 1 + defaultUserSettings.DAS || (keyPress[key2str[defaultInputKeys.moveLeft]] > 1 + defaultUserSettings.DAS && (keyPress[key2str[defaultInputKeys.moveLeft]] - 1 - defaultUserSettings.DAS) % defaultUserSettings.ARR == 0)) {
            if (canBePutted(obj.posx - 1, obj.posy, obj.nowBlock, obj.rotation)) {
                obj.posx--;
                obj.lockTime = 0;
            }
        }
    }
    if (keyDown[key2str[defaultInputKeys.moveRight]]) {
        if (keyPress[key2str[defaultInputKeys.moveRight]] == 1 || keyPress[key2str[defaultInputKeys.moveRight]] == 1 + defaultUserSettings.DAS || (keyPress[key2str[defaultInputKeys.moveRight]] > 1 + defaultUserSettings.DAS && (keyPress[key2str[defaultInputKeys.moveRight]] - 1 - defaultUserSettings.DAS) % defaultUserSettings.ARR == 0)) {
            if (canBePutted(obj.posx + 1, obj.posy, obj.nowBlock, obj.rotation)) {
                obj.posx++;
                obj.lockTime = 0;
            }
        }
    }
    if (keyDown[key2str[defaultInputKeys.softDrop]]) {
        if (keyPress[key2str[defaultInputKeys.softDrop]] % obj.softDropSpeed == 1) {
            if (canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation)) {
                obj.posy--;
                obj.lockTime = 0;
            }
        }
    }
    if (keyDown[key2str[defaultInputKeys.hardDrop]]) {
        if (keyPress[key2str[defaultInputKeys.hardDrop]] == 1) {
            var pos = obj.posy;
            for (var i = obj.posy - 1; i >= 0; --i) {
                if (canBePutted(obj.posx, i, obj.nowBlock, obj.rotation)) {
                    pos = i;
                }
                else {
                    break;
                }
            }
            put(obj.posx, pos, obj.nowBlock, obj.rotation);
            clearLine(obj);
            newBlock(obj);
        }
    }
    if (keyDown[key2str[defaultInputKeys.rotateLeft]]) {
        if (keyPress[key2str[defaultInputKeys.rotateLeft]] == 1) {
            if (canBePutted(obj.posx, obj.posy, obj.nowBlock, (obj.rotation + 3) % 4)) {
                obj.rotation = (obj.rotation + 3) % 4;
                obj.lockTime = 0;
            }
        }
    }
    if (keyDown[key2str[defaultInputKeys.rotateRight]]) {
        if (keyPress[key2str[defaultInputKeys.rotateRight]] == 1) {
            if (canBePutted(obj.posx, obj.posy, obj.nowBlock, (obj.rotation + 1) % 4)) {
                obj.rotation = (obj.rotation + 1) % 4;
                obj.lockTime = 0;
            }
        }
    }
    if (keyDown[key2str[defaultInputKeys.hold]]) {
        if (keyPress[key2str[defaultInputKeys.hold]] == 1) {
            if (obj.enableHold) {
                if (obj.hold == 0) {
                    if (canBePutted(obj.posx, obj.posy, obj.next[0], 0)) {
                        obj.hold = obj.nowBlock;
                        newBlock(obj);
                    }
                }
                else {
                    if (!obj.holdUsed && canBePutted(obj.posx, obj.posy, obj.hold, 0)) {
                        var t = obj.nowBlock;
                        obj.nowBlock = obj.hold;
                        obj.hold = t;
                        obj.holdUsed = true;
                        obj.lockTime = 0;
                        obj.rotation = 0;
                    }
                }
            }
        }
    }
    if (keyDown[key2str[defaultInputKeys.restart]]) {
        loadgame();
        switch (playerObj.mode) {
            case '40L':
                load40LMode(playerObj);
                break;
        }
        startGame(playerObj);
    }
}
function newBlock(obj) {
    obj.nowBlock = obj.next[0];
    obj.nextTimeDrop = 0;
    obj.posx = 3;
    obj.posy = obj.height + 2;
    obj.rotation = 0;
    obj.lockTime = 0
    obj.holdUsed = false;
    generateNext(obj);
}
function clearLine(obj) {
    var bigFlag = false;
    do {
        bigFlag = false;
        for (var i = 0; i < obj.maxHeight; ++i) {
            var flag = true;
            for (var j = 0; j < obj.width; ++j) {
                if (obj.map[i][j] == 0) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                for (var h = i; h < obj.maxHeight - 1; ++h) {
                    obj.map[h] = obj.map[h + 1];
                }
                for (var h = 0; h < obj.width; ++h) {
                    obj.map[obj.maxHeight - 1][h] = 0;
                }
                bigFlag = true;
                break;
            }
        }
    } while (bigFlag);
}