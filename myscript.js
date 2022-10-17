let displayNum = document.getElementById("displayNum")
let zero = document.getElementsByClassName("zero")
    zero[0].addEventListener('click', function zeroClick() {
        if (operatorCount<2) {displayNum.innerHTML += "0", callNum1()}
            else if (operatorCount>1) {currentnumClear(), displayNum.innerHTML += "0", callNum1()}})
let one = document.getElementsByClassName("one")
    one[0].addEventListener('click', function oneClick() {
        if (operatorCount<2) {displayNum.innerHTML += "1", callNum1()}
            else if (operatorCount>1) {currentnumClear(), displayNum.innerHTML += "1", callNum1()}})
let two = document.getElementsByClassName("two")
    two[0].addEventListener('click', function twoClick() {
        if (operatorCount<2) {displayNum.innerHTML += "2", callNum1()}
            else if (operatorCount>1) {currentnumClear(), displayNum.innerHTML += "2", callNum1()}})
let three = document.getElementsByClassName("three")
    three[0].addEventListener('click', function threeClick() {
        if (operatorCount<2) {displayNum.innerHTML += "3", callNum1()}
            else if (operatorCount>1) {currentnumClear(), displayNum.innerHTML += "3", callNum1()}})
let four = document.getElementsByClassName("four")
    four[0].addEventListener('click', function fourClick() {
        if (operatorCount<2) {displayNum.innerHTML += "4", callNum1()}
            else if (operatorCount>1) {currentnumClear(), displayNum.innerHTML += "4", callNum1()}})
let five = document.getElementsByClassName("five")
    five[0].addEventListener('click', function fiveClick() {
        if (operatorCount<2) {displayNum.innerHTML += "5", callNum1()}
            else if (operatorCount>1) {currentnumClear(), displayNum.innerHTML += "5", callNum1()}})
let six = document.getElementsByClassName("six")
    six[0].addEventListener('click', function sixClick() {
        if (operatorCount<2) {displayNum.innerHTML += "6", callNum1()}
            else if (operatorCount>1) {currentnumClear(), displayNum.innerHTML += "6", callNum1()}})
let seven = document.getElementsByClassName("seven")
    seven[0].addEventListener('click', function sevenClick() {
        if (operatorCount<2) {displayNum.innerHTML += "7", callNum1()}
            else if (operatorCount>1) {currentnumClear(), displayNum.innerHTML += "7", callNum1()}})
let eight = document.getElementsByClassName("eight")
    eight[0].addEventListener('click', function eightClick() {
        if (operatorCount<2) {displayNum.innerHTML += "8", callNum1()}
            else if (operatorCount>1) {currentnumClear(), displayNum.innerHTML += "8", callNum1()}})
let nine = document.getElementsByClassName("nine")
    nine[0].addEventListener('click', function nineClick() {
        if (operatorCount<2) {displayNum.innerHTML += "9", callNum1()}
            else if (operatorCount>1) {currentnumClear(), displayNum.innerHTML += "9", callNum1()}})
let divide = document.getElementsByClassName("divide")
    divide[0].addEventListener('click', function divideClick() {operatorCount++
        if (operatorCount==1) {displayNum.innerHTML += "/", operator="/",
            whenOp(), currentnumClear()}
        else if (operatorCount>1){operate(), operator="/", whenOp(), callNum1()}
        })
let multiply = document.getElementsByClassName("multiply")
    multiply[0].addEventListener('click', function multiplyClick() {operatorCount++
        if (operatorCount==1) {displayNum.innerHTML += "*", operator="*",
            whenOp(), currentnumClear()}
        else if (operatorCount>1){operate(), operator="*", whenOp(), callNum1()}
        })
let minus = document.getElementsByClassName("minus")
    minus[0].addEventListener('click', function minusClick() {operatorCount++
        if (operatorCount==1) {displayNum.innerHTML += "-", operator="-",
            whenOp(), currentnumClear()}
        else if (operatorCount>1){operate(), operator="-", whenOp(), callNum1()}
        })
let plus = document.getElementsByClassName("plus")
    plus[0].addEventListener('click', function plusClick() {operatorCount++
        if (operatorCount==1) {displayNum.innerHTML += "+", operator="+",
            whenOp(), currentnumClear()}
        else if (operatorCount>1){operate(), operator="+", whenOp(), callNum1()}
        })
let dot = document.getElementsByClassName("dot")
    dot[0].addEventListener('click', function dotClick() {displayNum.innerHTML += "."})
let clear = document.getElementsByClassName("clear")
    clear[0].addEventListener('click', function clearClick() {currentNum = 0, oldNum = 0, clearDisplay()})
let equals = document.getElementsByClassName("equals")
    equals[0].addEventListener('click', function equalsClick() {operate()})


function clearDisplay() {
    displayNum.innerHTML = ""
}

function currentnumClear() {
    displayNum.innerHTML = ""
     number1 =displayNum.innerHTML;
        currentNum = +number1
}

function callNum1(){
    number1 =displayNum.innerHTML;
        currentNum = +number1
}

function whenOp() {
    oldNum = currentNum
}

let currentNum;
let oldNum;
function addFunc() {
    return oldNum += currentNum
}
function subtractFunc() {
    return oldNum -= currentNum
}
function multiplyFunc() {
    return oldNum *= currentNum
}
function divideFunc() {
    return oldNum /= currentNum
}
let operator;
let operatorCount=0;

function runoperatorCount(){
if (operatorCount==2) {
    operate();}
}

function operate() {
    if (operator.includes("*")) {
        displayNum.innerHTML = multiplyFunc()
                callNum1()
                    oldNum=""
                        operator=""
                            
    }
    else if (operator.includes("/")) {
        if (number1==0) {alert("Pls don't break me :(")}
        else if (operator.includes("/")){displayNum.innerHTML = divideFunc()
                callNum1()
                    oldNum=""
                        operator=""
                            }
    }
    else if (operator.includes("-")) {
        displayNum.innerHTML = subtractFunc()
                callNum1()
                    oldNum=""
                        operator=""
                            
    }
    else if (operator.includes("+")) {
        displayNum.innerHTML = addFunc()
                callNum1()
                    oldNum=""
                        operator=""
                            
                        
    }
}
