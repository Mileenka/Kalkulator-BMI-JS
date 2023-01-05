'use strict';

let result, info;

function showResult(h, w) {
  result = Math.round((w / (h / 100) ** 2) * 100) / 100;
  if (result <= 16) {
    info = 'Wygłodzenie';
  } else if (result > 16 && result < 17) {
    info = 'Wychudzenie';
  } else if (result >= 17 && result < 18.5) {
    info = 'Niedowaga';
  } else if (result >= 18.5 && result < 25) {
    info = 'Wartość prawidłowa';
  } else if (result >= 25 && result < 30) {
    info = 'Nadwaga';
  } else if (result >= 30 && result < 35) {
    info = 'Otyłość I stopnia';
  } else if (result >= 35 && result < 40) {
    info = 'Otyłość II stopnia';
  } else {
    info = 'Otyłość III stopnia';
  }
  return;
}

function dataClear() {
  document.querySelector('#form').reset();
}

const sectionWhatIsBmi = document.querySelector('.whatIsBmi');

const btnWhatIsBmi = document.querySelector('.btn-whatIsBmi');

const h1 = document.querySelector('h1');

const form = document.querySelector('form');

const input = document.querySelector('input')

const wzrost = document.querySelector('.wzrost');

const height = document.querySelector('#height');

const waga = document.querySelector('.waga');

const weight = document.querySelector('#weight');

const btnResult = document.querySelector('.btn-result');

const section = document.querySelector('.site-section');

const p = document.createElement('p');

const aboutBmi = document.createElement('p');

const small1 = document.querySelector('#small1');

const small2 = document.querySelector('#small2');

const comeBack = document.querySelector('#return');

function calculator() { 
  form.innerHTML = '<div class="img-weight1"></div><div class="img-weight2"></div><h1>Oblicz swój wskaźnik BMI</h1><form><div class="form-control success"><label class="wzrost" for="height">Wzrost (cm)</label><input id="height" type="number" name="height"><span class="material-symbols-outlined"> Check_Circle</span><small id="small1" class="hide">Wybierz z zakresu od 30 do 300</small><br></div><div class="form-control error"><label class="waga" for="weight">Waga (kg)</label><input id="weight" type="number" name="weight"><span class="material-symbols-outlined">error</span><small id="small2" class="hide">Wybierz z zakresu od 1 do 300</small><br></div><div class="buttons"><button class="btn-result" type="submit">Oblicz</button><button class="btn-clear" onClick="dataClear()">Wyczyść</button><span class="material-symbols-outlined hide">Check_Circle</span><span id="return" class="hide"><i class="fa-solid fa-person-walking-arrow-loop-left"></i> Policz ponownie</span></div></form>';
  section.appendChild(form);
  return;
}

btnResult.addEventListener('click', (e) => {
  e.preventDefault();
  if (height.value >= 30 && height.value <= 300) {
    if (weight.value > 0 && weight.value <= 300) {
      resultBmi();
    } else {
      small2.classList.remove('hide');
      
    }
  } else {
    small1.classList.remove('hide');
  }
});

const resultBmi = () => {
  let h = height.value;
  let w = weight.value;

  showResult(h, w);

  h1.classList.add('hide');
  form.classList.add('hide');

  p.classList.add('result');
  p.classList.add('hide');

  aboutBmi.classList.add('aboutBmi');
  aboutBmi.classList.add('hide');


  setTimeout(() => {
    h1.innerText = 'Twoje BMI wynosi:';
    h1.classList.remove('hide');
    form.classList.add('display');
    section.appendChild(p);
    p.innerHTML = result;
    p.classList.remove('hide');
    section.appendChild(aboutBmi);
    aboutBmi.innerHTML = 'I jest to:' + ' ' + info;
    aboutBmi.classList.remove('hide');
    section.appendChild(comeBack);
    comeBack.classList.remove('display');
  }, 1000);

  ///////////////////
};

comeBack.addEventListener('click', (e) => {
e.preventDefault();

h1.classList.add('display');
form.classList.add('display');
p.classList.add('display');
aboutBmi.classList.add('display');
comeBack.classList.add('display')
calculator();

// setTimeout(() => {;
//   section.appendChild();
//   comeBack.classList.add('hide');
// }, 1000);
});

