let displayNum = document.getElementsByClassName("displayNum")
let zero = document.getElementsByClassName("zero")
    zero[0].addEventListener('click', function zeroClick() {displayNum[0].innerHTML += "0"})
let one = document.getElementsByClassName("one")
    one[0].addEventListener('click', function oneClick() {displayNum[0].innerHTML += "1"})
let two = document.getElementsByClassName("two")
    two[0].addEventListener('click', function twoClick() {displayNum[0].innerHTML += "2"})
let three = document.getElementsByClassName("three")
    three[0].addEventListener('click', function threeClick() {displayNum[0].innerHTML += "3"})
let four = document.getElementsByClassName("four")
    four[0].addEventListener('click', function fourClick() {displayNum[0].innerHTML += "4"})
let five = document.getElementsByClassName("five")
    five[0].addEventListener('click', function fiveClick() {displayNum[0].innerHTML += "5"})
let six = document.getElementsByClassName("six")
    six[0].addEventListener('click', function sixClick() {displayNum[0].innerHTML += "6"})
let seven = document.getElementsByClassName("seven")
    seven[0].addEventListener('click', function sevenClick() {displayNum[0].innerHTML += "7"})
let eight = document.getElementsByClassName("eight")
    eight[0].addEventListener('click', function eightClick() {displayNum[0].innerHTML += "8"})
let nine = document.getElementsByClassName("nine")
    nine[0].addEventListener('click', function nineClick() {displayNum[0].innerHTML += "9"})
let divide = document.getElementsByClassName("divide")
let multiply = document.getElementsByClassName("multiply")
let minus = document.getElementsByClassName("minus")
let dot = document.getElementsByClassName("dot")
let equals = document.getElementsByClassName("equals")
let plus = document.getElementsByClassName("plus")








let num1=2;
let num2=3;
function addFunc() {
    return num1 += num2
}
function subtractFunc() {
    return num1 -= num2
}
function multiplyFunc() {
    return num1 *= num2
}
function divideFunc() {
    return num1 /= num2
}
let operator;
let result;
function operate() {
    let operator = "-"
    if (operator.includes("*")) {
      return result = multiplyFunc()
    }
    else if (operator.includes("/")) {
        return result = divideFunc()
    }
    else if (operator.includes("-")) {
        return result = subtractFunc()
    }
    else if (operator.includes("+")) {
        return result = addFunc()
    }
}
console.log(operate());