/*
1. Обчислення дати
Напишіть функцію яка буде буде приймати 3 параметри- початкову дату (string)
- кінцеву дату (string)
- розмірність ('days',  'hours', 'minutes', seconds)
Функція повертатиме часовий період між цими датами згідно розмірності.
Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')  // поверне '86400 seconds'
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')  // поверне '362 days'
*/

function getDurationBetweenDates(startDate = null, endDate = null, period = 'seconds') {
    if (startDate && endDate) {
        startDate = new Date(startDate).getTime();
        endDate = new Date(endDate).getTime();

        if (isNaN(startDate) || isNaN(endDate)) {
            return 'Wrong format of start date or end date'
        }
        else {
            let result = endDate - startDate;
            if (period === 'days') {
                return `${(Math.abs(Math.floor(result / 1000 / 60 / 60 / 24)))} days`;
            }
            else if (period === 'hours') {
                return `${Math.abs(Math.floor(result / 1000 / 60 / 60))} hours`;
            }
            else if (period === 'minutes') {
                return `${Math.abs(Math.floor(result / 1000 / 60))} minutes`;
            }
            else if (period === 'seconds') {
                return `${Math.abs(Math.floor(result / 1000))} seconds`;
            }
            else {
                return 'Wrong period format'
            }
        }
    }
    return `Start date or end date aren't specified`
}

/*
2. Перетворення об'єкту
Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.

*/
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};
    
function optimizer(data) {
    Object.keys(data).forEach(item => console.log(item.toLowerCase()));
    // тут ваш код
};
let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

/*
3. Рекусія і ітерація
1. Функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа. */
function recursiveOddSumTo(number) {
    if (typeof number === 'number') {
        if (number === 0) {
            return 0;
        } else if (number % 2 === 0) {
            return recursiveOddSumTo(number - 1);
        }
        return number + recursiveOddSumTo(number - 1);
    }
    return 'Not a number'
};
console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25


/* 2. функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа. */

function iterativeOddSumTo(number) {
    if (typeof number === 'number') {
        let sum = 0;
        for (let i = 0; i <= number; i++) {
            if (i % 2 != 0) {
                sum += i;
            }
        }
        return sum;
    }
    return 'Not a number'
};

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25