"use strict";

const fs = require('fs');
const path = require('path');
const assert = require("node:assert");
const Logger = require('../../pages/utils/Logger');
const { CalculatorPage } = require('../../pages/CalculatorPage');

class TestMethods {

    constructor(driver) {this.driver = driver;}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid arithmetic manual keypad input operations tests

    //valid two numbers manual keypad addition test method
    async twoNumbersManualInputAdditionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(7);
        await calculatorPage.clickNumpadNumber(5);
        //click 'Addition' button
        await calculatorPage.clickAdditionButton();
        //input number two
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(1);
        //log the input numbers
        const num1 = 275;
        const num2 = 21;
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localAdditionResult = num1 + num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const additionResult = parseInt(await calculatorPage.getCalculationOutput(), 10);
        //local comparator
        assert.strictEqual(additionResult, localAdditionResult, "The local two numbers addition (manual input) and local addition results don't match");
        //log the result
        Logger.info('Local comparator result: ', localAdditionResult);
        Logger.info('Calculation (addition) result: ', additionResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Addition Calculation Test Result (manual input => 275 + 21)");
    }
    //valid two decimal numbers manual keypad addition test method
    async twoDecimalNumbersManualInputAdditionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one (61.5)
        await calculatorPage.clickNumpadNumber(6);
        await calculatorPage.clickNumpadNumber(1);
        //click 'Decimal' button
        await calculatorPage.clickDecimalButton();
        await calculatorPage.clickNumpadNumber(5);
        //click 'Addition' button
        await calculatorPage.clickAdditionButton();
        //input number two (51.75)
        await calculatorPage.clickNumpadNumber(5);
        await calculatorPage.clickNumpadNumber(1);
        //click 'Decimal' button
        await calculatorPage.clickDecimalButton();
        await calculatorPage.clickNumpadNumber(7);
        await calculatorPage.clickNumpadNumber(5);
        //log the input numbers
        const num1 = 61.5;
        const num2 = 51.75;
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localAdditionResult = num1 + num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const decimalAdditionResult = parseFloat(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(decimalAdditionResult, localAdditionResult, "The local two decimal (manual input) numbers addition and local addition results don't match");
        //log the result
        Logger.info('Local comparator result: ', localAdditionResult);
        Logger.info('Decimal calculation (addition) result: ', decimalAdditionResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Decimal Numbers Addition Calculation Test Result (manual input => 61.5 + 51.75)");
    }

    //valid arithmetic two random numbers input operations test (addition)

    //valid two random numbers addition test method
    async twoRandomNumbersInputAdditionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input random number one
        await calculatorPage.inputRandomNumberOne();
        //get random number one
        const num1 = await calculatorPage.getNumber1();
        //click 'Addition' button
        await calculatorPage.clickAdditionButton();
        //input random number two
        await calculatorPage.inputRandomNumberTwo();
        //get random number two
        const num2 = await calculatorPage.getNumber2();
        //log the input numbers
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localRandomNumAdditionResult = num1 + num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const randomNumAdditionResult = parseInt(await calculatorPage.getCalculationOutput(), 10);
        //local comparator
        assert.strictEqual(randomNumAdditionResult, localRandomNumAdditionResult, "The local two random numbers addition and local addition results don't match");
        //log the result
        Logger.info('Local comparator result: ', localRandomNumAdditionResult);
        Logger.info('Calculation (random numbers addition) result: ', randomNumAdditionResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Addition Calculation Test Result (random numbers input)");
    }

    //valid two numbers manual input subtraction tests

    //valid two numbers manual keypad subtraction test method
    async twoNumbersManualInputSubtractionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(1);
        await calculatorPage.clickNumpadNumber(5);
        await calculatorPage.clickNumpadNumber(3);
        //click 'Subtraction' button
        await calculatorPage.clickSubtractionButton();
        //input number two
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(1);
        await calculatorPage.clickNumpadNumber(8);
        //log the input numbers
        const num1 = 2153;
        const num2 = 218;
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localSubtractionResult = num1 - num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const subtractionResult = parseInt(await calculatorPage.getCalculationOutput(), 10);
        //local comparator
        assert.strictEqual(subtractionResult, localSubtractionResult, "The local two numbers (manual input) subtraction and local subtraction results don't match");
        //log the result
        Logger.info('Local comparator result: ', localSubtractionResult);
        Logger.info('Calculation (subtraction) result: ', subtractionResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Subtraction Calculation Test Result (manual input => 2153 - 218)");
    }
    //valid two numbers manual keypad subtraction (negative test result) test method
    async twoNumbersManualInputNegativeResultSubtractionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one (53)
        await calculatorPage.clickNumpadNumber(5);
        await calculatorPage.clickNumpadNumber(3);
        //click 'Subtraction' button
        await calculatorPage.clickSubtractionButton();
        //input number two (73)
        await calculatorPage.clickNumpadNumber(7);
        await calculatorPage.clickNumpadNumber(3);
        //log the input numbers
        const num1 = 53;
        const num2 = 73;
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localSubtractionResult = num1 - num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const subtractionResult = parseInt(await calculatorPage.getCalculationOutput(), 10);
        //local comparator
        assert.strictEqual(subtractionResult, localSubtractionResult, "The local two numbers (manual input) negative subtraction and local negative subtraction results don't match");
        //log the result
        Logger.info('Local comparator result: ', localSubtractionResult);
        Logger.info('Calculation (subtraction) result: ', subtractionResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Negative Subtraction Calculation Test Result (manual input => 53 - 73)");
    }
    //valid two decimal numbers manual keypad subtraction test method
    async twoDecimalNumbersManualInputSubtractionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one (846.35)
        await calculatorPage.clickNumpadNumber(8);
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickNumpadNumber(6);
        //click 'Decimal' button
        await calculatorPage.clickDecimalButton();
        await calculatorPage.clickNumpadNumber(3);
        await calculatorPage.clickNumpadNumber(5);
        //click 'Subtraction' button
        await calculatorPage.clickSubtractionButton();
        //input number two (151.85)
        await calculatorPage.clickNumpadNumber(1);
        await calculatorPage.clickNumpadNumber(5);
        await calculatorPage.clickNumpadNumber(1);
        //click 'Decimal' button
        await calculatorPage.clickDecimalButton();
        await calculatorPage.clickNumpadNumber(8);
        await calculatorPage.clickNumpadNumber(5);
        //log the input numbers
        const num1 = 846.35;
        const num2 = 151.85;
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localDecimalSubtractionResult = num1 - num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const decimalSubtractionResult = parseFloat(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(decimalSubtractionResult, localDecimalSubtractionResult, "The local two numbers (manual input) subtraction and local subtraction results don't match");
        //log the result
        Logger.info('Local comparator result: ', localDecimalSubtractionResult);
        Logger.info('Decimal calculation (subtraction) result: ', decimalSubtractionResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Decimal Numbers Subtraction Calculation Test Result (manual input => 846.35 - 151.85)");
    }

    //valid two random numbers subtraction test

    //valid two random numbers subtraction test method
    async twoRandomNumbersInputSubtractionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one
        await calculatorPage.inputRandomNumberOne();
        //get random number one
        const num1 = await calculatorPage.getNumber1();
        //click 'Subtraction' button
        await calculatorPage.clickSubtractionButton();
        //input number two
        await calculatorPage.inputRandomNumberTwo();
        //get random number two
        const num2 = await calculatorPage.getNumber2();
        //log the input numbers
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localRandomNumSubtractionResult = num1 - num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const randomNumSubtractionResult = parseInt(await calculatorPage.getCalculationOutput(), 10);
        //local comparator
        assert.strictEqual(randomNumSubtractionResult, localRandomNumSubtractionResult, "The local two random numbers subtraction and local subtraction results don't match");
        //log the result
        Logger.info('Local comparator result: ', localRandomNumSubtractionResult);
        Logger.info('Calculation (random numbers subtraction) result: ', randomNumSubtractionResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Subtraction Calculation Test Result (random numbers input)");
    }

    //valid two numbers multiplication tests

    //valid two numbers manual keypad multiplication test method
    async twoNumbersManualInputMultiplicationTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one (486)
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickNumpadNumber(8);
        await calculatorPage.clickNumpadNumber(6);
        //click 'Multiplication' button
        await calculatorPage.clickMultiplicationButton();
        //input number two (8)
        await calculatorPage.clickNumpadNumber(8);
        //log the input numbers
        const num1 = 486;
        const num2 = 8;
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localMultiplicationResult = num1 * num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const multiplicationResult = parseInt(await calculatorPage.getCalculationOutput(), 10);
        //local comparator
        assert.strictEqual(multiplicationResult, localMultiplicationResult, "The local two numbers (manual input) multiplication and local multiplication results don't match");
        //log the result
        Logger.info('Local comparator result: ', localMultiplicationResult);
        Logger.info('Calculation (multiplication) result: ', multiplicationResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Multiplication Calculation Test Result (manual input => 486 * 8)");
    }
    //valid two decimal numbers manual keypad multiplication test method
    async twoDecimalNumbersManualInputMultiplicationTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one (86.75)
        await calculatorPage.clickNumpadNumber(8);
        await calculatorPage.clickNumpadNumber(6);
        //click 'Decimal' button
        await calculatorPage.clickDecimalButton();
        await calculatorPage.clickNumpadNumber(7);
        await calculatorPage.clickNumpadNumber(5);
        //click 'Multiplication' button
        await calculatorPage.clickMultiplicationButton();
        //input number two (32.25)
        await calculatorPage.clickNumpadNumber(3);
        await calculatorPage.clickNumpadNumber(2);
        //click 'Decimal' button
        await calculatorPage.clickDecimalButton();
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(5);
        //log the input numbers
        const num1 = 86.75;
        const num2 = 32.25;
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localDecimalMultiplicationResult = num1 * num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const decimalMultiplicationResult = parseFloat(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(decimalMultiplicationResult, localDecimalMultiplicationResult, "The local two decimal numbers (manual input) multiplication and local multiplication results don't match");
        //log the result
        Logger.info('Local comparator result: ', localDecimalMultiplicationResult);
        Logger.info('Decimal calculation (multiplication) result: ', decimalMultiplicationResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Decimal Numbers Multiplication Calculation Test Result (manual input => 86.75 * 32.25)");
    }

    //valid two random numbers multiplication test

    //valid two random numbers multiplication test method
    async twoRandomNumbersMultiplicationTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input random number one
        await calculatorPage.inputRandomNumberOne()
        //get random number one
        const num1 = await calculatorPage.getNumber1();
        //click 'Multiplication' button
        await calculatorPage.clickMultiplicationButton();
        //input random number two
        await calculatorPage.inputRandomNumberTwo();
        //get random number two
        const num2 = await calculatorPage.getNumber2();
        //log the input numbers
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localRandomNumMultiplicationResult = num1 * num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const randomNumMultiplicationResult = parseInt(await calculatorPage.getCalculationOutput(), 10);
        //local comparator
        assert.strictEqual(randomNumMultiplicationResult, localRandomNumMultiplicationResult, "The local two random numbers multiplication and local multiplication results don't match");
        //log the result
        Logger.info('Local comparator result: ', localRandomNumMultiplicationResult);
        Logger.info('Calculation (random numbers multiplication) result: ', randomNumMultiplicationResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Multiplication Calculation Test Result (random numbers input)");
    }

    //valid two numbers division tests

    //valid two numbers manual keypad division test method
    async twoNumbersManualInputDivisionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one (81)
        await calculatorPage.clickNumpadNumber(8);
        await calculatorPage.clickNumpadNumber(1);
        //click 'Division' button
        await calculatorPage.clickDivisionButton();
        //input number two (9)
        await calculatorPage.clickNumpadNumber(9);
        //log the input numbers
        const num1 = 81;
        const num2 = 9;
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localDivisionResult = num1 / num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const divisionResult = parseInt(await calculatorPage.getCalculationOutput(), 10);
        //local comparator
        assert.strictEqual(divisionResult, localDivisionResult, "The local two numbers (manual input) division and local division results don't match");
        //log the result
        Logger.info('Local comparator result: ', localDivisionResult);
        Logger.info('Calculation (division) result: ', divisionResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Division Calculation Test Result (manual input => 81 / 9)");
    }
    //valid two decimal numbers manual keypad division test method
    async twoDecimalNumbersManualInputDivisionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one (32.58)
        await calculatorPage.clickNumpadNumber(3);
        await calculatorPage.clickNumpadNumber(2);
        //click 'Decimal' button
        await calculatorPage.clickDecimalButton();
        await calculatorPage.clickNumpadNumber(5);
        await calculatorPage.clickNumpadNumber(8);
        //click 'Division' button
        await calculatorPage.clickDivisionButton();
        //input number two (18.26)
        await calculatorPage.clickNumpadNumber(1);
        await calculatorPage.clickNumpadNumber(8);
        //click 'Decimal' button
        await calculatorPage.clickDecimalButton();
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(6);
        //log the input numbers
        const num1 = 32.58;
        const num2 = 18.26;
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localDecimalDivisionResult = num1 / num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const decimalDivisionResult = parseFloat(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(decimalDivisionResult, localDecimalDivisionResult, "The local two decimal numbers (manual input) division and local division results don't match");
        //log the result
        Logger.info('Local comparator result: ', localDecimalDivisionResult);
        Logger.info('Decimal calculation (division) result: ', decimalDivisionResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Decimal Numbers Division Calculation Test Result (manual input => 32.58 / 18.26)");
    }

    //valid two random numbers division tests

    //valid two random numbers division test method
    async twoRandomNumbersDivisionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input random number one
        const num1 = await calculatorPage.inputRandomNumberOne();
        //click 'Division' button
        await calculatorPage.clickDivisionButton();
        //input random number two
        const num2 = await calculatorPage.inputRandomNumberTwo();
        //log the input numbers
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localRandomNumDivisionResult = num1 / num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const randomNumDivisionResult = parseFloat(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(randomNumDivisionResult, localRandomNumDivisionResult, "The local two numbers (manual input) division and local division results don't match");
        //log the result
        Logger.info('Local comparator result: ', localRandomNumDivisionResult);
        Logger.info('Calculation (random numbers division) result: ', randomNumDivisionResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Two Numbers Division Calculation Test Result (random numbers input)");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid complex calculation tests

    //valid multiple numbers (manual keypad) addition test method
    async multipleNumbersManualInputCalculationTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(7);
        await calculatorPage.clickNumpadNumber(5);
        //click 'Addition' button
        await calculatorPage.clickAdditionButton();
        //input number two
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(1);
        //click 'Multiplication' button
        await calculatorPage.clickMultiplicationButton();
        //input number three
        await calculatorPage.clickNumpadNumber(8);
        //click 'Division' button
        await calculatorPage.clickDivisionButton();
        //input number four
        await calculatorPage.clickNumpadNumber(4);
        //log the input numbers
        const num1 = 275;
        const num2 = 21;
        const num3 = 8;
        const num4 = 4;
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        Logger.info('Number 3: ', num2);
        Logger.info('Number 4: ', num2);
        //calculate the result locally
        const localAdditionResult = num1 + num2 * num3 / num4;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const additionResult = parseInt(await calculatorPage.getCalculationOutput(), 10);
        //local comparator
        assert.strictEqual(additionResult, localAdditionResult, "The local multiple numbers addition (manual input) and local addition results don't match");
        //log the result
        Logger.info('Local comparator result: ', localAdditionResult);
        Logger.info('Calculation (multiple numbers) result: ', additionResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Multiple Numbers Calculation Test Result (manual input => 275 + 21 * 8 / 4)");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //invalid arithmetic input operations tests - two strings input

    //invalid two strings addition test method
    async invalidTwoStringsAdditionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input string one
        await calculatorPage.inputStringAdditionOne();
        //click addition button
        await calculatorPage.clickAdditionButton();
        //input number two
        await calculatorPage.inputStringAdditionTwo()
        //log the input strings
        const str1 = "SAG";
        const str2 = "DWG";
        Logger.info('String 1: ', str1);
        Logger.info('String 2: ', str2);
        //calculate the result locally
        const localAdditionStrResult = str1 + str2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const additionStrResult = await calculatorPage.getCalculationOutput();
        //local comparator (assert the results won't match => to simulate 'Equals' button inoperability)
        assert.notStrictEqual(additionStrResult, localAdditionStrResult, "The local two strings addition operation wasn't aborted.");
        //log the result
        Logger.info('Local comparator result: ', localAdditionStrResult);
        Logger.info('Invalid calculation (string addition -> "Equals" button is not clickable) result: ', additionStrResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Two Strings Addition Calculation Test Result (manual input => 'SAG' + 'DWG')");
    }
    //invalid two strings subtraction test method
    async invalidTwoStringsSubtractionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input string one
        await calculatorPage.inputStringSubtractionOne();
        //click 'Subtraction' button
        await calculatorPage.clickSubtractionButton();
        //input number two
        await calculatorPage.inputStringSubtractionTwo()
        //log the input strings
        const str1 = "DSW";
        const str2 = "AHG";
        Logger.info('String 1: ', str1);
        Logger.info('String 2: ', str2);
        //calculate the result locally
        const localSubtractionStrResult = str1 - str2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const subtractionStrResult = await calculatorPage.getCalculationOutput();
        //local comparator (assert the results won't match => to simulate 'Equals' button inoperability)
        assert.notStrictEqual(subtractionStrResult, localSubtractionStrResult, "The two strings subtraction operation wasn't aborted.");
        //log the result
        Logger.info('Local comparator result: ', localSubtractionStrResult);
        Logger.info('Invalid calculation (string subtraction -> "Equals" button is not clickable) result: ', subtractionStrResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Two Strings Subtraction Calculation Test Result (manual input => 'DSW' - 'AHG')");
    }
    //invalid two strings multiplication test method
    async invalidTwoStringsMultiplicationTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input string one
        await calculatorPage.inputStringMultiplicationOne();
        //click 'Multiplication' button
        await calculatorPage.clickMultiplicationButton();
        //input number two
        await calculatorPage.inputStringMultiplicationTwo();
        //log the input strings
        const str1 = "DFH";
        const str2 = "CVF";
        Logger.info('String 1: ', str1);
        Logger.info('String 2: ', str2);
        //calculate the result locally
        const localMultiplicationStrResult = str1 * str2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const multiplicationStrResult = await calculatorPage.getCalculationOutput();
        //local comparator (assert the results won't match => to simulate 'Equals' button inoperability)
        assert.notStrictEqual(multiplicationStrResult, localMultiplicationStrResult, "The two strings multiplication operation wasn't aborted.");
        //log the result
        Logger.info('Local comparator result: ', localMultiplicationStrResult);
        Logger.info('Invalid calculation (string multiplication -> "Equals" button is not clickable) result: ', multiplicationStrResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Two Strings Multiplication Calculation Test Result (manual input => 'DFH' * 'CVF')");
    }
    //invalid two strings division test method
    async invalidTwoStringsDivisionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input string one
        await calculatorPage.inputStringDivisionOne();
        //click 'Division' button
        await calculatorPage.clickDivisionButton();
        //input string two
        await calculatorPage.inputStringDivisionTwo();
        //log the input strings
        const str1 = "DGHTFD";
        const str2 = "SHTB";
        Logger.info('String 1: ', str1);
        Logger.info('String 2: ', str2);
        //calculate the result locally
        const localDivisionStrResult = str1 / str2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const divisionStrResult = await calculatorPage.getCalculationOutput();
        //local comparator (assert the results won't match => to simulate 'Equals' button inoperability)
        assert.notStrictEqual(divisionStrResult, localDivisionStrResult, "The two strings division operation wasn't aborted.");
        //log the result
        Logger.info('Local comparator result: ', localDivisionStrResult);
        Logger.info('Invalid calculation (string division -> "Equals" button is not clickable) result: ', divisionStrResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Two Strings Division Calculation Test Result (manual input => 'DGHTFD' / 'SHTB')");
    }

    //invalid math operation tests

    //invalid two numbers manual keypad division by zero test method
    async twoNumbersManualInputDivisionByZeroTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one (23)
        await calculatorPage.clickNumpadNumber(2);
        await calculatorPage.clickNumpadNumber(3);
        //click 'Division' button
        await calculatorPage.clickDivisionButton();
        //input number two (0)
        await calculatorPage.clickNumpadNumber(0);
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const invalidDivisionResult = await calculatorPage.getCalculationOutput();
        //log the input numbers
        const num1 = 23;
        const num2 = 0;
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //assert the user gets an expected error output
        assert.strictEqual(invalidDivisionResult, "Infinity", "The division by zero error output message doesn't match");
        //log the result
        Logger.info('Calculation (division by zero) result: ', invalidDivisionResult);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Two Numbers Division Calculation Test Result (manual input => 23 / 0)");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //calculator function test

    //calculator 'Clear' button function test method
    async calculatorClearButtonFunctionTest(){
        const calculatorPage = new CalculatorPage(this.driver);
        //calculator page web element assert
        await calculatorPage.isCalculatorPagePageWebElementDisplayed();
        //assert calculator page title is as expected
        await this.isCalculatorPageTextElementAsExpected();
        //capture screenshot of the calculator page display before data input
        await TestMethods.captureScreenshot(this.driver, "Calculator Page Display Before Data Input");
        //input number one (453)
        await calculatorPage.clickNumpadNumber(4);
        await calculatorPage.clickNumpadNumber(5);
        await calculatorPage.clickNumpadNumber(3);
        //click 'Division' button
        await calculatorPage.clickDivisionButton();
        //input number two (6)
        await calculatorPage.clickNumpadNumber(6);
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //log the input numbers
        const num1 = 453;
        const num2 = 6;
        Logger.info('Number 1: ', num1);
        Logger.info('Number 2: ', num2);
        //calculate the result locally
        const localDivisionResult = num1 / num2;
        //click 'Equals' button
        await calculatorPage.clickEqualsButton();
        //get the calculation output
        const testDivisionResult = parseFloat(await calculatorPage.getCalculationOutput());
        //local comparator
        assert.strictEqual(testDivisionResult, localDivisionResult, "The local two numbers (manual input) division and local division results don't match");
        //log the result
        Logger.info('Local comparator result: ', localDivisionResult);
        Logger.info('Calculation (division) result: ', testDivisionResult);
        //click 'Clear' button
        await calculatorPage.clickClearButton();
        //get the output after clearing display
        const testDivisionClearResult = await calculatorPage.getCalculationOutput();
        //assert the input/output display is empty
        assert.strictEqual(testDivisionClearResult, " ", "The expected and actual results don't match (clear button functionality is inoperable)");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Calculator 'Clear' Button Function Test Result");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //calculator page text element assert test method
    async isCalculatorPageTextElementAsExpected(){
        const calculatorPage = new CalculatorPage(this.driver);
        //assert calculator page title is as expected
        const calculatorPageTitle = await calculatorPage.getCalculatorPageTitle();
        assert.strictEqual("Calculator", calculatorPageTitle, "The calculator page title doesn't match expectations.");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //screenshot utility
    static async captureScreenshot(driver, fileName) {
        try {
            await driver.sleep(1500); //wait for the screenshot to be taken
            const screenshot = await driver.takeScreenshot();
            const baseDir = path.join(__dirname, '../screenshots');
            fs.mkdirSync(baseDir, {recursive: true});
            const filePath = path.join(baseDir, `${fileName.replace(/[^a-zA-Z0-9-_\(\)]/g, ' ')}.png`);

            // Save the screenshot to the file
            fs.writeFileSync(filePath, screenshot, 'base64');

            console.log(`Screenshot saved at: ${filePath}`);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    }

}

module.exports = TestMethods;

