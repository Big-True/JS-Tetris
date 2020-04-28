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
    var perWidth = 4 * perHeight > windowWidth ? windowWidth : 4 * perHeight;
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

}
function drawMore(gl) {

}
function drawSingleGame(gl) {
    gl.lineWidth = 5;
    gl.strokeStyle = 'rgb(255,255,255)';
    gl.fillStyle = 'rgb(255,255,255)';
    for (var i = 0; i < playerObj.width; ++i) {
        for (var j = 0; j < playerObj.height + 2; ++j) {
            if (playerObj.map[j][i] != 0) {
                drawSingleBlock(gl, gameLayout.mapPosx + i * gameLayout.baseUnit, gameLayout.playHeight - (1.5 + j) * gameLayout.baseUnit, playerObj.map[j][i], gameLayout.baseUnit);
            }
        }
    }
    if (playerObj.enableGhost) {
        var pos = playerObj.posy;
        for (var i = playerObj.posy - 1; i >= 0; --i) {
            if (canBePutted(playerObj.posx, i, playerObj.nowBlock, playerObj.rotation, playerObj)) {
                pos = i;
            }
            else {
                break;
            }
        }
        gl.globalAlpha = 0.5;
        drawBlockIn(gl, gameLayout.mapPosx + playerObj.posx * gameLayout.baseUnit, gameLayout.playHeight - (pos + 0.5) * gameLayout.baseUnit, playerObj.nowBlock, gameLayout.baseUnit, playerObj.rotation);
        gl.globalAlpha = 1.0;
    }
    if (playerObj.enableHold) {
        if (playerObj.hold != 0) {
            drawBlockIn(gl, gameLayout.posx + 10, gameLayout.posy + gameLayout.baseUnit, playerObj.hold, gameLayout.baseUnit);
        }
    }
    if (playerObj.enableNext) {
        for (var i = 0; i < playerObj.nextCount; ++i) {
            drawBlockIn(gl, gameLayout.mapPosx + (playerObj.width + 1) * gameLayout.baseUnit, gameLayout.baseUnit + i * gameLayout.baseUnit * 2.5, playerObj.next[i], gameLayout.baseUnit);
        }
    }
    drawBlockIn(gl, gameLayout.mapPosx + playerObj.posx * gameLayout.baseUnit, gameLayout.playHeight - (playerObj.posy + 0.5) * gameLayout.baseUnit, playerObj.nowBlock, gameLayout.baseUnit, playerObj.rotation);
    gl.strokeRect(gameLayout.posx, gameLayout.posy, gameLayout.playWidth, gameLayout.playHeight);
    gl.strokeRect(gameLayout.mapPosx - 5, gameLayout.mapPosy - 5, gameLayout.baseUnit * playerObj.width + 10, gameLayout.baseUnit * playerObj.height + 10);
    drawMode(gl);
}
function drawBlockIn(gl, x, y, id, size, rotation = 0) {
    for (var i = 0; i < blocks[id][rotation].length; ++i) {
        for (var j = 0; j < blocks[id][rotation][0].length; ++j) {
            if (blocks[id][rotation][i][j] != 0) {
                drawSingleBlock(gl, x + j * size, y + i * size, id, size);
            }
        }
    }
}
function drawSingleBlock(gl, x, y, id, size) {
    gl.drawImage(skins[id], x, y, size, size);
}
function drawMode(gl) {
    switch (playerObj.mode) {
        case '40L':
        case '150L':
        case '999L':
            gl.lineWidth = 5;
            gl.strokeStyle = 'rgb(255,255,255)';
            gl.fillStyle = 'rgb(255,255,255)';
            gl.textAlign = 'center';
            gl.textBaseline = "middle";
            gl.font = 'bold ' + gameLayout.baseUnit * 1.5 + 'px Material Icons';
            gl.textAlign = 'start';
            gl.fillText(playerObj.goal, gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 6, 5 * gameLayout.baseUnit);
            gl.fillText('------', gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 7.2, 5 * gameLayout.baseUnit);
            gl.fillText(playerObj.cleanInfo.cleanedLine, gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 8, 5 * gameLayout.baseUnit);
            gl.font = 'bold ' + gameLayout.baseUnit + 'px Material Icons';
            if (playerObj.win) {
                gl.textAlign = 'center';
                gl.fillText((playerObj.endTime - playerObj.startTime) / 1000, windowWidth / 2, windowHeight / 2);
            }
            else if (!playerObj.lose) {
                gl.textAlign = 'start';
                var date = new Date();
                gl.fillText((date.getTime() - playerObj.startTime) / 1000, gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 4);
            }
            break;
        case 'marathon':
            gl.lineWidth = 5;
            gl.strokeStyle = 'rgb(255,255,255)';
            gl.fillStyle = 'rgb(255,255,255)';
            gl.textAlign = 'center';
            gl.textBaseline = "middle";
            gl.font = 'bold ' + gameLayout.baseUnit * 1.5 + 'px Material Icons';
            gl.textAlign = 'start';
            gl.fillText(playerObj.cleanInfo.cleanedLine, gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 8, 5 * gameLayout.baseUnit);
            gl.font = 'bold ' + gameLayout.baseUnit + 'px Material Icons';
            if (!playerObj.lose) {
                gl.textAlign = 'start';
                var date = new Date();
                gl.fillText((date.getTime() - playerObj.startTime) / 1000, gameLayout.posx + 0.5 * gameLayout.baseUnit, gameLayout.playHeight - gameLayout.baseUnit * 4);
            }
            break;
    }
}