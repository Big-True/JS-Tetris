function startGame(obj) {
    obj.hold = -1;
    obj.next = new Array(obj.maxNextCount);
    obj.rng = new rng();
    for (var i = 0; i < obj.maxNextCount; ++i) {
        generateNext(obj);
    }
    obj.nowBlock = obj.next[0];
    obj.nextTimeDrop = 0;
    obj.posx = 3;
    obj.posy = 22;
    obj.minHeight = obj.posy;
    generateNext(obj);
    clearInterval(stopId);
    stopId = setInterval('inGame(playerObj);', 1000 / 60);
    NowPos = 'singleGame';
}
function inGame(obj) {
    obj.nextTimeDrop += obj.gravity;
    if (obj.nextTimeDrop >= 1) {
        if (canBePutted(obj.posx, obj.posy - 1)) {
            obj.posy--;
            obj.minHeight = Math.min(obj.posy, obj.minHeight);
        }
        else {
            obj.nextTimeDrop -= 1;
        }
    }
    draw(gameCanvas);
}
function canBePutted(x, y, id) {

}