import SimpleCalculator from './simple-calculator.js'
import ScientificCalculator from './scientific-calculator.js'

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const normalButton = document.querySelector('[data-normal]')
const scientificButton = document.querySelector('[data-scientific]')

const calculator = new SimpleCalculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

normalButton.addEventListener('click', button => {
    document.getElementById('scicalc').style.display = "none";
    document.getElementById('simplecalc').style.display = "grid"
})

scientificButton.addEventListener('click', button => {
    document.getElementById('simplecalc').style.display = "none";
    document.getElementById('scicalc').style.display = "grid"
})