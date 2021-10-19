let calculator = (() => {
    const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;
    const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
    const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
    const divide = (firstNumber, secondNumber) => Math.round((firstNumber / secondNumber) * 100) / 100;

    const operation = {
        '+': sum,
        '-': subtract,
        '*': multiply,
        '/': divide,
    };

    let entries = [];

    const enter = (data) => {
        if (typeof data === 'number' || data === '+' || data === '-' || data === '*' || data === '/') {
            entries = [...entries, data];
            return data;
        } else {
            return 'Invalid entry!';
        }
    };

    const equals = () => {
        if (entries.length < 3) {
            return 'Not enough entries!';
        }

        const firstNumber = entries[entries.length - 3];
        const operator = entries[entries.length - 2];
        const secondNumber = entries[entries.length - 1];

        for (let chosenOperation in operation) {
            if (chosenOperation === operator) {
                result = operation[chosenOperation](firstNumber, secondNumber);
                break;
            }
        }

        entries = [...entries, result];

        return result;
    };

    const list = () => {
        return entries;
    };

    const reset = () => {
        entries = [];
        return 'Calculator history erased!';
    };

    return { enter, equals, list, reset };
})();

console.log(calculator.enter(5));
console.log(calculator.enter('/'));
console.log(calculator.enter(2));
console.log(calculator.equals());
console.log(calculator.list());

console.log(calculator.enter(10));
console.log(calculator.enter('*'));
console.log(calculator.enter(7));
console.log(calculator.equals());
console.log(calculator.list());

// console.log(calculator.reset());
// console.log(calculator.list());
