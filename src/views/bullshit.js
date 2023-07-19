class Random {
    getInt(max) {
        const res = Math.floor(Math.random() * max);
        return res;
    }

    getArbitraryInt(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    getItem(array) {
        const max = array.length - 1;
        return array[this.getInt(max)];
    }
}

class Bullshit {
    constructor() {
        this.Random = new Random();
    }

    japaneseSyllables = ['wa','wo','wu','we','ka','ko','ku','ke','ma','mo','mu','me','ra','ro','ru','re','da','do','du','de','i','e','o'];

    generateJapaneseWord(numberSyllables) {
        let result = '';
        for (let i=0; i<numberSyllables; i++) {
            result += this.Random.getItem(this.japaneseSyllables);
        }
        
        return result;
    }
  }
  
window.Bullshit = Bullshit;