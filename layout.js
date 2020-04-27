function layout(width, height, count = 0, pos = 'middle') {
    if (count == 0) {
        this.maxUnit = Math.min(width, height);
        this.playWidth = this.maxUnit;
        this.playHeight = this.maxUnit;
        this.baseUnit = this.playHeight / 22;
        switch (pos) {
            case 'left':
                this.posx = 0;
                this.posy = 0;
                break;
            case 'right':
                this.posx = width - this.playWidth;
                this.posy = 0;
                break;
            case 'middle':
                this.posx = (width - this.playWidth) / 2;
                this.posy = 0;
                break;
        }
        this.mapPosx = this.posx + (this.playWidth - this.baseUnit * 10) / 2;
        this.mapPosy = this.baseUnit * 1.5;
    }
}