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

function calculateResult(calculationtype)
{
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    let mathOperator

    if(calculationtype === 'ADD'){
        currentResult += enteredNumber
        mathOperator = "+"
    }
    else if(calculationtype === 'SUBTRACT'){
        currentResult -= enteredNumber
        mathOperator = "-"
    }
    else if(calculationtype === 'MULTIPLY')
    {
        currentResult *= enteredNumber
        mathOperator = "*"
    }
    else{
            currentResult /= enteredNumber
            mathOperator = "/"
    }

    if(calculationtype !== 'ADD' && 
    calculationtype !== 'SUBTRACT' && 
    calculationtype !=='MULTIPLY' &&
    calculationtype !== 'DIVIDE')
    {
        return
    }

    createOutput(mathOperator,initialResult,enteredNumber)
    writeToLog(calculationtype,initialResult,enteredNumber,currentResult)


}

function add(){
    calculateResult('ADD')
}  

function subtract(){
   calculateResult('SUBTRACT')
}

function multiply(){
   calculateResult('MULTIPLY')

}
function divide(){
    calculateResult('DIVIDE')

}
addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',divide)
