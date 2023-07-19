class Random {
    getInt(max) {
        return this.getArbitraryInt(0, max);
    }

    getArbitraryInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    getBoolean() {
        return Math.random() * 2 > 1;
    }

    getItem(array) {
        const max = array.length - 1;
        return array[this.getInt(max)];
    }
}

window.Random = Random;