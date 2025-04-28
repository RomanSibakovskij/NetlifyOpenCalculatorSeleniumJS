const BasePage = require('./BasePage');

class TestDataGenerator extends BasePage {
    constructor(driver) {
        super(driver);
        this.maxNumber = 3600;
        this.minNumber = 1;
    }

    //random number one generator
    getRandomNumberOne() {
        const randomNumberOne = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1)) + this.minNumber;
        console.log('Random generated number one: ' + randomNumberOne);
        return randomNumberOne;
    }

    //random number two generator
    getRandomNumberTwo() {
        const randomNumberTwo = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1)) + this.minNumber;
        console.log('Random generated number two: ' + randomNumberTwo);
        return randomNumberTwo;
    }
}

module.exports = TestDataGenerator;