/* 1. 
Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом

+ Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки. 
+ В початковому стані - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.

Після натиснення - на кнопці має бути текст 'Turn on', фон сторінки має стати темний.
Під кнопкою має з'явитись текстове повідомлення 'Last turn off: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення

Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
Під кнопкою має з'явитись текстове повідомлення 'Last turn on: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення

Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки.
Логіку роботи реалізуйте в окремому js-файлі.Для сторінки напишіть селектори для 4 елементів на вибір.

Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) і має бути присвоєний якійсь змінній.
Приклад:

 let spanWithClass = document.querySelector('.hatredLevelCounter');
*/

const LIGHT_MODE = 'light';
const DARK_MODE = 'dark';
const STATE_PARAM = 'state';
const LAST_SWITCH_PARAM = 'last-switch'

const APP = document.getElementById('app');
const DATE_SWITCHED = document.getElementById('switcher-note');
const SWITCHER_BUTTON = document.getElementById('switcher-button');

let pageState = localStorage.getItem(STATE_PARAM);
let lastTimeSwitch = localStorage.getItem(LAST_SWITCH_PARAM);

console.log(lastTimeSwitch);

setDefaultPageState(STATE_PARAM, LIGHT_MODE);
setPageBackground(APP, pageState, DARK_MODE);
setButtonName(SWITCHER_BUTTON, pageState);
displayLastTimeSwitch(DATE_SWITCHED, LAST_SWITCH_PARAM, pageState);

/* page states */
function setDefaultPageState(param, state) {
    if (!localStorage.getItem(param)) {
        localStorage.setItem(param, state);
    }
}

function togglePageState(state) {
    if (state === LIGHT_MODE) {
        localStorage.setItem(STATE_PARAM, DARK_MODE);
    }
    else {
        localStorage.setItem(STATE_PARAM, LIGHT_MODE);
    }
}

/* background */
function setPageBackground(component, state, mode) {
    if (state === mode) {
        component.classList.add(mode);
    }
}

function changePageBackground(component, mode) {
    component.classList.toggle(mode);
}

/* button */
function setButtonName(component, state) {
    if (state === DARK_MODE) {
        component.value = "Turn on"
    }
    else if (state === LIGHT_MODE) {
        component.value = "Turn off"
    }

}

function renameButton(component) {
    component.value === "Turn off" ? component.value = "Turn on" : component.value = "Turn off";
}

/* date toggler */
function setLastTimeSwitch(param) {
    let lastSwitch = new Date();
    localStorage.setItem(param, lastSwitch)
}

function displayLastTimeSwitch(component, param, state) {
    if (!localStorage.getItem(param)) {
        return component.innerText = '';
    }
    if (state === DARK_MODE) {
        return component.innerText = `Last turn off: ${localStorage.getItem(param)}`;
    }
    else if (state === LIGHT_MODE) {
        return component.innerText = `Last turn on: ${localStorage.getItem(param)}`;
    }
}

function toggleLight() {
    togglePageState(pageState);
    changePageBackground(APP, DARK_MODE);
    renameButton(SWITCHER_BUTTON);
    setLastTimeSwitch(LAST_SWITCH_PARAM);
}

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, "0"); // Get the day of the month (with leading zero if needed)
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get the month (with leading zero if needed)
  const year = date.getFullYear().toString(); // Get the year
  const hours = date.getHours().toString().padStart(2, "0"); // Get the hours (with leading zero if needed)
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Get the minutes (with leading zero if needed)
  const seconds = date.getSeconds().toString().padStart(2, "0"); // Get the seconds (with leading zero if needed)
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`; // Return the formatted date string
}