var canvas = document.querySelector('.game');
canvas.width = windowWidth;
canvas.height = windowHeight;
var gameCanvas = canvas.getContext('2d');
var stopId=setInterval('perFrame();',500);
function perFrame(){
    switch(NowPos){
        case 'Menu':
            draw(gameCanvas);
    }
}