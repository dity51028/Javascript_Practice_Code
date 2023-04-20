let defaultResult = 0
let currentResult = defaultResult

function getUserNumberInput()
{
    return  parseInt (userInput.value)
}

function createOutput(operator,resultBeforeCalc,calcNumber){
    const description = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult,description)

}

function add(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult =(currentResult) + enteredNumber
    createOutput('+',initialResult,enteredNumber)
}  

function subtract(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult =(currentResult) - enteredNumber
    createOutput('-',initialResult,enteredNumber)

}
function multiply(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult =(currentResult) * enteredNumber
    createOutput('*',initialResult,enteredNumber)

}
function divide(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult =(currentResult) / enteredNumber
    createOutput('/',initialResult,enteredNumber)

}
addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',divide)
