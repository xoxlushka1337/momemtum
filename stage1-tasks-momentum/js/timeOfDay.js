const greeting = document.querySelector('.greeting');
const block = document.querySelector('.body');
const Unsplash = document.querySelector('.Unsplash');
const GitHub = document.querySelector('.GitHub');
const Flickr = document.querySelector('.Flickr');
const inputUnsplash = document.querySelector('.input-Unsplash');
const inputFlickr = document.querySelector('.input-Flickr');
let photoProviber = '';
let timesOfDay = '';
let translatedGreeting = '';
let gitHubIndexImg = Math.floor(Math.random() * 20) + 1;

// установить язык по умолчанию
// location.href = window.location.pathname + '#en';
let hash = window.location.hash;
let currentLanguage = hash.substring(1);
const allLange = ['en', 'ru'];
if (!allLange.includes(currentLanguage)) {
  location.href = window.location.pathname + '#en';
  location.reload();
}

// время суток
function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours <= 11) timesOfDay = 'morning';
  if (hours >= 12 && hours <= 17) timesOfDay = 'afternoon';
  if (hours >= 18 && hours <= 23) timesOfDay = 'evening';
  if (hours >= 00 && hours <= 5) timesOfDay = 'night';
}

// приветствие
function showGreeting() {
  greeting.innerHTML = translatedGreeting;
  getTimeOfDay();
  setTimeout(showGreeting, 1000);
}
showGreeting();

function getGitHub() {
  photoProviber = 'GitHub';

  GitHub.classList.add('settings-li-active');
  Unsplash.classList.remove('settings-li-active');
  Flickr.classList.remove('settings-li-active');

  let gitHubIndex = toString(gitHubIndexImg);
  let imageUrl = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${gitHubIndex}.jpg`;
  changeBgImg(imageUrl);
}

getGitHub();
GitHub.addEventListener('click', getGitHub);

async function getPhotos(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

const tagInputUnsplash = document.querySelector('.input-Unsplash');
let tagImgUnsplash = timesOfDay;
tagInputUnsplash.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    tagImgUnsplash = this.value;
    unsplashApi();
  }
});

//Unsplash
function unsplashApi() {
  photoProviber = 'Unsplash';

  Unsplash.classList.add('settings-li-active');
  GitHub.classList.remove('settings-li-active');
  Flickr.classList.remove('settings-li-active');
  const client_ID = '-jgvteO7WrQN-mJ5ASfqZKa5oInlW1a9tHTJJI4OeNE';

  getPhotos(
    `https://api.unsplash.com/search/photos?client_id=${client_ID}&per_page=20&query=${tagImgUnsplash}`,
  ).then((response) => {
    let Num = Math.floor(Math.random() * 20);
    let imageUrl = response.results[Num].urls.regular;
    changeBgImg(imageUrl);
  });
}

Unsplash.addEventListener('click', unsplashApi);

// Flickr
const tagInputFlickr = document.querySelector('.input-Flickr');
let tagImgFlickr = timesOfDay;
tagInputFlickr.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    tagImgFlickr = this.value;
    flickrApi();
  }
});

function flickrApi() {
  photoProviber = 'Flickr';

  Flickr.classList.add('settings-li-active');
  GitHub.classList.remove('settings-li-active');
  Unsplash.classList.remove('settings-li-active');

  getPhotos(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=68d29422af3bed1b8552ff77824dff4b&tags=${tagImgFlickr}&per_page=100page=1&format=json&nojsoncallback=1`,
  ).then((response) => {
    let imageUrl = getRandomPhotoUrlFromFlickrResponse(response);
    changeBgImg(imageUrl);
  });
}

Flickr.addEventListener('click', flickrApi);

// let gitHubIndexImg = 2;
function decreaseGitHubIndex() {
  if (gitHubIndexImg > 1) {
    gitHubIndexImg--;
    return;
  }

  gitHubIndexImg = 20;
}

function increaseGitHubIndex() {
  if (gitHubIndexImg < 20) {
    gitHubIndexImg++;
    return;
  }

  gitHubIndexImg = 1;
}

function toString(number) {
  if (number < 10) {
    number = `0${number}`;
  }

  return number;
}

function changeBgImg(imageUrl) {
  const img = new Image();
  img.src = imageUrl;
  img.onload = () => {
    block.style.backgroundImage = `url(${imageUrl})`;
  };
}

function getRandomPhotoUrlFromFlickrResponse(flickrResponse) {
  let Num = Math.floor(Math.random() * 30) + 1;
  let gp = flickrResponse.photos.photo[Num];
  let farmId = gp.farm;
  let serverId = gp.server;
  let id = gp.id;
  let secret = gp.secret;
  let imageUrl = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
  return imageUrl;
}

// левая  стрелочка
const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener('click', function getSlidePrev() {
  if (photoProviber === 'Unsplash') {
    const client_ID = '-jgvteO7WrQN-mJ5ASfqZKa5oInlW1a9tHTJJI4OeNE';
    getPhotos(
      `https://api.unsplash.com/search/photos?client_id=${client_ID}&per_page=20&query=${tagImgUnsplash}`,
    ).then((response) => {
      let Num = Math.floor(Math.random() * 20);
      let imageUrl = response.results[Num].urls.regular;
      changeBgImg(imageUrl);
    });
  } else if (photoProviber === 'GitHub') {
    decreaseGitHubIndex();
    let gitHubIndex = toString(gitHubIndexImg);
    let imageUrl = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${gitHubIndex}.jpg`;
    changeBgImg(imageUrl);
  } else if ((photoProviber = 'Flickr')) {
    getPhotos(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=68d29422af3bed1b8552ff77824dff4b&tags=${tagImgFlickr}&per_page=100page=1&format=json&nojsoncallback=1`,
    ).then((response) => {
      let imageUrl = getRandomPhotoUrlFromFlickrResponse(response);
      changeBgImg(imageUrl);
    });
  }
});

// правоя стрелочка
const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', function getSlideNext(e) {
  if (photoProviber === 'Unsplash') {
    const client_ID = '-jgvteO7WrQN-mJ5ASfqZKa5oInlW1a9tHTJJI4OeNE';
    getPhotos(
      `https://api.unsplash.com/search/photos?client_id=${client_ID}&per_page=20&query=${tagImgUnsplash}`,
    ).then((response) => {
      let Num = Math.floor(Math.random() * 20);
      let imageUrl = response.results[Num].urls.regular;
      changeBgImg(imageUrl);
    });
  } else if (photoProviber === 'GitHub') {
    increaseGitHubIndex();
    let gitHubIndex = toString(gitHubIndexImg);
    let imageUrl = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${gitHubIndex}.jpg`;
    changeBgImg(imageUrl);
  } else if ((photoProviber = 'Flickr')) {
    getPhotos(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=68d29422af3bed1b8552ff77824dff4b&tags=${tagImgFlickr}&per_page=100page=1&format=json&nojsoncallback=1`,
    ).then((response) => {
      let imageUrl = getRandomPhotoUrlFromFlickrResponse(response);
      changeBgImg(imageUrl);
    });
  }
});
