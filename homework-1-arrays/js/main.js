/* Task 1 
Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку
*/
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
const initials = userNames.map(element => element.split(" ").map(element => element[0]).join('.')).sort();
console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

/* Task 2 
Задача на розворот числа
*/
const currentMaxValue = 2245;
const reverseMaxValue = Math.sign(currentMaxValue)*parseFloat(currentMaxValue.toString().split('').reverse().join(''));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'


/* Task 3
Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності
*/
const resultsArray = [1, 2, [3, [4]]];

const productOfArray = resultsArray.flat(Infinity).reduce(
  (accumulator, currentValue) => accumulator * currentValue, 1
);

console.log(productOfArray); // 24