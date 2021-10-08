// Módulo calculadora
// - Função "enter"
// - Função "equals"
// - Função "list" que mostra todas as operações já executadas na calculadora, seguidas de seus resultados
// - Função "reset"

// Controlar os operadores e entradas de valor

let calculatorModule = () => {
    let entries = [];

    const enter = (data) => {
        if (typeof data === 'number' || data === ('+' || '-' || '*' || '/')) {
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

        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = Math.round((firstNumber / secondNumber) * 100) / 100;
                break;
            default:
                break;
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
};

let calculadora = calculatorModule();

// console.log(calculadora.enter(5));
// console.log(calculadora.enter('+'));
// console.log(calculadora.enter(2));
// console.log(calculadora.equals());
// console.log(calculadora.list());

// console.log(calculadora.enter(10));
// console.log(calculadora.enter('/'));
// console.log(calculadora.enter(7));
// console.log(calculadora.equals());
// console.log(calculadora.list());

// console.log(calculadora.reset());
// console.log(calculadora.list());
