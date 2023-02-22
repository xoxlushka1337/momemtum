const time = document.querySelector('.time');
const date = document.querySelector('.date');
const audios = document.querySelector('.player-conteiner');
const weather = document.querySelector('.weather');
const quotes = document.querySelector('.quotes');
const greetings = document.querySelector('.greetings');
const imgs = document.querySelector('.settings-img');
const settings = document.querySelector('.settings');
const checkbox = document.querySelectorAll('.switch');

imgs.addEventListener('click', function (e) {
  e.stopPropagation();
  settings.classList.add('settings-activ');
  imgs.classList.add('option');
});
document.body.addEventListener('click', function (e) {
  if (!settings.contains(e.target)) {
    settings.classList.remove('settings-activ');
    imgs.classList.remove('option');
  }
  return;
});
const state = {
  language: 'en',
  photoSource: 'github',
  blocks: [time, date, audios, weather, quotes, greetings],
};

checkbox.forEach(function (li, i) {
  li.addEventListener('change', function () {
    let x = state.blocks[i];

    if (x.classList.contains('display')) {
      x.classList.remove('display');
    } else {
      x.classList.add('display');
    }
    localStorage.setItem('onChecked', 'true');
  });
});

window.addEventListener('DOMContentLoaded', function () {
  // let checkbox = document.querySelector('.rememberMe');
  if (localStorage.getItem('onChecked') === 'true') {
    checkbox.checked = true;
  }
});
