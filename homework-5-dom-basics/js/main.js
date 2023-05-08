/* 1. 
Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом

+ Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки. 
+ В початковому стані - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.

Після натиснення - на кнопці має бути текст 'Turn on', фон сторінки має стати темний.
Під кнопкою має з'явитись текстове повідомлення 'Last turn off: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення

Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
Під кнопкою має з'явитись текстове повідомлення 'Last turn on: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення

Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки.
Логіку роботи реалізуйте в окремому js-файлі. Для сторінки напишіть селектори для 4 елементів на вибір.

Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) і має бути присвоєний якійсь змінній.
Приклад:

 let spanWithClass = document.querySelector('.hatredLevelCounter');
*/

const LIGHT_MODE = 'light';
const DARK_MODE = 'dark';
const PAGE_STATE_KEY = 'state';
const PAGE_LAST_SWITCH_KEY = 'last-switch'

const APP = document.getElementById('app');
const DATE_SWITCHED = document.getElementById('switcher-note');
const SWITCHER_BUTTON = document.getElementById('switcher-button');

let pageState = localStorage.getItem(PAGE_STATE_KEY);
let lastTimeSwitch = localStorage.getItem(PAGE_LAST_SWITCH_KEY);

loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', setDefaultPageState(PAGE_STATE_KEY, LIGHT_MODE));
    document.addEventListener('DOMContentLoaded', setPageBackground(APP, pageState, DARK_MODE));
    document.addEventListener('DOMContentLoaded', setButtonName(SWITCHER_BUTTON, pageState));
    document.addEventListener('DOMContentLoaded', displayLastTimeSwitch(DATE_SWITCHED, PAGE_LAST_SWITCH_KEY, pageState));
}

/* page states */
function setDefaultPageState(param, state) {
    if (!localStorage.getItem(param)) {
        localStorage.setItem(param, state);
        pageState = localStorage.getItem(PAGE_STATE_KEY);
    }
}

function togglePageState(state) {
    if (state === LIGHT_MODE) {
        localStorage.setItem(PAGE_STATE_KEY, DARK_MODE);
        pageState = localStorage.getItem(PAGE_STATE_KEY);
    }
    else if (state === DARK_MODE) {
        localStorage.setItem(PAGE_STATE_KEY, LIGHT_MODE);
        pageState = localStorage.getItem(PAGE_STATE_KEY);
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
    localStorage.setItem(param, lastSwitch);
}

function displayLastTimeSwitch(component, param, state) {
    if (!localStorage.getItem(param)) {
        component.innerText = '';
        return;
    }
    if (state === DARK_MODE) {
        lastTimeSwitch = localStorage.getItem(PAGE_LAST_SWITCH_KEY);
        component.innerText = `Last turn off: ${formatDate(new Date(lastTimeSwitch))}`;
        return;
    }
    else if (state === LIGHT_MODE) {
        lastTimeSwitch = localStorage.getItem(PAGE_LAST_SWITCH_KEY);
        component.innerText = `Last turn on: ${formatDate(new Date(lastTimeSwitch))}`;
        return;
    }
}

function validateDate(date) {
    const dateToValidate = Date.parse(date);
    return !isNaN(dateToValidate);
};

function formatDate(date) {
    if (!validateDate(date)) {
        return 'Wrong date format'
    }
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

function toggleLight() {
    togglePageState(pageState);
    changePageBackground(APP, DARK_MODE);
    renameButton(SWITCHER_BUTTON);
    setLastTimeSwitch(PAGE_LAST_SWITCH_KEY, DATE_SWITCHED);
    displayLastTimeSwitch(DATE_SWITCHED, PAGE_LAST_SWITCH_KEY, pageState);
}