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
    gl.strokeRect(gameLayout.posx, gameLayout.posy, gameLayout.playWidth, gameLayout.playHeight);
    gl.strokeRect(gameLayout.mapPosx - 5, gameLayout.mapPosy - 5, gameLayout.baseUnit * playerObj.width + 10, gameLayout.baseUnit * playerObj.height + 10);
}