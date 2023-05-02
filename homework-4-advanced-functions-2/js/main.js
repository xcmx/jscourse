/* 
1. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, 
починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. Напишіть її двома варіантами:
- Використовуючи setInterval
- Використовуючи вкладений setTimeout
*/


detonatorTimer(2);
detonatorTimer2(3);

function detonatorTimer(delay) {
    if (!delay || typeof delay !== 'number' || isNaN(delay)) {
        console.log('BIG BADABOOM!');
        return;
    }
    let countdown = delay;
    const timer = setInterval(() => {
    if (countdown === 0) {
        console.log("BOOM!");
        clearInterval(timer);
    } else {
        console.log(countdown);
        countdown--;
    }
    }, 1000);
}

function detonatorTimer2(delay) {
    if (!delay || typeof delay !== 'number' || isNaN(delay)) {
        console.log('BIG BADABOOM!');
        return;
    }

    const countdown = (counter) => {
    if (counter === 0) {
        console.log("BOOM!");
    } else {
        console.log(counter);
        setTimeout(() => countdown(counter - 1), 1000);
    }
    };
    setTimeout(() => countdown(delay), 1000);
}

/* 
2. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять.
Можете описати скільки хочете властивостей і не менше 2 методів. Не соромтесь) Наприклад:
*/


let cat = {
    nickName: 'Simon',
    breed: 'European Shorthair',
    age: 7,
    isLazy: true,
    about() {
        console.log(`Hi! I'm ${this.nickName} and I'm ${this.age} years old`)
    },
    checkBreed() {
        console.log(`I'm ${this.breed} and I'm proud of that`)
    }
}

cat.about();
cat.checkBreed();

/* 
3. А тепер зробіть всі свої методи з задачі 5 прив'язаними до контексту свого об'єкту - аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері: 
*/

// let securedSelfIntroduce // якийсь код*
// let securedSelfPrognose // якийсь код*
// let securedSelfDescribeMyMood // якийсь код*

// setTimeout(securedSelfIntroduce, 1000); *// виведе коректний результат*
// setTimeout(securedSelfPrognose, 2000); *// виведе коректний результат*
// setTimeout(securedSelfDescribeMyMood, 3000); *// виведе коректний результат*

/* 
4. Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд. 
*/

// function someFunction(); // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

// function slower(func, seconds) {
// // тут ваш код для декоратора*
// }

// let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*

// slowedSomeFunction(/*якісь аргументи*/) // викликаєте декоратор*

// // виведе в консоль "Chill out, you will get you result in 5 seconds"
// //...через 5 секунд виведе результат роботи 'someFunction*'