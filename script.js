const num1Input = document.getElementById("firstInput");
const num2Input = document.getElementById("secondInput");
const operationSelect = document.getElementById("operation");
const calculateBtn = document.getElementById("btnSumbit");
const results = document.getElementById("resultSmall");

calculateBtn.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num2 === 0 ? 'Cannot divide by the number zero' : num1 / num2;
    const modulus = (num1, num2) => num2 === 0 ? 'Cannot do modules  by the number zero' : num1 % num2;

    const performOperation = (num1, num2, operation) => {
        if (operation === 'add') {
            return add(num1, num2);
        } else if (operation === 'subtract') {
            return subtract(num1, num2);
        } else if (operation === 'multiply') {
            return multiply(num1, num2);
        } else if (operation === 'divide') {
            return divide(num1, num2);
        } else if (operation === 'modulus') {
            return modulus(num1, num2);
        } else {
            return 'Invalid operation';
        }
    };

    const result = performOperation(num1, num2, operationSelect.value);
    

    results.innerText = `the answer is ${result}`;
});
