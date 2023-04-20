/* 1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів 
незалежно від їх кількості (але без використання вбутованого об'єкту Math). 
Використайте оператор розширення: */

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function checkIfArrayHasOnlyNumbers(number) {
    return typeof number === 'number';
}

function addThemAll(...numbers) {
    if (numbers.length === 0 || !numbers.every(checkIfArrayHasOnlyNumbers)) {
        return 'Invalid data'
    }
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum;
}

/* 2. Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b */

console.log(multiply(5)(5))	// 25
console.log(multiply(2)(-2)) // -4
console.log(multiply(4)(3)) // 12

function multiply(a) {
    if (typeof a !== 'number' || isNaN(a)) {
        return 'Invalid data'
    }
    function calculate(b) {
        return a * b;
    };
    return calculate;

}

/*
3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:
    a. Властивість за якою треба посортувати
    b. опцію напрямку сортування, зростання чи спадання
*/

const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];

//console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого
//console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
//console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
  if ( a.last_nom < b.last_nom ){
    return -1;
  }
  if ( a.last_nom > b.last_nom ){
    return 1;
  }
  return 0;
}