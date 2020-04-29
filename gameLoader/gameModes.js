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
    }
}