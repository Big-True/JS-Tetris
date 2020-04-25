function drawMenu(gl) {
    var mainMenuPerHeight = windowHeight / 4 * 3 / defaultMenuOptions.length;
    var mainMenuPerWidth = 3 * mainMenuPerHeight > windowWidth ? windowWidth : 3 * mainMenuPerHeight;
    gl.drawImage(logo, (windowWidth - windowHeight / 24 * 7) / 2, 0, (windowHeight / 24 * 7), (windowHeight / 4));
    gl.strokeStyle = 'rgb(255,255,255)';
    gl.fillStyle = 'rgb(255,255,255)';
    gl.lineWidth = 5;
    gl.font = 'bold ' + mainMenuPerHeight / 2 + 'px Material Icons';
    gl.textAlign = 'center';
    gl.textBaseline = "middle";
    for (var i = 0; i < defaultMenuOptions.length; ++i) {
        gl.strokeRect((windowWidth - mainMenuPerWidth) / 2, windowHeight / 4 + mainMenuPerHeight * i + 10, mainMenuPerWidth, mainMenuPerHeight - 20);
        gl.fillText(defaultMenuOptions[i], windowWidth / 2, windowHeight / 4 + mainMenuPerHeight * (i + 0.5), mainMenuPerWidth);
    }
}