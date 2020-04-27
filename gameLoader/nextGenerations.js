function generateNext(obj) {
    switch (obj.blockGeneration) {
        case '7bag':
            obj.next.shift();
            obj.next.push(generate7bag(obj));
            break;
    }
}
function generate7bag(obj) {
    if (obj.data7bag == undefined || obj.data7bag.length == 0) {
        obj.data7bag = [1, 2, 3, 4, 5, 6, 7];
        for (var i = 0; i < 6; ++i) {
            var tempRand = obj.rng.rand(i, 6);
            var temp = obj.data7bag[i];
            obj.data7bag[i] = obj.data7bag[tempRand];
            obj.data7bag[tempRand] = temp;
        }
    }
    return obj.data7bag.shift();
}