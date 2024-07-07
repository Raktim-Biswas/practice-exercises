// Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

let previousNumber = 0;
let currentNumber = 1;

console.log(previousNumber);
console.log(currentNumber);

function sum() {
    let total = previousNumber + currentNumber;
    previousNumber = currentNumber;
    currentNumber = total;
    return currentNumber
}

for (let i = 0; i <= 14; i++) {
    sum();
    console.log(currentNumber);
}