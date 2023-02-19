let buttons = document.querySelectorAll(".buttons");
let span = document.querySelectorAll("span");
let value = document.getElementById("value");

for (let i = 0; i < span.length; i++) {
  span[i].addEventListener("click", function () {
    if (this.innerHTML === "=") {
      //   calculate
      value.innerHTML = eval(value.innerHTML);
    } else if (this.innerHTML === "÷") {
      value.innerHTML += "/";
    } else if (this.innerHTML === "x") {
      value.innerHTML += "*";
    } else if (this.innerHTML === "clear") {
      value.innerHTML = "";
    } else {
      value.innerHTML += this.innerHTML;
    }
  });
}
