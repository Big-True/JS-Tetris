function draw(gl) {
    gl.clearRect(0, 0, windowWidth, windowHeight);
    drawBackground(gl);
    switch (NowPos) {
        case 'Menu':
            drawMenu(gl);
            break;
    }
}