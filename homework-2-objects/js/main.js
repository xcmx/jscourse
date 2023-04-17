/*
1. Get duration between dates

Create a function with 3 parameters: 
- startDate (string), endDate(string);
- period(string: 'days',  'hours', 'minutes', 'seconds')
- default values for each param
- Function has to bring back the duration between dates according to picked period
- Function has to work properly even if the startDate later than endDate (getDurationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds') //  returns'86400 seconds'

getDurationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')  // returns '362 days'
*/

function validatePeriod(period) {
    if (!period || typeof period !== 'string') {
        return false;
    };
    const validPeriods = ['days', 'hours', 'minutes', 'seconds'];
    const transformedPeriod = period.toLowerCase();

    return validPeriods.includes(transformedPeriod);
};

function validateDate(date) {
    const dateToValidate = Date.parse(date);
    return !isNaN(dateToValidate);
};


function formatDate(date, period) {
    return `${date} ${period}`;
};

function getDurationBetweenDates(startDate = null, endDate = null, period = 'seconds') {
    const isPeriodValid = validatePeriod(period);

    if (!isPeriodValid) {
        return 'Invalid period format';
    };
    if (!validateDate(startDate) || !validateDate(endDate)) {
        return 'Start date or end date aren\'t valid'
    };

    const result = Math.abs(Date.parse(endDate) - Date.parse(startDate));
    const duration = period.toLowerCase();

    switch (duration) {
        case 'days': {
            const date = Math.floor(result / 1000 / 60 / 60 / 24);
            return formatDate(date, duration);
        };
        case 'hours': {
            const date = Math.floor(result / 1000 / 60 / 60);
            return formatDate(date, duration);
        };
        case 'minutes': {
            const date = Math.floor(result / 1000 / 60);
            return formatDate(date, duration);
        };
        case 'seconds': {
            const date = Math.floor(result / 1000);
            return formatDate(date, duration);
        };
        default: {
            return 'Wrong period format';
        };
    }
}
/*
2. Object transoformation
There is an object with key: name of an item and value: price.
Create a function that transforms all the keys to lowercase and round all the prices with 2 numbers after the comma
*/
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};
    
function optimizer(data) {
    if (!data || typeof data !== 'object') {
        return 'Invalid data';
    };
    return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key.toLowerCase(), parseFloat(value).toFixed(2)])
    );
};
const updatedPriceData = optimizer(priceData);
console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

/*
3. A function that recursively finds a sum of all odd numbers for some provided number 
*/
function recursiveOddSumTo(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return 'Not a valid number';
    };

    if (number <= 0) {
        return 0;
    };

    if (number % 2 === 0) {
        return recursiveOddSumTo(number - 1);
    };

    return number + recursiveOddSumTo(number - 2);
};
console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25


/* 
4. A function that iterativeally (in a loop) finds a sum of all odd numbers for some provided number 
*/

function iterativeOddSumTo(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return 'Not a valid number';
    };

    if (number <= 0) {
        return 0;
    };

    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
};

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25