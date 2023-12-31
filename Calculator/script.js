let input = document.getElementById("input");

let num1;

let num2;

let operator;

let result;

function calculateValue(num) {
  input.value += num;
}

function addition() {
  num1 = input.value;
  operator = "+";
  input.value = "";
}

function subtraction() {
  num1 = input.value;
  operator = "-";
  input.value = "";
}

function multiplication() {
  num1 = input.value;
  operator = "*";
  input.value = "";
}

function division() {
  num1 = input.value;
  operator = "/";
  input.value = "";
}

function clearCalculator() {
  input.value = "";
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
}

function getResult() {
  num2 = input.value;
  switch (operator) {
    case "+":
      result = Number(num1) + Number(num2);
      input.value = result;
      break;
    case "-":
      result = Number(num1) - Number(num2);
      input.value = result;
      break;
    case "*":
      result = Number(num1) * Number(num2);
      input.value = result;
      break;
    case "/":
      result = Number(num1) / Number(num2);
      input.value = result;
      break;

    default:
      break;
  }
}
