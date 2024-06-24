ES6 Basics JavaScript Project
This project contains a set of JavaScript functions and utilities written in ES6 syntax, covering various basic and advanced concepts.

Setup
To set up and run this project on your local machine, follow these steps:

Clone the repository:

bash
Copy code
git clone <repository-url>
cd 0x00-ES6_basic
Install Node.js (if not already installed):

Ensure you have Node.js installed on your machine. You can download it from nodejs.org.

Install dependencies:

bash
Copy code
npm install
Functions
1. Constants and Variables
File: 0-constants.js
Functions:
taskFirst(): Demonstrates usage of const.
taskNext(): Demonstrates usage of let.
2. Block Scope
File: 1-block-scoped.js
Function: taskBlock(trueOrFalse)
Uses block-scoped variables to avoid overwriting values.
3. Arrow Functions
File: 2-arrow.js
Function: getNeighborhoodsList()
Uses ES6 arrow functions for concise function definitions.
4. Default Parameters
File: 3-default-parameter.js
Function: getSumOfHoods(initialNumber, expansion1989, expansion2019)
Utilizes default parameter values to simplify parameter handling.
5. Rest Parameters
File: 4-rest-parameter.js
Function: returnHowManyArguments(...args)
Uses rest parameter syntax to capture any number of arguments passed to the function.
6. Spread Operator
File: 5-spread-operator.js
Function: concatArrays(array1, array2, string)
Concatenates arrays and string characters using the spread syntax.
7. Template Literals
File: 6-string-interpolation.js
Function: getSanFranciscoDescription()
Uses template literals to construct a descriptive string about San Francisco.
8. Object Property Shorthand
File: 7-getBudgetObject.js
Function: getBudgetObject(income, gdp, capita)
Simplifies object property assignments using ES6 shorthand syntax.
9. Computed Property Names
File: 8-getBudgetCurrentYear.js
Function: getBudgetForCurrentYear(income, gdp, capita)
Uses computed property names to dynamically set object keys based on the current year.
10. ES6 Method Properties
File: 9-getFullBudget.js
Function: getFullBudgetObject(income, gdp, capita)
Demonstrates using ES6 method properties within an object definition.
11. For...of Loops
File: 10-loops.js
Function: appendToEachArrayValue(array, appendString)
Rewrites a function to use ES6 for...of loops instead of for...in.
12. Iterators
File: 100-createIteratorObject.js
Function: createIteratorObject(report)
Returns an iterator object to iterate through all employees in all departments of a report object.
13. Iterating Through Objects
File: 101-iterateThroughObject.js
Function: iterateThroughObject(reportWithIterator)
Returns a string containing all employee names from an iterator object, separated by '|'.
Usage
Each function is designed to demonstrate and utilize different ES6 features. Import the functions into your own projects or scripts to see how these features can be applied in practical scenarios.

Testing
No testing framework or test cases are provided in this repository. Functions are intended for demonstration and educational purposes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Copy this template into a file named README.md in your project directory (0x00-ES6_basic). Customize the <repository-url> placeholder with the actual URL of your GitHub repository. This README will provide comprehensive information about your project, its setup, functions, and usage.
