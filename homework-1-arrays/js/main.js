/* Task 1 
Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку
*/
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

// тут ваш код ...

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

/* Task 2 
Задача на розворот числа
*/
const currentMaxValue = 4589;
let reverseMaxValue;

// тут ваш код...

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'


/* Task 3
Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності
*/
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = 1;
let flattenArray = resultsArray.flat(2);

flattenArray.forEach((element) => { 
    productOfArray *= element;
})

console.log(productOfArray); // 24