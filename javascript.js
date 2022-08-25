let lastNum = 0;
let currentNum = 0;
let currentOperation = "";
let isFirstClick = true;

function add(x, y) {
    x = Number(x);
    y = Number(y);
    let result = x + y;
    return result;
}

function subtract(x, y) {
    x = Number(x);
    y = Number(y);
    let result = x - y;
    return result;
}

function multiply(x, y) {
    x = Number(x);
    y = Number(y);
    let result = x * y;
    return result;
}

function divide(x, y) {
    x = Number(x);
    y = Number(y);
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

function checkFit(num) {
    stringNum = num.toString();
    if (stringNum.length <= 9) {
        output.textContent = num;
    }
    else {
        num = num.toFixed(9);
        output.textContent = num;
    }
}

const numButtons = document.querySelectorAll(".num");
numButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        output.textContent += button.value;
        currentNum = output.textContent;
        isFirstClick = false;
    });
});

const addButton = document.querySelector(".add");
addButton.addEventListener("click", function() {
    if (isFirstClick == true) {
        return 0;
    }
    else {
        lastNum = currentNum;
        currentNum = 0;
        currentOperation = "+";
        output.textContent = "";
        console.log(lastNum, currentNum, currentOperation);
    };
});

const subButton = document.querySelector(".subtract");
subButton.addEventListener("click", function() {
    if (isFirstClick == true) {
        return 0;
    }
    else {
        lastNum = currentNum;
        currentNum = 0;
        currentOperation = "-";
        output.textContent = "";
        console.log(lastNum, currentNum, currentOperation);
    };
});

const multButton = document.querySelector(".multiply");
multButton.addEventListener("click", function() {
    if (isFirstClick == true) {
        return 0;
    }
    else {
        lastNum = currentNum;
        currentNum = 0;
        currentOperation = "*";
        output.textContent = "";
        console.log(lastNum, currentNum, currentOperation);
    };
});

const divButton = document.querySelector(".divide");
divButton.addEventListener("click", function() {
    if (isFirstClick == true) {
        return 0;
    }
    else {
        lastNum = currentNum;
        currentNum = 0;
        currentOperation = "/";
        output.textContent = "";
        console.log(lastNum, currentNum, currentOperation);
    };
});

const equalButton = document.querySelector(".equals");
equalButton.addEventListener("click", function() {
    result = operate(lastNum, currentOperation, currentNum);
    currentNum = result;
    checkFit(result);
    console.log(lastNum, currentOperation, currentNum);
})

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function() {
    console.log("clearMe");
})
