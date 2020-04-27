function rng(inSeed =0) {
    this.rand = rand;
    date=new Date()
    inSeed=date.getTime();
    this.seed = inSeed;
    function rand(min, max) {
        this.seed = (this.seed * 1103515245 + 12345) % Math.pow(2, 32);
        return (this.seed % (max - min + 1)) + min;
    }
}