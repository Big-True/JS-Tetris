function rng(seed = date.getTime()) {
    this.rand=rand;
    function rand(min, max) {
        seed = (seed * 1103515245 + 12345) % Math.pow(2, 32);
        return seed % (max - min + 1) + min;
    }
}