const time = document.querySelector('.time');
const date = document.querySelector('.date');
const audios = document.querySelector('.player-conteiner');
const weather = document.querySelector('.weather');
const quotes = document.querySelector('.quotes');
const greetings = document.querySelector('.greetings');
const imgs = document.querySelector('.settings-img');
const settings = document.querySelector('.settings');
const checkboxes = document.querySelectorAll('.switch');
const blocks = [time, date, audios, weather, quotes, greetings];

// providers = [GitHub, Unsplash, Flickr];
let providers = document.querySelectorAll('.provider');

providers.forEach((provider) => {
  provider.addEventListener('click', function (e) {
    localStorage.setItem('photoSlider', e.target.innerHTML);
  });
});

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
});

checkboxes.forEach(function (checkbox, checkboxIndex) {
  checkbox.addEventListener('change', function (event) {
    let element = blocks[checkboxIndex];

    if (element.classList.contains('display')) {
      element.classList.remove('display');
      localStorage.removeItem('block' + checkboxIndex);
    } else {
      element.classList.add('display');
      localStorage.setItem('block' + checkboxIndex, event.target.checked);
    }
  });
  // localStorage.setItem('block' + checkboxIndex, event.target.checked);
});

// API
window.addEventListener('DOMContentLoaded', function () {
  let provider = localStorage.getItem('photoSlider');
  if (provider === 'GitHub') {
    getGitHub();
  } else if (provider === 'Unsplash') {
    // вызов unsplash api
    unsplashApi();
  } else if (provider === 'Flickr') {
    // вызов flickr api
    flickrApi();
  }

  for (let i = 0; i < blocks.length; i++) {
    let value = localStorage.getItem('block' + i);
    if (value === 'false') {
      checkboxes[i].getElementsByTagName('input')[0].checked = false;
      // console.log(checkboxes[i].getElementsByTagName('input')[0]);
      blocks[i].classList.add('display');
    }
  }
});
