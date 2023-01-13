"use strict";

let result, info;

function showResult(h, w) {
  result = Math.round((w / (h / 100) ** 2) * 100) / 100;
  if (result <= 16) {
    info = "Wygłodzenie";
  } else if (result > 16 && result < 17) {
    info = "Wychudzenie";
  } else if (result >= 17 && result < 18.5) {
    info = "Niedowaga";
  } else if (result >= 18.5 && result < 25) {
    info = "Wartość prawidłowa";
  } else if (result >= 25 && result < 30) {
    info = "Nadwaga";
  } else if (result >= 30 && result < 35) {
    info = "Otyłość I stopnia";
  } else if (result >= 35 && result < 40) {
    info = "Otyłość II stopnia";
  } else {
    info = "Otyłość III stopnia";
  }
  return;
}

const calc = document.querySelector("#calc");

const calculator = () => {
  let form = `<h1>Oblicz swój wskaźnik BMI</h1>
      
  <form id="form">
    <div class="form-control">
      <label class="wzrost" for="height">Wzrost (cm)</label>
      <input id="height" type="number" name="height">
      <span id="range-height" class="hide">Wybierz z zakresu od 30 do 300</span>
      <br>
    </div>

    <div class="form-control">
      <label class="waga" for="weight">Waga (kg)</label>
      <input id="weight" type="number" name="weight">
      <span id="range-weight" class="hide">Wybierz z zakresu od 1 do 300</span>
      <br>
    </div>

    <div class="buttons">
      <button class="btn-result" type="submit">Oblicz</button>
      <button class="btn-clear">Wyczyść</button>
      <span id="return" class="display"><i class="fa-solid fa-person-walking-arrow-loop-left"></i> Policz ponownie</span>
      
    </div>
  </form>`;

  calc.innerHTML += form;
};

calculator();

const resultBmi = () => {
  let h = height.value;
  let w = weight.value;

  showResult(h, w);

  const h1 = document.querySelector("h1");

  const pResult = document.createElement("p");

  const aboutBmi = document.createElement("p");

  h1.classList.add("hide");
  form.classList.add("hide");

  pResult.classList.add("result");
  pResult.classList.add("hide");

  aboutBmi.classList.add("aboutBmi");
  aboutBmi.classList.add("hide");

  setTimeout(() => {
    h1.innerText = "Twoje BMI wynosi:";
    h1.classList.remove("hide");

    form.classList.add("display");
    calc.appendChild(pResult);
    pResult.innerHTML = result;
    pResult.classList.remove("hide");

    calc.appendChild(aboutBmi);
    aboutBmi.innerHTML = "I jest to:" + " " + info;
    aboutBmi.classList.remove("hide");

    calc.appendChild(comeBack);
    comeBack.classList.remove("display");
  }, 1000);
};

const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

function validate() {
  const rangeHeight = document.querySelector("#range-height");

  const rangeWeight = document.querySelector("#range-weight");

  if (height.value >= 30 && height.value <= 300) {
    if (weight.value > 0 && weight.value <= 300) {
      resultBmi();
    } else {
      rangeWeight.classList.remove("hide");
    }
  } else {
    rangeHeight.classList.remove("hide");
  }

  
  height.addEventListener('change', (e) => {
    rangeHeight.classList.add("hide");
  });

  weight.addEventListener('change', (e) => {
    rangeWeight.classList.add("hide");
  });
}

const form = document.querySelector("#form");

const btnResult = document.querySelector(".btn-result");

btnResult.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
});

const btnClear = document.querySelector(".btn-clear");

btnClear.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#form").reset();
});

const comeBack = document.querySelector("#return");

comeBack.addEventListener("click", (e) => {
  e.preventDefault();
  location.reload();
});