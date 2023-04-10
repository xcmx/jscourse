
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

/*
2. Перетворення об'єкту
Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
// приклад об'єкту
const priceData = {     Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};
function optimizer(data) {
    // тут ваш код
};
let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
*/


/*
3. Рекусія і ітерація
функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
function recursiveOddSumTo(number) {
   // тут ваш код
};
console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25
     2. функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.
function iterativeOddSumTo(number) {
// тут ваш код
};
console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25
*/