"use strict";

const {By, until, Key} = require("selenium-webdriver");
const BasePage = require('./utils/BasePage');
const TestDataGenerator = require('./utils/TestDataGenerator');

class CalculatorPage extends BasePage{

    constructor(driver){
        super(driver);
        this.testDataGenerator = new TestDataGenerator(driver);

        //calculator page web elements
        this._calculatorPageTitle = By.xpath("//h1");
        //input/output display
        this._calculatorPageIODisplay = By.xpath("//input[@id='output']");
        //numpad elements
        this.numPadKeys = {
            '0': By.xpath("//button[text()='0']"),
            '1': By.xpath("//button[text()='1']"),
            '2': By.xpath("//button[text()='2']"),
            '3': By.xpath("//button[text()='3']"),
            '4': By.xpath("//button[text()='4']"),
            '5': By.xpath("//button[text()='5']"),
            '6': By.xpath("//button[text()='6']"),
            '7': By.xpath("//button[text()='7']"),
            '8': By.xpath("//button[text()='8']"),
            '9': By.xpath("//button[text()='9']")
        }
        //arithmetic ops button elements
        this._calculatorPageAdditionButton = By.xpath("//button[text()='+']");
        this._calculatorPageSubtractionButton = By.xpath("//button[text()='-']");
        this._calculatorPageMultiplicationButton = By.xpath("//button[text()='*']");
        this._calculatorPageDivisionButton = By.xpath("//button[text()='/']");
        //other functions button elements
        this._calculatorPageDecimalButton = By.xpath("//button[text()='.']");
        this._calculatorPageClearButton = By.xpath("//button[text()='C']");
        this._calculatorPageEqualsButton = By.xpath("//button[text()='=']");

        this.randomNumber1 = null;
        this.randomNumber2 = null;
    }

    //random number input methods

    async inputRandomNumberOne() {
        const display = await this.driver.findElement(this._calculatorPageIODisplay);
        this.randomNumber1 = this.testDataGenerator.getRandomNumberOne();
        await display.clear();
        await display.sendKeys(this.randomNumber1);
        return this.randomNumber1;
    }

    async inputRandomNumberTwo() {
        const display = await this.driver.findElement(this._calculatorPageIODisplay);
        this.randomNumber2 = this.testDataGenerator.getRandomNumberTwo();
        await display.clear();
        await display.sendKeys(this.randomNumber2);
        return this.randomNumber2;
    }

    //manual string input methods
    async inputStringAdditionOne() {
        const display = await this.driver.findElement(this._calculatorPageIODisplay);
        await display.clear();
        await display.sendKeys("SAG");
    }

    async inputStringAdditionTwo() {
        const display = await this.driver.findElement(this._calculatorPageIODisplay);
        await display.clear();
        await display.sendKeys("DWG");
    }

    async inputStringSubtractionOne() {
        const display = await this.driver.findElement(this._calculatorPageIODisplay);
        await display.clear();
        await display.sendKeys("DSW");
    }

    async inputStringSubtractionTwo() {
        const display = await this.driver.findElement(this._calculatorPageIODisplay);
        await display.clear();
        await display.sendKeys("AHG");
    }

    async inputStringMultiplicationOne() {
        const display = await this.driver.findElement(this._calculatorPageIODisplay);
        await display.clear();
        await display.sendKeys("DFH");
    }

    async inputStringMultiplicationTwo() {
        const display = await this.driver.findElement(this._calculatorPageIODisplay);
        await display.clear();
        await display.sendKeys("CVF");
    }

    async inputStringDivisionOne() {
        const display = await this.driver.findElement(this._calculatorPageIODisplay);
        await display.clear();
        await display.sendKeys("DGHTFD");
    }

    async inputStringDivisionTwo() {
        const display = await this.driver.findElement(this._calculatorPageIODisplay);
        await display.clear();
        await display.sendKeys("SHTB");
    }

    //number one getter
    async getNumber1() {
        return this.randomNumber1;
    }
    //number two getter
    async getNumber2() {
        return this.randomNumber2;
    }

    //calculator display output getter
    async getCalculationOutput(){
        const outputDisplay = await this.driver.wait(
            until.elementLocated(this._calculatorPageIODisplay),
            1500
        );
        return await outputDisplay.getAttribute("value");
    }

    //calculator page numpad click methods
    async clickNumpadNumber(number) {
        const numberButton = await this.driver.findElement(this.numPadKeys[number]);
        await numberButton.click();
    }

    //calculator functions button click methods
    async clickAdditionButton(){
        const addButton = await this.driver.findElement(this._calculatorPageAdditionButton);
        await addButton.click();
    }

    async clickSubtractionButton(){
        const minusButton = await this.driver.findElement(this._calculatorPageSubtractionButton);
        await minusButton.click();
    }

    async clickMultiplicationButton(){
        const multiplyButton = await this.driver.findElement(this._calculatorPageMultiplicationButton);
        await multiplyButton.click();
    }

    async clickDivisionButton(){
        const divideButton = await this.driver.findElement(this._calculatorPageDivisionButton);
        await divideButton.click();
    }

    async clickDecimalButton(){
        const decimalButton = await this.driver.findElement(this._calculatorPageDecimalButton);
        await decimalButton.click();
    }

    async clickClearButton() {
        const clearButton = await this.driver.findElement(this._calculatorPageClearButton);
        await clearButton.click();
    }

    async clickEqualsButton() {
        const equalsButton = await this.driver.findElement(this._calculatorPageEqualsButton);
        await equalsButton.click();
    }

    //calculator page text element getter
    async getCalculatorPageTitle(){
        const calcPageTitle = await this.driver.findElement(this._calculatorPageTitle);
        return await calcPageTitle.getText();
    }

    //calculator page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isCalculatorPagePageWebElementDisplayed(){
        const elementsToCheck = [
            this._calculatorPageTitle,
            this._calculatorPageIODisplay,
            this.numPadKeys['0'],
            this.numPadKeys['1'],
            this.numPadKeys['2'],
            this.numPadKeys['3'],
            this.numPadKeys['4'],
            this.numPadKeys['5'],
            this.numPadKeys['6'],
            this.numPadKeys['7'],
            this.numPadKeys['8'],
            this.numPadKeys['9'],
            this._calculatorPageDecimalButton,
            this._calculatorPageAdditionButton,
            this._calculatorPageSubtractionButton,
            this._calculatorPageMultiplicationButton,
            this._calculatorPageDivisionButton,
            this._calculatorPageClearButton,
            this._calculatorPageEqualsButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { CalculatorPage }

