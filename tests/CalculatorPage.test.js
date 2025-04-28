const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Calculator Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function() {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //positive calculator tests

    //valid addition tests

    describe('Valid Calculator Addition Tests - Manual Input', () => {

        //Test 001 -> valid two numbers addition test (manual keypad input)
        test('Valid Two Numbers Addition Test (manual numbers key input)', async function() {
            await testMethods.twoNumbersManualInputAdditionTest();
        });

        //Test 001a -> valid two decimal numbers addition test (manual keypad input)
        test('Valid Two Decimal Numbers Addition Test (manual numbers key input)', async function() {
            await testMethods.twoDecimalNumbersManualInputAdditionTest();
        });

    });

    describe('Valid Calculator Addition Tests - Two Random Numbers Input', () => {

        //Test 001b -> valid two random numbers addition test (two random number addition doesn't work properly because during RNG number input, equals button seems to be non-operational, test has failed)
        test('Valid Two Random Numbers Addition Test', async function() {
            await testMethods.twoRandomNumbersInputAdditionTest();
        });

    });

    //valid subtraction tests

    describe('Valid Calculator Subtraction Tests - Manual Input', () => {

        //Test 002 -> valid two numbers subtraction test (manual keypad input)
        test('Valid Two Numbers Subtraction Test (manual numbers key input)', async function() {
            await testMethods.twoNumbersManualInputSubtractionTest();
        });

        //Test 002a -> valid two numbers subtraction test (with negative result) (manual keypad input)
        test('Valid Two Numbers Subtraction (negative result) Test (manual numbers key input)', async function() {
            await testMethods.twoNumbersManualInputNegativeResultSubtractionTest();
        });

        //Test 002b -> valid two decimal numbers subtraction test (manual keypad input)
        test('Valid Two Decimal Numbers Subtraction Test (manual numbers key input)', async function() {
            await testMethods.twoDecimalNumbersManualInputSubtractionTest();
        });

    });

    describe('Valid Calculator Subtraction Tests - Two Random Numbers Input', () => {

        //Test 002c -> valid two random numbers subtraction test (two random number subtraction doesn't work properly because during RNG number input, equals button seems to be non-operational, test has failed)
        test('Valid Two Random Numbers Subtraction Test', async function() {
            await testMethods.twoRandomNumbersInputSubtractionTest();
        });

    });

    //valid multiplication tests

    describe('Valid Calculator Multiplication Tests - Manual Input', () => {

        //Test 003 -> valid two numbers multiplication test (manual keypad input)
        test('Valid Two Numbers Multiplication Test (manual numbers key input)', async function() {
            await testMethods.twoNumbersManualInputMultiplicationTest();
        });

        //Test 003a -> valid two decimal numbers multiplication test (manual keypad input)
        test('Valid Two Decimal Numbers Multiplication Test (manual numbers key input)', async function() {
            await testMethods.twoDecimalNumbersManualInputMultiplicationTest();
        });

    });

    describe('Valid Calculator Multiplication Tests - Two Random Numbers Input', () => {

        //Test 003b -> valid two random numbers multiplication test (two random number multiplication doesn't work properly because during RNG number input, equals button seems to be non-operational, test has failed)
        test('Valid Two Random Numbers Multiplication Test', async function() {
            await testMethods.twoRandomNumbersMultiplicationTest();
        });

    });

    //valid division tests

    describe('Valid Calculator Division Tests - Manual Input', () => {

        //Test 004 -> valid two numbers division test (manual keypad input)
        test('Valid Two Numbers Division Test (manual numbers key input)', async function() {
            await testMethods.twoNumbersManualInputDivisionTest();
        });

        //Test 004a -> valid two decimal numbers division test (manual keypad input)
        test('Valid Two Decimal Numbers Division Test (manual numbers key input)', async function() {
            await testMethods.twoDecimalNumbersManualInputDivisionTest();
        });

    });

    describe('Valid Calculator Division Test - Two Random Numbers Input', () => {

        //Test 004b -> valid two random numbers division test (two random number division doesn't work properly because during RNG number input, equals button seems to be non-operational, test has failed)
        test('Valid Two Random Numbers Division Test', async function() {
            await testMethods.twoRandomNumbersDivisionTest();
        });

    });

    //multiple numbers manual input test

    describe('Valid Calculator Complex Calculation Test - Multiple Numbers Manual Input', () => {

        //Test 005 -> valid complex calculation (multiple numbers) test (since the calculator doesn't seem to work with RNG numbers, only manual input is being tested)
        test('Valid Multiple Numbers Calculation (manual numbers key input) Test', async function() {
            await testMethods.multipleNumbersManualInputCalculationTest();
        });

    });

    //negative calculator tests

    describe('Invalid Calculator Tests - Strings Input', () => {

        //Test 006 -> invalid two strings addition test (strings input) (two strings addition doesn't work because during string input, equals button seems to be non-operational, test has passed)
        test('Invalid Two Strings Addition Test (strings input)', async function() {
            await testMethods.invalidTwoStringsAdditionTest();
        });

        //Test 006a -> invalid two strings subtraction test (strings input) (two strings subtraction doesn't work because during string input, equals button seems to be non-operational, test has passed)
        test('Invalid Two Strings Subtraction Test (strings input)', async function() {
            await testMethods.invalidTwoStringsSubtractionTest();
        });

        //Test 006b -> invalid two strings multiplication test (strings input) (two strings multiplication doesn't work because during string input, equals button seems to be non-operational, test has passed)
        test('Invalid Two Strings Multiplication Test (strings input)', async function() {
            await testMethods.invalidTwoStringsMultiplicationTest();
        });

        //Test 006c -> invalid two strings division test (strings input) (two strings division doesn't work because during string input, equals button seems to be non-operational, test has passed)
        test('Invalid Two Strings Division Test (strings input)', async function() {
            await testMethods.invalidTwoStringsDivisionTest();
        });

    });

    describe('Invalid Calculator Test - Division By Zero', () => {

        //Test 006d -> invalid two numbers division by zero test (manual input)
        test('Invalid Two Strings Division By Zero Test (manual input)', async function() {
            await testMethods.twoNumbersManualInputDivisionByZeroTest();
        });

    });

    //clear calculator function test

    describe('"Clear" Calculator Function Test', () => {

        //Test 007 -> calculator 'Clear' button function test
        test('Calculator Clear Button Function Test', async function() {
            await testMethods.calculatorClearButtonFunctionTest();
        });

    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });
});
