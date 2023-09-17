const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "Cannot divide by zero";
  }
  return x / y;
}

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    console.log(`Addition: ${add(num1, num2)}`);
    console.log(`Subtraction: ${subtract(num1, num2)}`);
    console.log(`Multiplication: ${multiply(num1, num2)}`);
    console.log(`Division: ${divide(num1, num2)}`);

    rl.close();
  });
});