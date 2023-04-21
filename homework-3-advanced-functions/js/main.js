/* 1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів 
незалежно від їх кількості (але без використання вбутованого об'єкту Math). 
Використайте оператор розширення: */

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function checkIsNumber(number) {
    return (typeof number === 'number' && !isNaN(number));
}

function addThemAll(...numbers) {
    if (numbers.length === 0 || !numbers.every(checkIsNumber)) {
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
        throw new Error('First argument must be a number');

        /*
        як альтернативний варіант щоб не падало з помилкою
        return () => (0);
        console.warn('First argument must be a number');
        */
    }
    function calculate(b) {
        if (typeof b !== 'number' || isNaN(b)) {
            throw new Error('Second argument must be a number');
            /*
            як альтернативний варіант щоб не падало з помилкою
            return 0;
            console.warn('First argument must be a number');
            */
        }
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

console.log(movies.sort(byProperty('releaseYear', '<'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '>'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
    if (direction !== '>' && direction !== '<') {
        console.warn('Wrong value of direction, your array won\'t be sorted as expected');
        return;
    }
    return (a, b) => {
        let valueA = a[property];
        let valueB = b[property];
        
        if (typeof valueA === 'string') {
            valueA = valueA.toLowerCase();
        }
        if (typeof valueB === 'string') {
            valueB = valueB.toLowerCase();
        }

        if (direction === '>') {
            if (valueA > valueB) {
                return 1;
            } else if (valueA < valueB) {
                return -1;
            } else {
                return 0;
            }
        } else if (direction === '<') {
            if (valueA < valueB) {
                return 1;
            }
            else if (valueA > valueB) {
                return -1;
            } else {
                return 0;
            }
        };
    };
};