# JavaScript Stack Overflow Bug

This repository demonstrates a common error in JavaScript: exceeding the maximum call stack size.  The `bug.js` file contains a recursive function that calculates the greatest common divisor (GCD) using Euclid's algorithm. However, this implementation has a flaw that leads to stack overflow errors under certain inputs. The `bugSolution.js` demonstrates a corrected version using iteration to avoid stack overflow problems. 

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run it in a JavaScript environment (e.g. Node.js, browser's developer console). 
3. Notice that calling `foo(10,2)` results in a 'RangeError: Maximum call stack size exceeded'.
4. Compare this with the corrected version in `bugSolution.js`.