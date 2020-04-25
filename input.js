document.onmousedown = function (event) {
    switch (NowPos) {
        case 'menu':
            clickBaseMenu(event.clientX, event.clientY);
            break;
        case 'singleMenu':
            clickSingleMenu(event.clientX, event.clientY);
            break;
    }
    draw(gameCanvas);
}