let computerNumber = Math.floor(Math.random() * 10) + 1
let result = ''
let turnLeft = 3
let history = []
document.getElementById("turnLeftDisplay").innerHTML = `Turn left: ${turnLeft}`
let time = 20
let myTime


function guess() {
    let userNumber = document.getElementById("userInput").value;

    if (userNumber >10 || userNumber <1){
        result = 'Choose a number between 1 and 10'
        document.getElementById("resultArea").innerHTML = result
        document.getElementById("userInput").value = ''
        return
    }
    
    if (history.includes(userNumber)) {
        result = 'You already tried this number!'
        document.getElementById("resultArea").innerHTML = result
        document.getElementById("userInput").value = ''
        return
    }
    
    if (computerNumber < userNumber) {
        result = 'Too big'
        turnLeft = turnLeft - 1
        document.getElementById("turnLeftDisplay").innerHTML = `Turn left: ${turnLeft}`
    } else if (computerNumber > userNumber) {
        result = 'Too small'
        turnLeft = turnLeft - 1
        document.getElementById("turnLeftDisplay").innerHTML = `Turn left: ${turnLeft}`
    } else if (computerNumber == userNumber) {
        result = 'You won!'
        turnLeft = 0
        document.getElementById("turnLeftDisplay").innerHTML = `Turn left: ${turnLeft}`
    }

    if (turnLeft == 0) {
        document.getElementById("guessButton").disabled = true
    }

    document.getElementById("resultArea").innerHTML = result
    history.push(userNumber)
    console.log("test", userNumber, turnLeft, history)
    document.getElementById("historyDisplay").innerHTML = `History: ${history}`
    document.getElementById("userInput").value = ''
}

function reset() {
    turnLeft = 3
    computerNumber = Math.floor(Math.random() * 10) + 1
    document.getElementById("guessButton").disabled = false
    history = []
    document.getElementById("userInput").value = ''
    document.getElementById("resultArea").innerHTML = ''
    document.getElementById("historyDisplay").innerHTML = ''
    document.getElementById("turnLeftDisplay").innerHTML = `Turn left: ${turnLeft}`
    time = 20
}


function timecounting() {
    myTime = setInterval(() => {

    if (time == 0 && turnLeft!==0){
        document.getElementById("guessButton").disabled = true
        result = "Out of time"
        document.getElementById("resultArea").innerHTML = result
    }else if (turnLeft==0){
        clearInterval(myTime)
        console.log("test")
    }else{
        time --
        document.getElementById('timecount').innerHTML = `${time} seconds left`}
    }, 1000)
}
timecounting()