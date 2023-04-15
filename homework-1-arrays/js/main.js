/* Task 1 
Bring back full name initals for each array item and sort them alphabetically
*/
const userNames = ["Petrik Olha Ivanivna", "Hnatiuk Petro Antonovich", "Rudko Andrii Opanasovich"];
const initials = userNames.map(element => element.split(" ").map(element => element[0]).join('.')).sort();

/* Task 2 
Reverse the number

TODO: 
1. Fix case when currentMaxValue = -0 
2. Fix case when currentMaxValue = 2400 and reverseMaxValue brings back just 42
*/
const currentMaxValue = 2400;
const reverseMaxValue = Math.sign(currentMaxValue)*parseFloat(currentMaxValue.toString().split('').reverse().join(''));

/* Task 3
Find the product of array with unknown depth level
*/
const resultsArray = [1, 2, [3, [4]]];

const productOfArray = resultsArray.flat(Infinity).reduce(
  (accumulator, currentValue) => accumulator * currentValue, 1
);