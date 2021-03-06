document.onmousedown = function (event) {
    switch (NowPos) {
        case 'menu':
            clickBaseMenu(event.clientX, event.clientY);
            break;
        case 'singleMenu':
            clickSingleMenu(event.clientX, event.clientY);
            break;
        case 'settings':
            clickSettingsMenu(event.clientX, event.clientY);
            break;
        case 'more':
            clickMoreMenu(event.clientX, event.clientY);
            break;
    }
    draw(gameCanvas);
}
document.onkeydown = function (event) {
    switch (NowPos) {
        case 'singleGame':
            keyDown[key2str[event.keyCode]] = true;
            break;
        case 'settings':
            if (settingsPos != -1) {
                switch (settingsPos) {
                    case 0:
                        inputKeys.moveLeft = event.keyCode;
                        break;
                    case 1:
                        inputKeys.moveRight = event.keyCode;
                        break;
                    case 2:
                        inputKeys.softDrop = event.keyCode;
                        break;
                    case 3:
                        inputKeys.hardDrop = event.keyCode;
                        break;
                    case 4:
                        inputKeys.rotateRight = event.keyCode;
                        break;
                    case 5:
                        inputKeys.rotateLeft = event.keyCode;
                        break;
                    case 6:
                        inputKeys.rotate180 = event.keyCode;
                        break;
                    case 7:
                        inputKeys.hold = event.keyCode;
                        break;
                    case 8:
                        inputKeys.restart = event.keyCode;
                        break;
                    case 9:
                        inputKeys.back = event.keyCode;
                        break;
                    case 10:
                        inputKeys.pause = event.keyCode;
                        break;
                }
                settingsPos = -1;
                if (window.localStorage) {
                    window.localStorage.inputKeys = JSON.stringify(inputKeys);
                }
            }
    }
    draw(gameCanvas);
}
document.onkeyup = function (event) {
    switch (NowPos) {
        case 'singleGame':
            keyDown[key2str[event.keyCode]] = false;
            break;
    }
}
var keyDown = {
    'Backspace': false,
    'Tab': false,
    'Enter': false,
    'Shift': false,
    'Ctrl': false,
    'Alt': false,
    'Pause': false,
    'Caps Lock': false,
    'Esc': false,
    'Space': false,
    'PgUp': false,
    'PgDn': false,
    'End': false,
    'Home': false,
    '←': false,
    '↑': false,
    '→': false,
    '↓': false,
    'Left': false,
    'Up': false,
    'Right': false,
    'Down': false,
    'Insert': false,
    'Delete': false,
    '0': false,
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
    '6': false,
    '7': false,
    '8': false,
    '9': false,
    ';': false,
    '=': false,
    'A': false,
    'B': false,
    'C': false,
    'D': false,
    'E': false,
    'F': false,
    'G': false,
    'H': false,
    'I': false,
    'J': false,
    'K': false,
    'L': false,
    'M': false,
    'N': false,
    'O': false,
    'P': false,
    'Q': false,
    'R': false,
    'S': false,
    'T': false,
    'U': false,
    'V': false,
    'W': false,
    'X': false,
    'Y': false,
    'Z': false,
    '#0': false,
    '#1': false,
    '#2': false,
    '#3': false,
    '#4': false,
    '#5': false,
    '#6': false,
    '#7': false,
    '#8': false,
    '#9': false,
    '*': false,
    '+': false,
    '-': false,
    '.': false,
    '/': false,
    'F1': false,
    'F2': false,
    'F3': false,
    'F4': false,
    'F5': false,
    'F6': false,
    'F7': false,
    'F8': false,
    'F9': false,
    'F10': false,
    'F11': false,
    'F12': false,
    '-': false,
    ';': false,
    '=': false,
    ',': false,
    '-': false,
    '.': false,
    '/': false,
    '`': false,
    '[': false,
    '\\': false,
    ']': false,
    "'": false,
    'none': false,
};
var keyPress = {
    'Backspace': 0,
    'Tab': 0,
    'Enter': 0,
    'Shift': 0,
    'Ctrl': 0,
    'Alt': 0,
    'Pause': 0,
    'Caps Lock': 0,
    'Esc': 0,
    'Space': 0,
    'PgUp': 0,
    'PgDn': 0,
    'End': 0,
    'Home': 0,
    '←': 0,
    '↑': 0,
    '→': 0,
    '↓': 0,
    'Left': 0,
    'Up': 0,
    'Right': 0,
    'Down': 0,
    'Insert': 0,
    'Delete': 0,
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
    ';': 0,
    '=': 0,
    'A': 0,
    'B': 0,
    'C': 0,
    'D': 0,
    'E': 0,
    'F': 0,
    'G': 0,
    'H': 0,
    'I': 0,
    'J': 0,
    'K': 0,
    'L': 0,
    'M': 0,
    'N': 0,
    'O': 0,
    'P': 0,
    'Q': 0,
    'R': 0,
    'S': 0,
    'T': 0,
    'U': 0,
    'V': 0,
    'W': 0,
    'X': 0,
    'Y': 0,
    'Z': 0,
    '#0': 0,
    '#1': 0,
    '#2': 0,
    '#3': 0,
    '#4': 0,
    '#5': 0,
    '#6': 0,
    '#7': 0,
    '#8': 0,
    '#9': 0,
    '*': 0,
    '+': 0,
    '-': 0,
    '.': 0,
    '/': 0,
    'F1': 0,
    'F2': 0,
    'F3': 0,
    'F4': 0,
    'F5': 0,
    'F6': 0,
    'F7': 0,
    'F8': 0,
    'F9': 0,
    'F10': 0,
    'F11': 0,
    'F12': 0,
    '-': 0,
    ';': 0,
    '=': 0,
    ',': 0,
    '-': 0,
    '.': 0,
    '/': 0,
    '`': 0,
    '[': 0,
    '\\': 0,
    ']': 0,
    "'": 0,
    'none': 0,
};