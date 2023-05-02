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

let securedAboutMe = cat.about.bind(cat);
let securedCheckBreed = cat.checkBreed.bind(cat);

setTimeout(securedAboutMe, 1000);
setTimeout(securedCheckBreed, 2000);

/* 
4. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд. 
*/

function helloFunction(name) {
    if (typeof name !== 'string') {
        console.log('Invalid data');
        return;
    }
    console.log(`hello ${name}`);
}

function slower(func, seconds) {
    let counter = seconds * 1000;
    console.log(`Chill out, you will get you result in ${seconds} seconds`)
    return function(name) {
        setTimeout(() => {
            func(name);
        }, counter);
    }
}

let slowedHelloFunction = slower(helloFunction, 3);

slowedHelloFunction('John')