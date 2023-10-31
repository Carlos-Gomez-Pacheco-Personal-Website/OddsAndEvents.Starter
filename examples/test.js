// TODO: this file! :)
let numbers = [];
let odds = [];
let evens = [];

function addNumber() {
  let num = parseInt(document.getElementById("number").value);
  if (isNaN(num)) {
    alert("Please enter a valid number.");
    return;
  }
  numbers.push(num);
  document.getElementById("number").value = "";
  document.getElementById("numberBank").innerHTML = numbers.join(", ");
}

function sortNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    } else {
      odds.push(numbers[i]);
    }
  }
  document.getElementById("evenNumbers").innerHTML = evens.join(", ");
  document.getElementById("oddNumbers").innerHTML = odds.join(", ");
}

document.getElementById("addButton").addEventListener("click", addNumber);
document.getElementById("sortButton").addEventListener("click", sortNumbers);
