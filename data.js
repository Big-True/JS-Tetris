var key2str = {
    8: 'Backspace',
    9: 'Tab',
    13: 'Enter',
    16: 'Shift',
    17: 'Ctrl',
    18: 'Alt',
    19: 'Pause',
    20: 'Caps Lock',
    27: 'Esc',
    32: 'Space',
    33: 'PgUp',
    34: 'PgDn',
    35: 'End',
    36: 'Home',
    37: '←',
    38: '↑',
    39: '→',
    40: '↓',
    45: 'Insert',
    46: 'Delete',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    59: ';',
    61: '=',
    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H',
    73: 'I',
    74: 'J',
    75: 'K',
    76: 'L',
    77: 'M',
    78: 'N',
    79: 'O',
    80: 'P',
    81: 'Q',
    82: 'R',
    83: 'S',
    84: 'T',
    85: 'U',
    86: 'V',
    87: 'W',
    88: 'X',
    89: 'Y',
    90: 'Z',
    96: '#0',
    97: '#1',
    98: '#2',
    99: '#3',
    100: '#4',
    101: '#5',
    102: '#6',
    103: '#7',
    104: '#8',
    105: '#9',
    106: '*',
    107: '+',
    109: '-',
    110: '.',
    111: '/',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    173: '-',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: "'",
    undefined: "none",
    0: "none"
};
var str2key = {
    'Backspace': 8,
    'Tab': 9,
    'Enter': 13,
    'Shift': 16,
    'Ctrl': 17,
    'Alt': 18,
    'Pause': 19,
    'Caps Lock': 20,
    'Esc': 27,
    'Space': 32,
    'PgUp': 33,
    'PgDn': 34,
    'End': 35,
    'Home': 36,
    '←': 37,
    '↑': 38,
    '→': 39,
    '↓': 40,
    'Left': 37,
    'Up': 38,
    'Right': 39,
    'Down': 40,
    'Insert': 45,
    'Delete': 46,
    '0': 48,
    '1': 49,
    '2': 50,
    '3': 51,
    '4': 52,
    '5': 53,
    '6': 54,
    '7': 55,
    '8': 56,
    '9': 57,
    ';': 59,
    '=': 61,
    'A': 65,
    'B': 66,
    'C': 67,
    'D': 68,
    'E': 69,
    'F': 70,
    'G': 71,
    'H': 72,
    'I': 73,
    'J': 74,
    'K': 75,
    'L': 76,
    'M': 77,
    'N': 78,
    'O': 79,
    'P': 80,
    'Q': 81,
    'R': 82,
    'S': 83,
    'T': 84,
    'U': 85,
    'V': 86,
    'W': 87,
    'X': 88,
    'Y': 89,
    'Z': 90,
    '#0': 96,
    '#1': 97,
    '#2': 98,
    '#3': 99,
    '#4': 100,
    '#5': 101,
    '#6': 102,
    '#7': 103,
    '#8': 104,
    '#9': 105,
    '*': 106,
    '+': 107,
    '-': 109,
    '.': 110,
    '/': 111,
    'F1': 112,
    'F2': 113,
    'F3': 114,
    'F4': 115,
    'F5': 116,
    'F6': 117,
    'F7': 118,
    'F8': 119,
    'F9': 120,
    'F10': 121,
    'F11': 122,
    'F12': 123,
    '-': 173,
    ';': 186,
    '=': 187,
    ',': 188,
    '-': 189,
    '.': 190,
    '/': 191,
    '`': 192,
    '[': 219,
    '\\': 220,
    ']': 221,
    "'": 222,
    'none': undefined
};
var defaultInputKeys = {
    moveLeft: str2key['A'],
    moveRight: str2key['D'],
    softDrop: str2key['S'],
    hardDrop: str2key['W'],
    rotateRight: str2key['Right'],
    rotateLeft: str2key['Left'],
    rotate180: str2key['Up'],
    hold: str2key['Shift'],
    restart: str2key['R'],
    back: str2key['Esc'],
    pause: str2key['P'],
    save: str2key['['],
    load: str2key[']']
}
var defaultGameSettings = {
    width: 10,
    height: 20,
    maxHeight: 40,
    gravity: 1 / 60,
    maxLockTime: 60,
    maxMoveTime: 16,
    softDropSpeed: 5,
    enableGhost: true,
    enableHardDrop: true,
    enableHold: true,
    holdCount: 1,
    singleRotate: false,
    enableRotate180: true,
    enableNext: true,
    nextCount: 5,
    maxNextCount: 16,
    blockGeneration: '7bag',
    rotateMode: 'SRS',
    spinMode: 'onlyT',
    garbageCollectionMode: 'together',
    garbageSpawnMode: 'immediately',
    garbageSpawnType: 'normal',
    layout: 'middle',
    name: 'null',
    enableBlockSpace: true,
    DAS: 10,
    ARR: 2
}
var defaultSkinSettings = {
    skin: 'defaultSkin',
    mode: 'single'
}
var defaultMenuOptions = ['单人游戏', '多人游戏(会写的)', '设置', '更多(会写的)', '鲁ICP备20017865号'];
var defaultModeOptions = ['40L', '150L', '999L', '马拉松', '150s', 'C4W', 'S4W', '返回'];
var defaultSettingOptions = ['左', '右', '软降', '硬降', '右旋', '左旋', '180度旋', '暂存', '重开', '返回', '暂停'];
var defaultSettingOptions2 = ['重力', '软降间隔', '影子', '硬降', '暂存', '暂存数量', '单旋', '180度旋', '预览块', '预览数量', '块间隔', 'ARR', 'DAS'];
var kickWallsRight = [
    [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
    [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],
    [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
    [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]]
]
var kickWallsLeft = [
    [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
    [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],
    [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
    [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]]
]
var kickWallsRightI = [
    [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]],
    [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]],
    [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]],
    [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]]
]
var kickWallsLeftI = [
    [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]],
    [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]],
    [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]],
    [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]]
]
var comboList = [0, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5];
function baseCleanData() {
    this.combo = -1;
    this.b2b = false;
    this.cleanedLine = 0;
    this.cleanedLineThisTime = 0;
    this.kickWall = 0;
    this.attack = 0;
    this.tspin = false;
    this.countAttack = countAttack;
    function countAttack() {
        var att = 0;
        if (this.tspin) {
            switch (this.cleanedLineThisTime) {
                case 1:
                    att += 2;
                    break;
                case 2:
                    att += 4;
                    break;
                case 3:
                    att += 6;
                    break;
            }
        }
        else {
            switch (this.cleanedLineThisTime) {
                case 2:
                    att += 1;
                    break;
                case 3:
                    att += 2;
                    break;
                case 4:
                    att += 4;
                    break;
            }
        }
        if (this.b2b) {
            att += 1;
        }
        if (this.prefectClear) {
            att += 10;
        }
        if (this.combo >= 0) {
            if (this.combo < comboList.length) {
                att += comboList[this.combo];
            }
            else {
                att += comboList[comboList.length - 1];
            }
        }
        this.attack = att;
    }
}