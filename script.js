function add() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    let sum = Number(a) + Number(b);
    document.getElementById("result").innerText = "Result: " + sum;
}

function subtract() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    let result = Number(a) - Number(b);
    document.getElementById("result").innerText = "Result: " + result;
}

function multiply() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    let result = Number(a) * Number(b);
    document.getElementById("result").innerText = "Result: " + result;
}

function divide() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    if (b == 0) {
        document.getElementById("result").innerText = "Cannot divide by 0";
    } else {
        let result = Number(a) / Number(b);
        document.getElementById("result").innerText = "Result: " + result;
    }
}
