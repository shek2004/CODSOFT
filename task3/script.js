let display = document.getElementById("display");

function appendValue(value) {
  if (display.textContent === "0" || display.textContent === "Error") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function deleteLast() {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
}

function calculate() {
  try {
    display.textContent = eval(display.textContent.replace(/×/g, '*').replace(/÷/g, '/'));
  } catch (e) {
    display.textContent = "Error";
  }
}
