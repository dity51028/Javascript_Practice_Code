let defaultResult = 0
let currentResult = defaultResult
let logEntries = []

function getUserNumberInput()
{
    return  parseInt (userInput.value)
}

function createOutput(operator,resultBeforeCalc,calcNumber){
    const description = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult,description)

}
function writeToLog(operationIdetifier,prevresult,operationNumber,newresult)
{
    const logEntry = {
        operation : operationIdetifier,
        prevResult : prevresult,
        number : operationNumber,
        result : newresult
    }
    logEntries.push(logEntry)
    console.log(logEntries)
}

function add(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult +=  enteredNumber
    createOutput('+',initialResult,enteredNumber)
    writeToLog('ADD',initialResult,enteredNumber,currentResult)
}  

function subtract(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult -= enteredNumber
    createOutput('-',initialResult,enteredNumber)
    writeToLog('Subtract',initialResult,enteredNumber,currentResult)
    

}
function multiply(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult *= enteredNumber
    createOutput('*',initialResult,enteredNumber)
    writeToLog('Multiply',initialResult,enteredNumber,currentResult)

}
function divide(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult  /= enteredNumber
    createOutput('/',initialResult,enteredNumber)
    writeToLog('Division',initialResult,enteredNumber,currentResult)

}
addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',divide)
