import SimpleCalculator from './simple-calculator.js'
import ScientificCalculator from './scientific-calculator.js'

// Simple calculator button initialization
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

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

// Scientific calculator button initialization
const sciNumberButtons = document.querySelectorAll('[data-sci-number]')
const sciOperationButtons = document.querySelectorAll('[data-sci-operation]')
const sciEqualsButton = document.querySelector('[data-sci-equals]')
const sciDeleteButton = document.querySelector('[data-sci-delete]')
const sciAllClearButton = document.querySelector('[data-sci-all-clear]')
const sciPreviousOperandTextElement = document.querySelector('[data-sci-previous-operand]')
const sciCurrentOperandTextElement = document.querySelector('[data-sci-current-operand]')

const sciCalculator = new ScientificCalculator(sciPreviousOperandTextElement, sciCurrentOperandTextElement)

sciNumberButtons.forEach(button => {
    button.addEventListener('click', () => {
        sciCalculator.appendNumber(button.innerText)
        sciCalculator.updateDisplay()
    })
})

sciOperationButtons.forEach(button => {
    button.addEventListener('click', () => {
        sciCalculator.chooseOperation(button.innerText)
        sciCalculator.updateDisplay()
    })
})

sciEqualsButton.addEventListener('click', button => {
    sciCalculator.compute()
    sciCalculator.updateDisplay()
})

sciAllClearButton.addEventListener('click', button => {
    sciCalculator.clear()
    sciCalculator.updateDisplay()
})

sciDeleteButton.addEventListener('click', button => {
    sciCalculator.delete()
    sciCalculator.updateDisplay()
})

// Selector buttons intialization
// TODO: PLEASE replace the repeated document calls with to simple/sci with two variables
const normalButton = document.querySelector('[data-normal]')
const scientificButton = document.querySelector('[data-scientific]')
normalButton.clicked = true;
scientificButton.clicked = false;

normalButton.addEventListener('click', button => {

    if(normalButton.clicked == false) {
        //document.getElementById('scicalc').style.display = "none"
        normalButton.style.backgroundColor = "rgba(255, 255, 255, 0.75)"
        normalButton.clicked = true
        //document.getElementById('simplecalc').style.display = "grid"
        scientificButton.style.backgroundColor = "rgba(255, 255, 255, 0)"
        scientificButton.clicked = false;
        console.log(normalButton.clicked)
        console.log(scientificButton.clicked)
    
    }
    
    
    sciCalculator.clear()
    sciCalculator.updateDisplay()
})

scientificButton.addEventListener('click', button => {

    if(scientificButton.clicked == false) {
        scientificButton.style.backgroundColor = "rgba(255, 255, 255, 0.75)"
        scientificButton.clicked = true
        normalButton.style.backgroundColor = "rgba(255, 255, 255, 0)"
        normalButton.clicked = false;
        console.log(normalButton.clicked)
        console.log(scientificButton.clicked)
        
    }

    if(!document.getElementById('simplecalc').classList.contains('fade-out-left'))
            document.getElementById('simplecalc').classList.add('fade-out-left')
    else
        document.getElementById('simplecalc').classList.toggle('fade-out-left')

    setTimeout( () => {
        //document.getElementById('simplecalc').style.display = "none"
        
        console.log("delayed!")
    }, 1000)

    document.getElementById('scicalc').style.display = "grid"
    if(!document.getElementById('scicalc').classList.contains('fade-in-right')) 
        document.getElementById('scicalc').classList.add('fade-in-right')
    else
         document.getElementById('scicalc').classList.toggle('fade-in-right') 

    calculator.clear()
    calculator.updateDisplay()
})