const display = document.getElementById("display");

function number(num) {
  display.value += num;
}

function operator(op) {
  if (op === "AC") {
    display.value = "";
  } else if (op === "DE") {
    display.value = display.value.slice(0, -1);
  } 
   else {
    display.value += op;
  }
}

function equal() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
