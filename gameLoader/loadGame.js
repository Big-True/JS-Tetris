function loadgame(mode) {
    mode = mode || 'single';
    switch (mode) {
        case 'single':
            playerObj = new baseGameObj();
            break;
    }
}