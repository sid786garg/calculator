let display = document.getElementById("display");
let modeButton = document.getElementById("modeButton");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function toggleMode() {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    modeButton.textContent = "🌙 Dark Mode";
  } else {
    modeButton.textContent = "☀️ Light Mode";
  }
}

// ✅ Keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Allow numbers, operators and dot
  if (/[\d+\-*/.]/.test(key)) {
    appendValue(key);
  }

  // Enter key = calculate
  if (key === "Enter") {
    event.preventDefault(); // Prevent form submission or reload
    calculate();
  }

  // Backspace = delete
  if (key === "Backspace") {
    deleteLast();
  }

  // Escape = clear
  if (key === "Escape") {
    clearDisplay();
  }
});