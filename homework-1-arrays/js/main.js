/* Task 1 
Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку
*/
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

initials = userNames.map(element => element.split(" ").map(element => element[0]).join('.')).sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

/* Task 2 
Задача на розворот числа
*/
const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = parseInt(currentMaxValue.toString().split('').reverse().join(''));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'


/* Task 3
Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності
*/
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

productOfArray = 1; // For the proper multiplication

productOfArray = resultsArray.flat(Infinity).reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  productOfArray
);

console.log(productOfArray); // 24