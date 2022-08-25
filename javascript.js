function add(x, y) {
    let result = x + y;
    return result;
}

function subtract(x, y) {
    let result = x - y;
    return result;
}

function multiply(x, y) {
    let result = x * y;
    return result;
}

function divide(x, y) {
    let result = x / y;
    return result;
}

function operate(a, operator, b) {
    let operateResult;
    if (operator == "+") {
        operateResult = add(a, b);
    }
    else if (operator == "-") {
        operateResult = subtract(a, b);
    }
    else if (operator == "*") {
        operateResult = multiply(a, b);
    }
    else {
        operateResult = divide(a, b);
    }
    return operateResult;
}

const outputContainer = document.querySelector(".output");
const output = document.createElement("div");
output.classList.add("outputNum");
output.textContent = "";
outputContainer.appendChild(output);

let lastNum = 0;
let currentNum = 0;
let currentOperation = "";

const numButtons = document.querySelectorAll(".num");
numButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        output.textContent += button.value;
        currentNum = output.textContent;
    });
});

const addButton = document.querySelector(".add");
addButton.addEventListener("click", function() {
    lastNum = currentNum;
    currentNum = 0;
    currentOperation = "+";
    output.textContent = "";
    console.log(lastNum, currentNum, currentOperation);
});

const subButton = document.querySelector(".subtract");
subButton.addEventListener("click", function() {
    console.log("sub me");
});

const multButton = document.querySelector(".multiply");
multButton.addEventListener("click", function() {
    console.log("mult me");
});

const divButton = document.querySelector(".divide");
divButton.addEventListener("click", function() {
    console.log("div me");
});