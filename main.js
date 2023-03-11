//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
function calculate(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        sum += arr[i];
        count++;
      }
    }
    if (count === 0) {
      return null;
    } else {
      return sum / count;
    }
  }

  let arr = [1, 2, 3, 4, "asd", true];
  console.log(calculate(arr)); 
  
  //Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

  let x = prompt("Введіть перше число:");
  let y = prompt("Введіть друге число:");
  let znak = prompt("Введіть знак математичної операції (+, -, *, /, %, ^):");
  function doMath(x, znak, y) {
  x = Number(x); 
  y = Number(y);
  switch (znak) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      if (y === 0) { 
        return "На нуль ділити не можна";
      } else {
        return x / y;
      }
    case "%":
      return x % y;
    case "^":
      return Math.pow(x, y);
    default:
      return "Неправильно вказаний знак";
  }
}

alert(doMath(x, znak, y)); 

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
function fillArray() {
  let arr = [];
  let numOfArrays = parseInt(prompt("Введіть кількість внутрішніх масивів:"));
  let arrayLength = parseInt(prompt("Введіть довжину кожного внутрішнього масиву:"));

  for (let i = 0; i < numOfArrays; i++) {
    let subArr = [];
    for (let j = 0; j < arrayLength; j++) {
      let userInput = prompt(`Введіть значення елементу [${i}][${j}]`);
      subArr.push(userInput);
    }
    arr.push(subArr);
  }
  return arr;
}

alert(fillArray());

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function deleteSymbolsFromString(str, symbols) {
  let symbolsArray = symbols.split(''); 
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!symbolsArray.includes(char)) { 
      result += char; 
    }
  }
  return result;
}

let str = prompt("Введіть рядок:");
let symbols = prompt("Введіть через кому символи, які треба видалити:");

alert(deleteSymbolsFromString(str, symbols)); 

