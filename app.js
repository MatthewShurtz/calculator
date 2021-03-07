// Calculator class
class Calculator {
    constructor(firstNumberText, secondNumberText) {
        this.firstNumberText = firstNumberText;
        this.secondNumberText = secondNumberText;
        this.clearField();
    }

    clearField() {
        this.firstNumber = '';
        this.secondNumber = '';
        this.operation = undefined;
    }

    delete() {
        this.firstNumber = this.firstNumber.toString().slice(0, -1);
    }

    appendNum(number) {
        this.firstNumber = this.firstNumber.toString() + number.toString();
    }

    chooseOperator(operation) {
        if (this.firstNumber === '') return
        if (this.secondNumber !== '') {
            this.operate();
        }
        this.operation = operation;
        this.secondNumber = this.firstNumber;
        this.firstNumber = '';
    }

    operate() {
        let compute
        const num1 = parseFloat(this.firstNumber);
        const num2 = parseFloat(this.secondNumber);
        if (isNaN(num1) || isNaN(num2)) return;
        switch(this.operation) {
            case "+":
                compute = num1 + num2;
                break
            case "-":
                compute = num1 - num2;
                break
            case "x":
                compute = num1 * num2;
                break
            case "/":
                compute = num1 / num2;
                break
            default:
                return 
        }   
        this.firstNumber = compute;
        this.operation = undefined;
        this.secondNumber = '';
    }

    getNumberDisplay(number) {  
        const stringNumber = number.toString();
        return stringNumber;
    }

    setNumberDisplay() {
        this.firstNumberText.innerText = this.getNumberDisplay(this.firstNumber);
        if (this.operation != null) {
            this.secondNumberText.innerText = `${this.getNumberDisplay(this.secondNumber)} ${this.operation}`
        }
        else {
            this.secondNumberText.innerText = ''
        }
    }
}

// Selectors
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator');
const acButton = document.querySelector('[data-all-clear]');
const cButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');
const firstNumberText = document.querySelector('[data-first-number]');
const secondNumberText = document.querySelector('[data-second-number]');

// Calculator Created
const calculator = new Calculator(firstNumberText, secondNumberText);


// Event Listeners
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
    calculator.appendNum(button.innerText)
    calculator.setNumberDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
    calculator.chooseOperator(button.innerText)
    calculator.setNumberDisplay()
    })
})

equalButton.addEventListener('click', () => {
    calculator.operate()
    calculator.setNumberDisplay()
})

acButton.addEventListener('click', () => {
    calculator.clearField()
    calculator.setNumberDisplay()
})

cButton.addEventListener('click', () => {
    calculator.delete()
    calculator.setNumberDisplay()
})