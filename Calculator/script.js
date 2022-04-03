class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    allClear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    clear() {

    }

    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand;
    }
}

const numBtn = document.querySelectorAll('[data-num]'),
    oprBtn = document.querySelectorAll('[data-opr]'),
    equalBtn = document.querySelector('[data-equal]'),
    clearBtn = document.querySelector('[data-clear]'),
    allClearBtn = document.querySelector('[data-all-clear]'),
    previousOperandText = document.querySelector('[data-previous-operand]'),
    currentOperandText = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandText, currentOperandText);

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});