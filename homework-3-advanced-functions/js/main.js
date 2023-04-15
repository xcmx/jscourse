/* 1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів 
незалежно від їх кількості (але без використання вбутованого об'єкту Math). 
Використайте оператор розширення: */

console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function addThemAll() {
// тут ваш код
}

/* 2. Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b */

console.log(multiply(5)(5))	// 25
console.log(multiply(2)(-2)) // -4
console.log(multiply(4)(3)) // 12

function multiply(a) {
// тут ваш код
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

console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
// тут ваш код*
}