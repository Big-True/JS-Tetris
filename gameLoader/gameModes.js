function load40LMode(obj) {
    obj.goal = 40;
    var date = new Date();
    obj.startTime = obj.endTime = date.getTime();
}
function load150LMode(obj) {
    obj.goal = 150;
    var date = new Date();
    obj.startTime = obj.endTime = date.getTime();
}
function load999LMode(obj) {
    obj.goal = 999;
    var date = new Date();
    obj.startTime = obj.endTime = date.getTime();
}
function loadMaraMode(obj) {
    var date = new Date();
    obj.startTime = obj.endTime = date.getTime();
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