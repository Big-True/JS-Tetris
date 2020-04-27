function layout(width, height, count = 0, pos = 'middle') {
    if (count == 0) {
        this.maxUnit = Math.min(width / 2, height / 3);
        this.baseUnit = maxUnit / 7;
        this.playWidth = maxUnit * 2;
        this.playHeight = maxUnit * 3;
        switch (pos) {
            case 'left':
                this.posx = 0;
                this.posy = 0;
                break;
            case 'right':
                this.posx = width - playWidth;
                this.posy = 0;
                break;
            case 'middle':
                this.posx = (width - playWidth) / 2;
                this.posy = 0;
        }
    }
}