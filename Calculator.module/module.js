let input = document.querySelector('input[type="text"]')
let output = document.getElementById("resultOutput");
let operators = document.querySelectorAll(".calculator-button");
let length = operators.length;

operators.forEach((index) => {
  index.addEventListener("click", () => {
    let num = index.innerHTML;
    input.value += num;
  });
});

document.addEventListener("keydown", function (e) {
    if (e.which == 13) {
      let sum = eval(input.value);
      input.value = "";
      output.innerText = sum;
    } else if (e.which == 27) {
      input.value = "";
    } else if (
      e.code.indexOf("Digit") != -1 ||
      e.code.indexOf("Numpad") != -1 ||
      e.code.indexOf("Minus") != -1
    ) {
      let myKey = e.key;
      input.value += myKey;
    } else if (e.code.indexOf("Backspace") != -1) {
      let value = input.value;
      value = value.substr(0, value.length - 1);
      console.log("value:", value);
      input.value = value;
    } else {
      return false;
    }
  }
);

input.addEventListener("change", function (e) {
  console.log("value", e.target.value);
});
