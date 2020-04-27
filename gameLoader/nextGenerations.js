function generateNext(obj) {
    switch (obj.blockGeneration) {
        case '7bag':
            obj.next.shift();
            obj.next.push(generate7bag(obj));
            break;
    }
}
function generate7bag(obj) {
    if (obj.data7bag == [] || obj.data7bag == undefined) {
        obj.data7bag = [0, 1, 2, 3, 4, 5, 6];
        for (var i = 0; i < 6; ++i) {
            var tempRand = obj.rng.rand(i, 6);
            var temp = obj.data7bag[0];
            obj.data7bag[0] = obj.data7bag[tempRand];
            obj.data7bag[tempRand] = temp;
        }
    }
    return obj.data7bag.shift();
}