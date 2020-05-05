function draw(gl) {
    gl.clearRect(0, 0, windowWidth, windowHeight);
    drawBackground(gl);
    switch (NowPos) {
        case 'menu':
            drawMenu(gl);
            break;
        case 'singleMenu':
            drawSingleMenu(gl);
            break;
        case 'settings':
            drawSettings(gl);
            break;
        case 'more':
            drawMore(gl);
            break;
        case 'singleGame':
            drawSingleGame(gl);
            break;
    }
}
function drawBackground(gl) {
    gl.fillStyle = 'rgb(0,0,0)';
    gl.fillRect(0, 0, windowWidth, windowHeight);
}
function drawMenu(gl) {
    var perHeight = windowHeight / 4 * 3 / defaultMenuOptions.length;
    var perWidth = Math.min(windowWidth, 4 * perHeight);
    gl.drawImage(logo, (windowWidth - windowHeight / 24 * 7) / 2, 0, (windowHeight / 24 * 7), (windowHeight / 4));
    gl.strokeStyle = 'rgb(255,255,255)';
    gl.fillStyle = 'rgb(255,255,255)';
    gl.lineWidth = 5;
    gl.textAlign = 'start';
    gl.textBaseline = "alphabetic";
    gl.font = 'bold ' + perHeight / 4 + 'px Material Icons';
    gl.fillText('版本更新 最好清除一下页面缓存', 0, perHeight / 4);
    gl.font = 'bold ' + perHeight / 2 + 'px Material Icons';
    gl.textAlign = 'center';
    gl.textBaseline = "middle";
    for (var i = 0; i < defaultMenuOptions.length; ++i) {
        gl.strokeRect((windowWidth - perWidth) / 2 + 10, windowHeight / 4 + perHeight * i + 10, perWidth - 20, perHeight - 20);
        gl.fillText(defaultMenuOptions[i], windowWidth / 2, windowHeight / 4 + perHeight * (i + 0.5), perWidth - 40);
    }
}
function drawSingleMenu(gl) {
    var perHeight = windowHeight / defaultModeOptions.length;
    var perWidth = Math.min(windowWidth, 4 * perHeight);
    gl.strokeStyle = 'rgb(255,255,255)';
    gl.fillStyle = 'rgb(255,255,255)';
    gl.lineWidth = 5
    gl.font = 'bold ' + perHeight / 2 + 'px Material Icons';
    gl.textAlign = 'center';
    gl.textBaseline = "middle";
    for (var i = 0; i < defaultModeOptions.length; ++i) {
        gl.strokeRect((windowWidth - perWidth) / 2 + 10, perHeight * i + 10, perWidth - 20, perHeight - 20);
        gl.fillText(defaultModeOptions[i], windowWidth / 2, perHeight * (i + 0.5), perWidth - 40);
    }
}
function drawSettings(gl) {
    var perHeight = windowHeight / defaultSettingOptions.length / 8 * 7;
    var perWidth = Math.min(windowWidth / 2, 4 * perHeight);
    var perHeight2 = windowHeight / defaultSettingOptions2.length / 8 * 7;
    var perWidth2 = Math.min(windowWidth / 2, 4 * perHeight2);
    gl.strokeStyle = 'rgb(255,255,255)';
    gl.fillStyle = 'rgb(255,255,255)';
    gl.lineWidth = 5
    gl.font = 'bold ' + perHeight / 2 + 'px Material Icons';
    gl.textAlign = 'center';
    gl.textBaseline = "middle";
    for (var i = 0; i < defaultSettingOptions.length; ++i) {
        var data;
        switch (i) {
            case 0:
                data = key2str[inputKeys.moveLeft];
                break;
            case 1:
                data = key2str[inputKeys.moveRight];
                break;
            case 2:
                data = key2str[inputKeys.softDrop];
                break;
            case 3:
                data = key2str[inputKeys.hardDrop];
                break;
            case 4:
                data = key2str[inputKeys.rotateRight];
                break;
            case 5:
                data = key2str[inputKeys.rotateLeft];
                break;
            case 6:
                data = key2str[inputKeys.rotate180];
                break;
            case 7:
                data = key2str[inputKeys.hold];
                break;
            case 8:
                data = key2str[inputKeys.restart];
                break;
            case 9:
                data = key2str[inputKeys.back];
                break;
            case 10:
                data = key2str[inputKeys.pause];
                break;
        }
        if (settingsPos == i) {
            data = '输入...'
        }
        gl.strokeRect((windowWidth / 2 - perWidth) / 2 + 10, perHeight * i + 10, perWidth - 20, perHeight - 20);
        gl.fillText(defaultSettingOptions[i] + ':' + data, windowWidth / 4, perHeight * (i + 0.5), perWidth - 40);
    }
    for (var i = 0; i < defaultSettingOptions2.length; ++i) {
        switch (i) {
            case 0:
                data = gameSettings.gravity;
                break;
            case 1:
                data = gameSettings.softDropSpeed;
                break;
            case 2:
                data = gameSettings.enableGhost ? '开' : '关';
                break;
            case 3:
                data = gameSettings.enableHardDrop ? '开' : '关';
                break;
            case 4:
                data = gameSettings.enableHold ? '开' : '关';
                break;
            case 5:
                data = gameSettings.singleRotate ? '开' : '关';
                break;
            case 6:
                data = gameSettings.enableRotate180 ? '开' : '关';
                break;
            case 7:
                data = gameSettings.enableNext ? '开' : '关';
                break;
            case 8:
                data = gameSettings.nextCount;
                break;
            case 9:
                data = gameSettings.enableBlockSpace ? '开' : '关';
                break;
            case 10:
                data = gameSettings.ARR;
                break;
            case 11:
                data = gameSettings.DAS;
                break;

        }
        gl.strokeRect((windowWidth / 2 * 3 - perWidth2) / 2 + 10, perHeight2 * i + 10, perWidth2 - 20, perHeight2 - 20);
        gl.fillText(defaultSettingOptions2[i] + ':' + data, windowWidth / 4 * 3, perHeight2 * (i + 0.5), perWidth2 - 40);
    }
    gl.strokeRect((windowWidth - (perWidth + perWidth2) / 2) / 2 + 10, windowHeight / 8 * 7 + 10, (perWidth + perWidth2) / 2 - 20, windowHeight / 8 - 20);
    gl.font = 'bold ' + windowHeight / 16 + 'px Material Icons';
    gl.fillText('返回', windowWidth / 2, windowHeight / 16 * 15, (perWidth + perWidth2) / 2 - 20 - 40)
}
function drawMore(gl) {
    var perHeight = windowHeight / 8;
    var perWidth = Math.min(windowWidth, 4 * perHeight);
    gl.strokeStyle = 'rgb(255,255,255)';
    gl.fillStyle = 'rgb(255,255,255)';
    gl.lineWidth = 5
    gl.font = 'bold ' + perHeight / 2 + 'px Material Icons';
    gl.textAlign = 'center';
    gl.textBaseline = "middle";
    gl.strokeRect((windowWidth - perWidth) / 2 + 10, (windowHeight - perHeight) / 2 + 10, perWidth - 20, perHeight - 20);
    gl.fillText('返回', windowWidth / 2, windowHeight / 2, perWidth - 40);
}
function drawSingleGame(gl) {
    gl.lineWidth = 5;
    gl.strokeStyle = 'rgb(255,255,255)';
    gl.fillStyle = 'rgb(255,255,255)';
    drawMap(gl, gameLayout, playerObj);
    if (playerObj.enableGhost) {
        drawGhost(gl, gameLayout, playerObj);
    }
    if (playerObj.enableHold) {
        if (playerObj.hold != 0) {
            drawBlockIn(gl, gameLayout.posx + 10, gameLayout.posy + gameLayout.baseUnit, playerObj.hold, gameLayout.baseUnit);
        }
    }
    if (playerObj.enableNext) {
        var unit = Math.min(gameLayout.baseUnit, gameLayout.playHeight / (2.5 * playerObj.nextCount));
        for (var i = 0; i < playerObj.nextCount; ++i) {
            drawBlockIn(gl, gameLayout.mapPosx + (playerObj.width + 1) * gameLayout.baseUnit, unit * 0.5 + i * unit * 2.5, playerObj.next[i], unit);
        }
    }
    drawBlockIn(gl, gameLayout.mapPosx + playerObj.posx * gameLayout.baseUnit, gameLayout.playHeight - (playerObj.posy + 0.5) * gameLayout.baseUnit, playerObj.nowBlock, gameLayout.baseUnit, playerObj.rotation);
    gl.strokeRect(gameLayout.posx, gameLayout.posy, gameLayout.playWidth, gameLayout.playHeight);
    gl.strokeRect(gameLayout.mapPosx - 5, gameLayout.mapPosy - 5, gameLayout.baseUnit * playerObj.width + 10, gameLayout.baseUnit * playerObj.height + 10);
    if (playerObj.ready == 0) {
        drawMode(gl);
    }
    else {
        drawReady(gl);
    }
    if (playerObj.pause && playerObj.lose == false && playerObj.win == false) {
        gl.strokeStyle = 'rgb(255,255,255)';
        gl.fillStyle = 'rgb(255,255,255)';
        gl.textAlign = 'center';
        gl.textBaseline = "middle";
        gl.font = 'bold ' + gameLayout.baseUnit * 5 + 'px Material Icons';
        gl.fillText('Pause', windowWidth / 2, windowHeight / 4);
    }
}
function drawMap(gl, layout, obj) {
    for (var i = 0; i < obj.width; ++i) {
        for (var j = 0; j < obj.height + 2; ++j) {
            if (obj.map[j][i] != 0) {
                drawSingleBlock(gl, layout.mapPosx + i * layout.baseUnit, layout.playHeight - (1.5 + j) * layout.baseUnit, obj.map[j][i], layout.baseUnit);
            }
        }
    }
}
function drawGhost(gl, layout, obj) {
    var pos = obj.posy;
    for (var i = obj.posy - 1; i >= 0; --i) {
        if (canBePutted(obj.posx, i, obj.nowBlock, obj.rotation, obj)) {
            pos = i;
        }
        else {
            break;
        }
    }
    gl.globalAlpha = 0.5;
    drawBlockIn(gl, layout.mapPosx + obj.posx * layout.baseUnit, layout.playHeight - (pos + 0.5) * layout.baseUnit, obj.nowBlock, layout.baseUnit, obj.rotation);
    gl.globalAlpha = 1.0;
}
function drawBlockIn(gl, x, y, id, size, rotation) {
    rotation = rotation || 0;
    for (var i = 0; i < blocks[id][rotation].length; ++i) {
        for (var j = 0; j < blocks[id][rotation][0].length; ++j) {
            if (blocks[id][rotation][i][j] != 0) {
                drawSingleBlock(gl, x + j * size, y + i * size, id, size);
            }
        }
    }
}
function drawSingleBlock(gl, x, y, id, size) {
    if (gameSettings.enableBlockSpace) {
        gl.drawImage(skins[id], x + 0.5, y + 0.5, size - 1, size - 1);
    }
    else {
        gl.drawImage(skins[id], x, y, size, size);
    }
}
function drawMode(gl) {
    gl.lineWidth = 5;
    gl.strokeStyle = 'rgb(255,255,255)';
    gl.fillStyle = 'rgb(255,255,255)';
    gl.textBaseline = "middle";
    switch (playerObj.mode) {
        case '40L':
        case '150L':
        case '999L':
            gl.font = 'bold ' + gameLayout.baseUnit * 1.5 + 'px Material Icons';
            gl.textAlign = 'start';
            gl.fillText(playerObj.goal, gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 6, 5 * gameLayout.baseUnit);
            gl.fillText('------', gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 7.2, 5 * gameLayout.baseUnit);
            gl.fillText(playerObj.cleanInfo.cleanedLine, gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 8, 5 * gameLayout.baseUnit);
            gl.font = 'bold ' + gameLayout.baseUnit + 'px Material Icons';
            if (playerObj.win) {
                gl.textAlign = 'center';
                gl.fillText('Time:' + (playerObj.passedTime / 1000).toFixed(3), windowWidth / 2, windowHeight / 2);
            }
            else if (playerObj.lose) {
                gl.fillText((playerObj.passedTime / 1000).toFixed(3), gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 4);
            }
            else {
                gl.textAlign = 'start';
                gl.fillText((playerObj.passedTime / 1000).toFixed(3), gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 4);
            }
            break;
        case 'marathon':
            gl.font = 'bold ' + gameLayout.baseUnit * 1.5 + 'px Material Icons';
            gl.textAlign = 'start';
            gl.fillText(playerObj.cleanInfo.cleanedLine, gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 8, 5 * gameLayout.baseUnit);
            gl.font = 'bold ' + gameLayout.baseUnit + 'px Material Icons';
            gl.textAlign = 'start';
            gl.fillText((playerObj.passedTime / 1000).toFixed(3), gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 4);
            break;
        case 'C4W':
        case 'S4W':
            gl.font = 'bold ' + gameLayout.baseUnit * 1.5 + 'px Material Icons';
            if (playerObj.lose) {
                gl.textAlign = 'center';
                gl.fillText('combo:' + (playerObj.lastCombo + 1), windowWidth / 2, windowHeight / 2);
            }
            else {
                gl.textAlign = 'start';
                gl.fillText('combo:' + (playerObj.cleanInfo.combo + 1), gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 8, 5 * gameLayout.baseUnit);
            }
            break;
        case '150s':
            gl.font = 'bold ' + gameLayout.baseUnit + 'px Material Icons';
            gl.textAlign = 'start';
            gl.fillText((playerObj.passedTime / 1000).toFixed(3), gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 4);
            gl.font = 'bold ' + gameLayout.baseUnit * 1.5 + 'px Material Icons';
            if (playerObj.win) {
                gl.textAlign = 'center';
                gl.fillText('cleared:' + playerObj.cleanInfo.cleanedLine, windowWidth / 2, windowHeight / 2);
            }
            else {
                gl.textAlign = 'start';
                gl.fillText(playerObj.cleanInfo.cleanedLine, gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 8, 5 * gameLayout.baseUnit);
            }
    }
}
function drawReady(gl) {
    gl.strokeStyle = 'rgb(255,255,255)';
    gl.fillStyle = 'rgb(255,255,255)';
    gl.textAlign = 'center';
    gl.textBaseline = "middle";
    gl.font = 'bold ' + gameLayout.baseUnit * 5 + 'px Material Icons';
    gl.fillText(playerObj.ready, windowWidth / 2, windowHeight / 2);
}