function baseGameObj() {
    for (var i in defaultGameSettings) {
        this[i] = defaultGameSettings[i];
    };
    this.map = new Array();
    for (var i = 0; i < this.maxHeight; ++i) {
        this.map[i] = new Array();
        for (var j = 0; j < this.width; ++j) {
            this.map[i][j] = 0;
        }
    }
}