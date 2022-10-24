// 1 Создать переменную input в которой будет prompt
// 2 создать массив numbers
// 3 создать переменную total

const numbers = [];
let total = 0;
let input;

while (true) {
    let input = prompt('Введите число');
    if (input === null) {
        break;
    }

    input = Number(input);
    numbers.push(input);

    const notNumber = Number.isNaN(input);
    if (notNumber) {
        numbers.pop(input);
        alert('Введено не число');
        continue;
    }
}

for (const number of numbers) {
    total += number;
}
alert(`Общая сумма: ${total}`);
