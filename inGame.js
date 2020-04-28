function startGame(obj) {
    obj.cleanInfo = new baseCleanData();
    obj.hold = 0;
    obj.holdUsed = false;
    obj.next = new Array(obj.maxNextCount);
    obj.rng = new rng();
    obj.lose = false;
    obj.win = false;
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
    if (!obj.lose && !obj.win) {
        obj.nextTimeDrop += obj.gravity;
        if (canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
            while (obj.nextTimeDrop >= 1) {
                if (canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
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
            put(obj.posx, obj.posy, obj.nowBlock, obj.rotation, obj);
            clearLine(obj);
            newBlock(obj);
            if (!canBePutted(obj.posx, obj.posy, obj.nowBlock, obj.rotation, obj)) {
                obj.lose = true;
            }
        }
    }
    switch (obj.mode) {
        case '40L':
            if (obj.cleanInfo.cleanedLine >= 40 && obj.win == false) {
                obj.win = true;
                var date = new Date()
                obj.endTime = date.getTime();
            }
        case '150L':
            if (obj.cleanInfo.cleanedLine >= 40 && obj.win == false) {
                obj.win = true;
                var date = new Date()
                obj.endTime = date.getTime();
            }
        case '999L':
            if (obj.cleanInfo.cleanedLine >= 40 && obj.win == false) {
                obj.win = true;
                var date = new Date()
                obj.endTime = date.getTime();
            }
    }
    draw(gameCanvas);
}
function canBePutted(x, y, id, rotation, obj) {
    var flag = true;
    for (var i = 0; i < blocks[id][rotation].length; ++i) {
        for (var j = 0; j < blocks[id][rotation][0].length; ++j) {
            if (blocks[id][rotation][i][j] == 1) {
                if (!(x + j >= 0 && x + j < obj.width && y - i > 0 && obj.map[y - i - 1][x + j] == 0)) {
                    flag = false;
                    break;
                }
            }
        }
    }
    return flag;
}
function put(x, y, id, rotation, obj) {
    for (var i = 0; i < blocks[id][rotation].length; ++i) {
        for (var j = 0; j < blocks[id][rotation][0].length; ++j) {
            if (blocks[id][rotation][i][j] == 1) {
                obj.map[y - i - 1][x + j] = id;
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
    if (keyDown[key2str[defaultInputKeys.moveLeft]] && obj.lose == false && obj.win == false) {
        if (keyPress[key2str[defaultInputKeys.moveLeft]] == 1 || keyPress[key2str[defaultInputKeys.moveLeft]] == 1 + defaultUserSettings.DAS || (keyPress[key2str[defaultInputKeys.moveLeft]] > 1 + defaultUserSettings.DAS && (keyPress[key2str[defaultInputKeys.moveLeft]] - 1 - defaultUserSettings.DAS) % defaultUserSettings.ARR == 0)) {
            if (canBePutted(obj.posx - 1, obj.posy, obj.nowBlock, obj.rotation, obj)) {
                obj.posx--;
                obj.lockTime = 0;
            }
        }
    }
    if (keyDown[key2str[defaultInputKeys.moveRight]] && obj.lose == false && obj.win == false) {
        if (keyPress[key2str[defaultInputKeys.moveRight]] == 1 || keyPress[key2str[defaultInputKeys.moveRight]] == 1 + defaultUserSettings.DAS || (keyPress[key2str[defaultInputKeys.moveRight]] > 1 + defaultUserSettings.DAS && (keyPress[key2str[defaultInputKeys.moveRight]] - 1 - defaultUserSettings.DAS) % defaultUserSettings.ARR == 0)) {
            if (canBePutted(obj.posx + 1, obj.posy, obj.nowBlock, obj.rotation, obj)) {
                obj.posx++;
                obj.lockTime = 0;
            }
        }
    }
    if (keyDown[key2str[defaultInputKeys.softDrop]] && obj.lose == false && obj.win == false) {
        if (keyPress[key2str[defaultInputKeys.softDrop]] % obj.softDropSpeed == 1) {
            if (canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
                obj.posy--;
                obj.lockTime = 0;
            }
        }
    }
    if (keyDown[key2str[defaultInputKeys.hardDrop]] && obj.lose == false && obj.win == false) {
        if (keyPress[key2str[defaultInputKeys.hardDrop]] == 1) {
            var pos = obj.posy;
            for (var i = obj.posy - 1; i >= 0; --i) {
                if (canBePutted(obj.posx, i, obj.nowBlock, obj.rotation, obj)) {
                    pos = i;
                }
                else {
                    break;
                }
            }
            put(obj.posx, pos, obj.nowBlock, obj.rotation, obj);
            clearLine(obj);
            newBlock(obj);
            if (!canBePutted(obj.posx, obj.posy, obj.nowBlock, obj.rotation, obj)) {
                obj.lose = true;
            }
        }
    }
    if (keyDown[key2str[defaultInputKeys.rotateLeft]] && obj.lose == false && obj.win == false) {
        if (keyPress[key2str[defaultInputKeys.rotateLeft]] == 1) {
            if (obj.nowBlock == 1) {
                for (var i = 0; i < 5; ++i) {
                    if (canBePutted(obj.posx + kickWallsLeftI[obj.rotation][i][0], obj.posy + kickWallsLeftI[obj.rotation][i][1], obj.nowBlock, (obj.rotation + 3) % 4, obj)) {
                        obj.lockTime = 0;
                        obj.posx += kickWallsLeftI[obj.rotation][i][0];
                        obj.posy += kickWallsLeftI[obj.rotation][i][1];
                        obj.rotation = (obj.rotation + 3) % 4;
                        break;
                    }
                }
            }
            else {
                for (var i = 0; i < 5; ++i) {
                    if (canBePutted(obj.posx + kickWallsLeft[obj.rotation][i][0], obj.posy + kickWallsLeft[obj.rotation][i][1], obj.nowBlock, (obj.rotation + 3) % 4, obj)) {
                        obj.lockTime = 0;
                        obj.posx += kickWallsLeft[obj.rotation][i][0];
                        obj.posy += kickWallsLeft[obj.rotation][i][1];
                        obj.rotation = (obj.rotation + 3) % 4;
                        break;
                    }
                }
            }
        }
    }
    if (keyDown[key2str[defaultInputKeys.rotateRight]] && obj.lose == false && obj.win == false) {
        if (keyPress[key2str[defaultInputKeys.rotateRight]] == 1) {
            if (obj.nowBlock == 1) {
                for (var i = 0; i < 5; ++i) {
                    if (canBePutted(obj.posx + kickWallsRightI[obj.rotation][i][0], obj.posy + kickWallsRightI[obj.rotation][i][1], obj.nowBlock, (obj.rotation + 1) % 4, obj)) {
                        obj.lockTime = 0;
                        obj.posx += kickWallsRightI[obj.rotation][i][0];
                        obj.posy += kickWallsRightI[obj.rotation][i][1];
                        obj.rotation = (obj.rotation + 1) % 4;
                        break;
                    }
                }
            }
            else {
                for (var i = 0; i < 5; ++i) {
                    if (canBePutted(obj.posx + kickWallsRight[obj.rotation][i][0], obj.posy + kickWallsRight[obj.rotation][i][1], obj.nowBlock, (obj.rotation + 1) % 4, obj)) {
                        obj.lockTime = 0;
                        obj.posx += kickWallsRight[obj.rotation][i][0];
                        obj.posy += kickWallsRight[obj.rotation][i][1];
                        obj.rotation = (obj.rotation + 1) % 4;
                        break;
                    }
                }
            }
        }
    }
    if (keyDown[key2str[defaultInputKeys.hold]] && obj.lose == false && obj.win == false) {
        if (keyPress[key2str[defaultInputKeys.hold]] == 1) {
            if (obj.enableHold) {
                if (obj.hold == 0) {
                    if (canBePutted(3, obj.height + 2, obj.next[0], 0, obj)) {
                        obj.hold = obj.nowBlock;
                        obj.holdUsed = true;
                        newBlock(obj);
                    }
                }
                else {
                    if (!obj.holdUsed && canBePutted(3, obj.height + 2, obj.hold, 0, obj)) {
                        var t = obj.nowBlock;
                        obj.nowBlock = obj.hold;
                        obj.hold = t;
                        obj.holdUsed = true;
                        obj.lockTime = 0;
                        obj.rotation = 0;
                        obj.posx = 3;
                        obj.posy = obj.height + 2;
                    }
                }
            }
        }
    }
    if (keyPress[key2str[defaultInputKeys.restart]] == 1) {
        var mode = playerObj.mode;
        loadgame();
        playerObj.mode = mode;
        loadMode(playerObj);
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
                    for (var k = 0; k < obj.width; ++k) {
                        obj.map[h][k] = obj.map[h + 1][k];
                    }
                }
                for (var h = 0; h < obj.width; ++h) {
                    obj.map[obj.maxHeight - 1][h] = 0;
                }
                bigFlag = true;
                obj.cleanInfo.cleanedLine++;
                break;
            }
        }
    } while (bigFlag);
}