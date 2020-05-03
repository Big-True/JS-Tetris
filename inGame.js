function startGame(obj) {
    obj.cleanInfo = new baseCleanData();
    obj.hold = 0;
    obj.holdUsed = false;
    obj.next = new Array(obj.maxNextCount);
    obj.rng = new rng();
    obj.lose = false;
    obj.win = false;
    obj.moveUsed = 0;
    obj.minHeight = 0;
    obj.lastCombo = -1;
    obj.ready = 3;
    obj.passedTime = 0;
    obj.pause = false;
    if (obj.mode == 'marathon') {
        obj.gravity == 1 / 60;
    }
    for (var i = 0; i < obj.maxNextCount; ++i) {
        generateNext(obj);
    }
    newBlock(obj);
    clearInterval(stopId);
    stopId = setInterval('inGame(playerObj);', 1000 / 60);
    obj.startId = setInterval('if(playerObj.pause==false){playerObj.ready--};if(playerObj.ready==0){clearInterval(playerObj.startId);var date=new Date();playerObj.startTime=playerObj.endTime=date.getTime();}', 1000);
    NowPos = 'singleGame';
    gameLayout = new layout(windowWidth, windowHeight);
}
function inGame(obj) {
    gameInput(obj);
    if (!obj.lose && !obj.win && obj.ready == 0 && obj.pause == false) {
        obj.passedTime += 1000 / 60;
        if (obj.mode == '150s' && obj.passedTime > 1000 * obj.goal) {
            obj.win = true;
        }
        if (obj.mode == 'marathon') {
            if (obj.cleanInfo.cleanedLine < 601) {
                obj.gravity = parseInt(obj.cleanInfo.cleanedLine / 10) / 60;
                if (obj.gravity == 0) {
                    obj.gravity = 1 / 60;
                }
            }
            else {
                obj.gravity = parseInt((obj.cleanInfo.cleanedLine - 600) / 20);
                if (obj.gravity == 0) {
                    obj.gravity = 1;
                }
                if (obj.gravity > 20) {
                    obj.gravity = 20;
                }
            }
        }
        obj.nextTimeDrop += obj.gravity;
        if (canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
            while (obj.nextTimeDrop >= 1) {
                if (canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
                    obj.posy--;
                    if (obj.minHeight > obj.posy) {
                        obj.minHeight = obj.posy;
                        obj.moveUsed = 0;
                    }
                    obj.nextTimeDrop--;
                    obj.lockTime = 0;
                    obj.cleanInfo.kickWall = 0;
                    obj.cleanInfo.tspin = false;
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
        if (obj.lockTime > obj.maxLockTime || (obj.moveUsed >= obj.maxMoveTime && !canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj))) {
            put(obj.posx, obj.posy, obj.nowBlock, obj.rotation, obj);
            clearLine(obj);
            if (obj.mode == 'C4W') {
                for (var i = 0; i < obj.height - 5; ++i) {
                    for (var j = 0; j < obj.width; ++j) {
                        if ((j < obj.width / 2 - 2 || j > obj.width / 2 + 1)) {
                            obj.map[i][j] = 8;
                        }
                    }
                }
            }
            if (obj.mode == 'S4W') {
                for (var i = 0; i < obj.height - 5; ++i) {
                    for (var j = 0; j < obj.width; ++j) {
                        if (j > 3) {
                            obj.map[i][j] = 8;
                        }
                    }
                }
            }
            newBlock(obj);
            if (!canBePutted(obj.posx, obj.posy, obj.nowBlock, obj.rotation, obj)) {
                obj.lose = true;
            }
            if (obj.mode == 'C4W' || obj.mode == 'S4W') {
                if (obj.cleanInfo.combo == -1) {
                    obj.lose = true;
                }
                else {
                    obj.lastCombo = obj.cleanInfo.combo;
                }
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
            if (obj.cleanInfo.cleanedLine >= 150 && obj.win == false) {
                obj.win = true;
                var date = new Date()
                obj.endTime = date.getTime();
            }
        case '999L':
            if (obj.cleanInfo.cleanedLine >= 999 && obj.win == false) {
                obj.win = true;
                var date = new Date()
                obj.endTime = date.getTime();
            }
    }
    draw(gameCanvas);
}
function canBePutted(x, y, id, rotation, obj) {
    for (var i = 0; i < blocks[id][rotation].length; ++i) {
        for (var j = 0; j < blocks[id][rotation][0].length; ++j) {
            if (blocks[id][rotation][i][j] == 1) {
                if (!(x + j >= 0 && x + j < obj.width && y - i > 0 && obj.map[y - i - 1][x + j] == 0)) {
                    return false;
                }
            }
        }
    }
    return true;
}
function canBeTSpin(x, y, rotation, obj) {
    for (var r = 0; r < tspin.length; ++r) {
        var flag = true;
        for (var i = 0; i < tspin[r].length; ++i) {
            for (var j = 0; j < tspin[r][0].length; ++j) {
                if (tspin[r][i][j] != 0) {
                    if (obj.map[y - i - 1][x + j] == 0) {
                        flag = false;
                    }
                }
            }
        }
        if (flag) {
            if (!canBePutted(x, y + 1, 6, rotation, obj)) {
                return true;
            }
        }
    }
    return false;
}
function put(x, y, id, rotation, obj) {
    var flag = true;
    for (var i = 0; i < blocks[id][rotation].length; ++i) {
        for (var j = 0; j < blocks[id][rotation][0].length; ++j) {
            if (blocks[id][rotation][i][j] == 1) {
                obj.map[y - i - 1][x + j] = id;
                if (y - i - 1 < obj.height) {
                    flag = false;
                }
            }
        }
    }
    if (flag) {
        obj.lose = true;
    }
}
function gameInput(obj) {
    for (var i in keyDown) {
        if (keyDown[i]) {
            keyPress[i]++;
        }
        else {
            keyPress[i] = 0;
        }
    }
    if (obj.lose == false && obj.win == false && obj.ready == 0 && obj.pause == false) {
        var tl = keyDown[key2str[inputKeys.moveLeft]];
        var tr = keyDown[key2str[inputKeys.moveRight]];
        if (tl && !(tl && tr)) {
            if (keyPress[key2str[inputKeys.moveLeft]] == 1 || keyPress[key2str[inputKeys.moveLeft]] == 1 + defaultGameSettings.DAS || (keyPress[key2str[inputKeys.moveLeft]] > 1 + defaultGameSettings.DAS && (keyPress[key2str[inputKeys.moveLeft]] - 1 - defaultGameSettings.DAS) % (defaultGameSettings.ARR + 1) == 0)) {
                if (canBePutted(obj.posx - 1, obj.posy, obj.nowBlock, obj.rotation, obj)) {
                    obj.posx--;
                    obj.lockTime = 0;
                    obj.cleanInfo.kickWall = 0;
                    obj.cleanInfo.tspin = false;
                    if (!canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
                        obj.moveUsed++;
                    }
                }
            }
        }
        if (tr && !(tl && tr)) {
            if (keyPress[key2str[inputKeys.moveRight]] == 1 || keyPress[key2str[inputKeys.moveRight]] == 1 + defaultGameSettings.DAS || (keyPress[key2str[inputKeys.moveRight]] > 1 + defaultGameSettings.DAS && (keyPress[key2str[inputKeys.moveRight]] - 1 - defaultGameSettings.DAS) % (defaultGameSettings.ARR + 1) == 0)) {
                if (canBePutted(obj.posx + 1, obj.posy, obj.nowBlock, obj.rotation, obj)) {
                    obj.posx++;
                    obj.lockTime = 0;
                    obj.cleanInfo.kickWall = 0;
                    obj.cleanInfo.tspin = false;
                    if (!canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
                        obj.moveUsed++;
                    }
                }
            }
        }
        if (keyDown[key2str[inputKeys.softDrop]]) {
            if ((keyPress[key2str[inputKeys.softDrop]] - 1) % (obj.softDropSpeed + 1) == 0) {
                if (canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
                    obj.posy--;
                    obj.lockTime = 0;
                    obj.cleanInfo.kickWall = 0;
                    obj.cleanInfo.tspin = false;
                    obj.nextTimeDrop = 0;
                    if (obj.minHeight > obj.posy) {
                        obj.minHeight = obj.posy;
                        obj.moveUsed = 0;
                    }
                }
            }
        }
        if (keyDown[key2str[inputKeys.hardDrop]] && obj.enableHardDrop) {
            if (keyPress[key2str[inputKeys.hardDrop]] == 1) {
                var pos = obj.posy;
                for (var i = obj.posy - 1; i >= 0; --i) {
                    if (canBePutted(obj.posx, i, obj.nowBlock, obj.rotation, obj)) {
                        pos = i;
                    }
                    else {
                        break;
                    }
                }
                if (pos < obj.posy) {
                    obj.cleanInfo.kickWall = 0;
                    obj.cleanInfo.tspin = false;
                    obj.moveUsed = 0;
                    obj.nextTimeDrop = 0;
                }
                put(obj.posx, pos, obj.nowBlock, obj.rotation, obj);
                clearLine(obj);
                if (obj.mode == 'C4W') {
                    for (var i = 0; i < obj.height - 5; ++i) {
                        for (var j = 0; j < obj.width; ++j) {
                            if ((j < obj.width / 2 - 2 || j > obj.width / 2 + 1)) {
                                obj.map[i][j] = 8;
                            }
                        }
                    }
                }
                if (obj.mode == 'S4W') {
                    for (var i = 0; i < obj.height - 5; ++i) {
                        for (var j = 0; j < obj.width; ++j) {
                            if (j > 3) {
                                obj.map[i][j] = 8;
                            }
                        }
                    }
                }
                newBlock(obj);
                if (!canBePutted(obj.posx, obj.posy, obj.nowBlock, obj.rotation, obj)) {
                    obj.lose = true;
                }
                if (obj.mode == 'C4W' || obj.mode == 'S4W') {
                    if (obj.cleanInfo.combo == -1) {
                        obj.lose = true;
                    }
                    else {
                        obj.lastCombo = obj.cleanInfo.combo
                    }
                }
            }
        }
        if (keyDown[key2str[inputKeys.rotateLeft]] && !defaultGameSettings.singleRotate) {
            if (keyPress[key2str[inputKeys.rotateLeft]] == 1) {
                if (obj.nowBlock == 1) {
                    for (var i = 0; i < 5; ++i) {
                        if (canBePutted(obj.posx + kickWallsLeftI[obj.rotation][i][0], obj.posy + kickWallsLeftI[obj.rotation][i][1], obj.nowBlock, (obj.rotation + 3) % 4, obj)) {
                            obj.lockTime = 0;
                            obj.posx += kickWallsLeftI[obj.rotation][i][0];
                            obj.posy += kickWallsLeftI[obj.rotation][i][1];
                            obj.rotation = (obj.rotation + 3) % 4;
                            obj.cleanInfo.kickWall = 0;
                            obj.cleanInfo.tspin = false;
                            if (i > 0) {
                                obj.cleanInfo.kickWall = obj.nowBlock;
                                obj.nextTimeDrop = 0;
                                if (obj.cleanInfo.kickWall == 6) {
                                    obj.cleanInfo.tspin = true;
                                }
                            }
                            else {
                                if (obj.nowBlock == 6) {
                                    obj.cleanInfo.tspin = canBeTSpin(obj.posx, obj.posy, obj.rotation, obj);
                                }
                            }
                            if (!canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
                                obj.moveUsed++;
                            }
                            if (obj.minHeight > obj.posy) {
                                obj.minHeight = obj.posy;
                                obj.moveUsed = 0;
                            }
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
                            obj.cleanInfo.kickWall = 0;
                            obj.cleanInfo.tspin = false;
                            if (i > 0) {
                                obj.nextTimeDrop = 0;
                                obj.cleanInfo.kickWall = obj.nowBlock;
                                if (obj.cleanInfo.kickWall == 6) {
                                    obj.cleanInfo.tspin = true;
                                }
                            }
                            else {
                                if (obj.nowBlock == 6) {
                                    obj.cleanInfo.tspin = canBeTSpin(obj.posx, obj.posy, obj.rotation, obj);
                                }
                            }
                            if (!canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
                                obj.moveUsed++;
                            }
                            if (obj.minHeight > obj.posy) {
                                obj.minHeight = obj.posy;
                                obj.moveUsed = 0;
                            }
                            break;
                        }
                    }
                }
            }
        }
        if (keyDown[key2str[inputKeys.rotateRight]]) {
            if (keyPress[key2str[inputKeys.rotateRight]] == 1) {
                if (obj.nowBlock == 1) {
                    for (var i = 0; i < 5; ++i) {
                        if (canBePutted(obj.posx + kickWallsRightI[obj.rotation][i][0], obj.posy + kickWallsRightI[obj.rotation][i][1], obj.nowBlock, (obj.rotation + 1) % 4, obj)) {
                            obj.lockTime = 0;
                            obj.posx += kickWallsRightI[obj.rotation][i][0];
                            obj.posy += kickWallsRightI[obj.rotation][i][1];
                            obj.rotation = (obj.rotation + 1) % 4;
                            obj.cleanInfo.kickWall = 0;
                            obj.cleanInfo.tspin = false;
                            if (i > 0) {
                                obj.nextTimeDrop = 0;
                                obj.cleanInfo.kickWall = obj.nowBlock;
                                if (obj.cleanInfo.kickWall == 6) {
                                    obj.cleanInfo.tspin = true;
                                }
                            }
                            else {
                                if (obj.nowBlock == 6) {
                                    obj.cleanInfo.tspin = canBeTSpin(obj.posx, obj.posy, obj.rotation, obj);
                                }
                            }
                            if (!canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
                                obj.moveUsed++;
                            }
                            if (obj.minHeight > obj.posy) {
                                obj.minHeight = obj.posy;
                                obj.moveUsed = 0;
                            }
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
                            obj.cleanInfo.kickWall = 0;
                            obj.cleanInfo.tspin = false;
                            if (i > 0) {
                                obj.nextTimeDrop = 0;
                                obj.cleanInfo.kickWall = obj.nowBlock;
                                if (obj.cleanInfo.kickWall == 6) {
                                    obj.cleanInfo.tspin = true;
                                }
                            }
                            else {
                                if (obj.nowBlock == 6) {
                                    obj.cleanInfo.tspin = canBeTSpin(obj.posx, obj.posy, obj.rotation, obj);
                                }
                            }
                            if (!canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
                                obj.moveUsed++;
                            }
                            if (obj.minHeight > obj.posy) {
                                obj.minHeight = obj.posy;
                                obj.moveUsed = 0;
                            }
                            break;
                        }
                    }
                }
            }
        }
        if (keyDown[key2str[inputKeys.rotate180]] && defaultGameSettings.enableRotate180 && !defaultGameSettings.singleRotate) {
            if (keyPress[key2str[inputKeys.rotate180]] == 1) {
                if (canBePutted(obj.posx, obj.posy, obj.nowBlock, (obj.rotation + 2) % 4, obj)) {
                    obj.lockTime = 0;
                    obj.rotation = (obj.rotation + 2) % 4;
                    obj.cleanInfo.kickWall = 0;
                    obj.cleanInfo.tspin = false;
                    if (obj.nowBlock == 6) {
                        obj.cleanInfo.tspin = canBeTSpin(obj.posx, obj.posy, obj.rotation, obj);
                    }
                    if (!canBePutted(obj.posx, obj.posy - 1, obj.nowBlock, obj.rotation, obj)) {
                        obj.moveUsed++;
                    }
                }
            }
        }
        if (keyDown[key2str[inputKeys.hold]] && obj.enableHold) {
            if (keyPress[key2str[inputKeys.hold]] == 1) {
                if (obj.enableHold) {
                    if (obj.hold == 0) {
                        if (canBePutted(3, obj.height + 2, obj.next[0], 0, obj)) {
                            obj.hold = obj.nowBlock;
                            obj.nextTimeDrop = 0;
                            newBlock(obj);
                            obj.holdUsed = true;
                            obj.cleanInfo.kickWall = 0;
                            obj.cleanInfo.tspin = false;
                        }
                    }
                    else {
                        if (!obj.holdUsed && canBePutted(3, obj.height + 2, obj.hold, 0, obj)) {
                            var t = obj.nowBlock;
                            obj.nowBlock = obj.hold;
                            obj.hold = t;
                            obj.holdUsed = true;
                            obj.lockTime = 0;
                            obj.nextTimeDrop = 0;
                            obj.rotation = 0;
                            obj.posx = 3;
                            obj.posy = obj.height + 2;
                            obj.cleanInfo.kickWall = 0;
                            obj.moveUsed = 0;
                            obj.cleanInfo.tspin = false;
                        }
                    }
                }
            }
        }
    }
    if (keyPress[key2str[inputKeys.restart]] == 1) {
        var mode = playerObj.mode;
        clearInterval(playerObj.startId);
        loadgame();
        playerObj.mode = mode;
        loadMode(playerObj);
        startGame(playerObj);
    }
    if (keyPress[key2str[inputKeys.back]] == 1) {
        clearInterval(playerObj.startId);
        clearInterval(stopId);
        NowPos = 'singleMenu';
    }
    if (keyPress[key2str[inputKeys.pause]] == 1) {
        obj.pause = !obj.pause;
    }
}
function newBlock(obj) {
    obj.nowBlock = obj.next[0];
    obj.nextTimeDrop = 0;
    obj.posx = 3;
    obj.posy = obj.height + 2;
    obj.rotation = 0;
    obj.moveUsed = 0;
    obj.lockTime = 0
    obj.holdUsed = false;
    obj.minHeight = obj.height + 2;
    generateNext(obj);
}
function clearLine(obj) {
    var bigFlag = false;
    var num = 0;
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
                num++;
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
    if (num > 0) {
        obj.cleanInfo.combo++;
    }
    else {
        obj.cleanInfo.combo = -1;
    }
    obj.cleanInfo.cleanedLineThisTime = num;
    obj.cleanInfo.countAttack();
    if (obj.cleanInfo.cleanedLineThisTime == 4 || obj.cleanInfo.tspin) {
        obj.cleanInfo.b2b = true;
    }
    else if (obj.cleanedLineThisTime != 0) {
        obj.cleanInfo.b2b = false;
    }
}