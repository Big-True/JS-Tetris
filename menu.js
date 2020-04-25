function drawMenu(gl) {
    gl.drawImage(logo, (windowWidth - windowHeight / 24 * 7) / 2, 0, (windowHeight / 24 * 7), (windowHeight / 4));
    gl.strokeStyle = 'rgb(255,255,255)';
    gl.fillStyle = 'rgb(255,255,255)';
    gl.lineWidth = 5;
    gl.font = 'bold ' + (windowHeight / 4 * 3 / defaultMenuOptions.length - 20) / 2 + 'px Material Icons';
    gl.textAlign = 'center';
    gl.textBaseline = "middle";
    for (var i = 0; i < defaultMenuOptions.length; ++i) {
        gl.strokeRect(windowWidth / 3, windowHeight / 4 + windowHeight / 4 * 3 / defaultMenuOptions.length * i + 10, windowWidth / 3, windowHeight / 4 * 3 / defaultMenuOptions.length - 20);
        gl.fillText(defaultMenuOptions[i], windowWidth / 2, windowHeight / 4 + windowHeight / 4 * 3 / defaultMenuOptions.length * (i + 0.5), windowWidth / 3);
    }
}