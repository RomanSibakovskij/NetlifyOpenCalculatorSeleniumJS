# NetlifyOpenCalculatorSeleniumJS

Simple Selenium test suite on basic calculator functionality. The test suite captures screenshots at the end of test case run (for logging purposes).

#Tech Requirements:
 
 1.Node.js

 2.Jest
 
 3.IntelliJ IDEA (or another IDE)

#Setup

1. Clone this repository into IntelliJ(or other IDE) workspace folder (or wherever the project can be launched by IDE)
2. Open the IDE and open the project folder
3. Install Node.js
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure Jest (enter in IDE terminal: npm install --save-dev jest)
6. Run the test suite on the IDE

## Test Case List

//positive calculator tests

//valid addition tests

1.	//Test 001 -> valid two numbers addition test (manual keypad input)
2.	//Test 001a -> valid two decimal numbers addition test (manual keypad input)
3.	//Test 001b -> valid two random numbers addition test

//valid subtraction tests

1.	//Test 002 -> valid two numbers subtraction test (manual keypad input)
2.	//Test 002a -> valid two numbers subtraction test (with negative result) (manual keypad input)
3.	//Test 002b -> valid two decimal numbers subtraction test (manual keypad input)
4.	//Test 002c -> valid two random numbers subtraction test

//valid multiplication tests

1.	//Test 003 -> valid two numbers multiplication test (manual keypad input)
2.	//Test 003a -> valid two decimal numbers multiplication test (manual keypad input)
3.	//Test 003b -> valid two random numbers multiplication test

//valid division tests

1.	//Test 004 -> valid two numbers division test (manual keypad input)
2.	//Test 004a -> valid two decimal numbers division test (manual keypad input)
3.	//Test 004b -> valid two random numbers division test

//multiple numbers manual input test

1.	//Test 005 -> valid complex calculation (multiple numbers) test

//negative calculator tests

1.	//Test 006 -> invalid two strings addition test (strings input)
2.	//Test 006a -> invalid two strings subtraction test (strings input)
3.	//Test 006b -> invalid two strings multiplication test (strings input)
4.	//Test 006c -> invalid two strings division test (strings input)
5.	//Test 006d -> invalid two numbers division by zero test

//clear calculator function test

1.	//Test 007 -> calculator 'Clear' button function test
