const numberBank = [];
const odds = [];
const evens = [];

const addNumber = (event) => {
  event.preventDefault();
  const input = document.querySelector('input[name="number"]');
  const number = parseInt(input.value);
  if (isNaN(number)) {
    alert("Please enter a valid number.");
    return;
  }
  numberBank.push(number);
  input.value = "";
  updateNumberBank();
};

const updateNumberBank = () => {
  const output = document.querySelector("#numberBank output");
  output.textContent = numberBank.join(", ");
};

const sortOne = () => {
  const lastNumber = numberBank.pop();
  if (lastNumber % 2 === 0) {
    evens.push(lastNumber);
    updateEvens();
  } else {
    odds.push(lastNumber);
    updateOdds();
  }
};

const sortAll = () => {
  for (let i = numberBank.length - 1; i >= 0; i--) {
    const number = numberBank[i];
    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }
    numberBank.splice(i, 1);
  }
  updateNumberBank();
  updateOdds();
  updateEvens();
};

const updateOdds = () => {
  const output = document.querySelector("#odds output");
  output.textContent = odds.join(", ");
};

const updateEvens = () => {
  const output = document.querySelector("#evens output");
  output.textContent = evens.join(", ");
};

document.querySelector("form").addEventListener("submit", addNumber);
document.querySelector("#sortOne").addEventListener("click", sortOne);
document.querySelector("#sortAll").addEventListener("click", sortAll);
