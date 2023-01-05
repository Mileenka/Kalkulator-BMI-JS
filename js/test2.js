'use strict';

const form = document.querySelector('#form');

const btn = document.querySelector('.btn-result');

const h1 = document.querySelector('h1');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.add('hide');
    h1.classList.add('hide');

    setTimeout( () => {
        form.classList.add('display');
        h1.classList.add('display');
    }  , 1000);
});
