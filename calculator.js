function operate(op, num1, num2) {
    final = ""
    if (op === "add") {
        final = parseFloat(num1) + parseFloat(num2);
    } else if (op === "subtract") {
        final = parseFloat(num1) - parseFloat(num2);
    } else if (op === "divide") {
        final = parseFloat(num1) / parseFloat(num2);
    } else if (op === "multiply") {
        final = parseFloat(num1) * parseFloat(num2);
    }
    return final
}



const operations = ["Rad", "Deg", "x!", "(", ")", "%", "Inv",
    "sin", "ln", "π", "cos", "log", "e", "tan", "√", "EXP", "x^y",
    "/", "*", "-", "+"];




const buttons = document.querySelector('.buttons')
const display = document.querySelector('.calculator-screen')


const calcmain = document.querySelector('.calcmain')

buttons.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calcmain.dataset.previousKeyType



        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calcmain.dataset.previousKeyType = 'number'
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calcmain.dataset.firstValue
            const operator = calcmain.dataset.operator
            const secondValue = displayedNum

            if (firstValue &&
                operator &&
                previousKeyType != 'operator') {
                const calcValue = operate(operator, firstValue, secondValue)
                display.textContent = calcValue


                calcmain.dataset.firstValue = calcValue
            } else {

                calcmain.dataset.firstValue = displayedNum
            }
         
            calcmain.dataset.previousKeyType = 'operator'
            calcmain.dataset.operator = action
        }
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.'
            } else if (previousKeyType === 'operator') {
                display.textContent = '0.'
            }
            calcmain.dataset.previousKeyType = 'decimal'
        }

        if (action === 'clear') {
            if (key.textContent === 'AC') {
                calcmain.dataset.firstValue = ''
                calcmain.dataset.modValue = ''
                calcmain.dataset.operator = ''
                calcmain.dataset.previousKeyType = ''
              } else {
                key.textContent = 'AC'
              }
              
            display.textContent = 0  
              calcmain.dataset.previousKeyType = 'clear'
        }

        if (action === 'calculate') {
            const firstValue = calcmain.dataset.firstValue
            const operator = calcmain.dataset.operator
            const secondValue = displayedNum

            display.textContent = operate(operator, firstValue, secondValue)

            calcmain.dataset.previousKeyType = 'calculate'
        }

        if (action !== 'clear') {
            const clearButton = calcmain.querySelector('[data-action=clear]')
            clearButton.textContent = 'CE'
        }
    }
});



/*
const buttons = document.querySelectorAll('.buttons .input');
for (const button of buttons) {
    button.addEventListener('click', function () {
        if (operations.includes(button.value)) {
            numb1 += operate(oper, parseInt(document.querySelector(".calculator-screen").textContent, 10), numb2);
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
*/