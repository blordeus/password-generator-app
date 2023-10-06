const sliderValueElement = document.getElementById("sliderValue");
const sliderElement = document.getElementById("slider");
const rangeInputs = document.querySelectorAll('input[type="range"]');
const bar1Element = document.getElementById("bar1");
const bar2Element = document.getElementById("bar2");
const bar3Element = document.getElementById("bar3");
const bar4Element = document.getElementById("bar4");
const levelTxtElement = document.getElementById("levelTxt");
const copyIconElement = document.getElementById("copyIcon");
const copyMsgElement = document.getElementById("copyMsg");
const fieldTextElement = document.getElementById("fieldText");
const generateBtnElement = document.getElementById("generateBtn");
const uppercaseCheckbox = document.getElementById("inclUppercase");
const lowercaseCheckbox = document.getElementById("inclLowercase");
const numbersCheckbox = document.getElementById("inclNumber");
const symbolsCheckbox = document.getElementById("inclSymbol");
const alertElement = document.getElementById("alert");

sliderValueElement.innerHTML = sliderElement.value;
bar1Element.classList.add("weak");
bar2Element.classList.add("weak");

sliderElement.oninput = function () {
  sliderValueElement.innerHTML = this.value;

  const sliderValue = parseInt(this.value);

  if (sliderValue < 7) {
    levelTxtElement.innerHTML = "too weak!";
    removeStrengthClasses();
    bar1Element.classList.add("tooWeak");
  } else if (sliderValue < 9) {
    levelTxtElement.innerHTML = "weak";
    removeStrengthClasses();
    bar1Element.classList.add("weak");
    bar2Element.classList.add("weak");
  } else if (sliderValue < 11) {
    levelTxtElement.innerHTML = "medium";
    removeStrengthClasses();
    bar1Element.classList.add("medium");
    bar2Element.classList.add("medium");
    bar3Element.classList.add("medium");
  } else {
    levelTxtElement.innerHTML = "strong";
    removeStrengthClasses();
    bar1Element.classList.add("strong");
    bar2Element.classList.add("strong");
    bar3Element.classList.add("strong");
    bar4Element.classList.add("strong");
  }
};

function removeStrengthClasses() {
  const strengthClasses = ["tooWeak", "weak", "medium", "strong"];
  [bar1Element, bar2Element, bar3Element, bar4Element].forEach((element) =>
    strengthClasses.forEach((className) => element.classList.remove(className))
  );
}

function handleInputChange(e) {
  const target = e.target;
  const min = target.min;
  const max = target.max;
  const val = target.value;
  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

copyIconElement.addEventListener("click", copyField);

function copyField() {
  const copyText = fieldTextElement.innerHTML;
  navigator.clipboard.writeText(copyText);
  copyMsgElement.style.display = "initial";
}

generateBtnElement.addEventListener("click", generate);

function generate() {
  if (
    !uppercaseCheckbox.checked &&
    !lowercaseCheckbox.checked &&
  )