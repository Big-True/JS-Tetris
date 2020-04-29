function load40LMode(obj) {
    obj.goal = 40;
}
function load150LMode(obj) {
    obj.goal = 150;
}
function load999LMode(obj) {
    obj.goal = 999;
}
function loadMaraMode(obj) {
}
function load150sMode(obj) {
    obj.goal = 150;
}
function loadC4WMode(obj) {
    for (var i = 0; i < obj.height - 5; ++i) {
        for (var j = 0; j < obj.width; ++j) {
            if ((j < obj.width / 2 - 2 || j > obj.width / 2 + 1) || (i == 0 && j != obj.width / 2 - 2)) {
                obj.map[i][j] = 8;
            }
        }
    }
}
function loadS4WMode(obj) {
    for (var i = 0; i < obj.height - 5; ++i) {
        for (var j = 0; j < obj.width; ++j) {
            if (j > 3) {
                obj.map[i][j] = 8;
            }
        }
    }
    obj.map[0][1] = obj.map[0][2] = obj.map[0][3] = 8
}
function loadMode(obj) {
    switch (obj.mode) {
        case '40L':
            load40LMode(obj);
            break;
        case '150L':
            load150LMode(obj);
            break;
        case '999L':
            load999LMode(obj);
            break;
        case 'marathon':
            loadMaraMode(obj);
            break;
        case '150s':
            load150sMode(obj);
            break;
        case 'C4W':
            loadC4WMode(obj);
            break;
        case 'S4W':
            loadS4WMode(obj);
            break;
    }
}