"use strict";

const sectionWhatIsBmi = document.querySelector(".whatIsBmi");

const btnWhatIsBmi = document.querySelector(".btn-whatIsBmi");

const h1 = document.querySelector("h1");

const wzrost = document.querySelector(".wzrost");

const height = document.querySelector("#height");

const waga = document.querySelector(".waga");

const weight = document.querySelector("#weight");

const btnResult = document.querySelector(".btn-result");

const form = document.querySelector("form");

const inputNumberH = form.querySelector("input[name=height]");

const inputNumberW = form.querySelector("input[name=weight]");

const formMessage = form.querySelector('.form-message');

const input = form.querySelector('#height');

const section = document.querySelector(".site-section");

const p = document.createElement("p");

const aboutBmi = document.createElement("p");


let result, info;

// if (height > 0 && height <= 250 && weight > 0 && weight <=300) {
//  return;
// }
// else {
//   return alert('Wzrost nie może być większy niż 250cm oraz waga nie może być większa niż 300kg');
// }

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

function dataClear() {
  document.querySelector("#form").reset();
}

btnResult.addEventListener("click", (event) => {
  event.preventDefault();
  // if (height.value > 30 && height.value <= 250) {
  //   if (weight.value > 0 && weight.value <= 300) {
      let h = height.value;
      let w = weight.value;
      showResult(h, w);

      h1.classList.add("hide");
  form.classList.add("hide");

  p.classList.add("result");
  p.classList.add("hide");

  aboutBmi.classList.add("aboutBmi");
  aboutBmi.classList.add("hide");

  setTimeout(() => {
    form.classList.add("display");
    h1.innerText = "Twoje BMI wynosi:";
    h1.classList.remove("hide");
  }, 1000);

  setTimeout(() => {
    section.appendChild(p);
    p.innerHTML = result;
    p.classList.remove("hide");
    section.appendChild(aboutBmi);
    aboutBmi.innerHTML = "I jest to:" + " " + info;
    aboutBmi.classList.remove("hide");
  }, 1000);
});


//     } else {
//       alert("Waga nie może przekraczac ....");
      
//     }
//   } else {
//     // formErrors.push("Wypełnij poprawnie pole z imieniem");
//     alert("Wzrost nie może przekraczac ....");
//   }
// });