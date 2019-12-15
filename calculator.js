function operate(op, num1, num2) {
    final = 0
    if (op === "+") {
        final = num1 + num2;
    } else if (op === "-") {
        final = num1 - num2;
    } else if (op === "/") {
        final = num1 / num2;
    } else {
        final = num1 * num2;
    }
    return final
}


const operations = ["Rad", "Deg", "x!", "(", ")", "%", "Inv",
    "sin", "ln", "π", "cos", "log", "e", "tan", "√", "EXP", "x^y",
    "/", "*", "-", "+"];


var numb1 = 0;
var numb2 = 0;
var oper = "";

const buttons = document.querySelectorAll('.buttons .input');
for (const button of buttons) {
    button.addEventListener('click', function () {
        if (operations.includes(button.value)) {
            numb1 += parseInt(document.querySelector(".calculator-screen").textContent, 10);
            oper += button.value;
            document.querySelector(".calculator-screen").textContent = "";
        } else if (button.value === "=") {
            numb2 += parseInt(document.querySelector(".calculator-screen").textContent, 10);
            document.querySelector(".calculator-screen").textContent = operate(oper, numb1, numb2);
            numb1 = 0;
            numb2 = 0;
            oper = "";
        } else if (button.value === "CE") {
            document.querySelector(".calculator-screen").textContent = "";
        } else {
            document.querySelector(".calculator-screen").textContent += button.value;
        }

    })
}




