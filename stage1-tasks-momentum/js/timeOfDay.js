const greeting = document.querySelector('.greeting');
const block = document.querySelector('.body');
const Unsplash = document.querySelector('.Unsplash');
const GitHub = document.querySelector('.GitHub');
const Flickr = document.querySelector('.Flickr');
const inputUnsplash = document.querySelector('.input-Unsplash');
const inputFlickr = document.querySelector('.input-Flickr');
let photoProviber = '';
let timesOfDay = '';

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
  greeting.innerHTML = `Good ${timesOfDay}`;
  getTimeOfDay();
  setTimeout(showGreeting, 1000);
}
getTimeOfDay();
showGreeting();

// document.addEventListener('DOMContentLoaded', function () {
//   if (inputUnsplash) {
//     city = localStorage.getItem('input-Unsplash') || defualtCity;
//     inputUnsplash.value = city;
//     inputUnsplash.addEventListener('inputUnsplash', function () {
//       localStorage.setItem('city', this.value);
//     });
//   }
// });
// let x = document.querySelector('.input-Unsplash').value;
// console.log(x);
// Github

function getGitHub() {
  photoProviber = 'GitHub';

  GitHub.classList.add('settings-li-active');
  Unsplash.classList.remove('settings-li-active');
  Flickr.classList.remove('settings-li-active');
  let getRandomNum = Math.floor(Math.random() * 20) + 1;
  function turnsNumber() {
    if (getRandomNum < 10) {
      getRandomNum = `0${getRandomNum}`;
    }
  }
  const img = new Image();
  function changeBgImg() {
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${getRandomNum}.jpg`;
    img.onload = () => {
      block.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${getRandomNum}.jpg')`;
    };
  }

  turnsNumber();
  changeBgImg();
}

getGitHub();
GitHub.addEventListener('click', getGitHub);

// клик Unsplash
Unsplash.addEventListener('click', function () {
  photoProviber = 'Unsplash';

  Unsplash.classList.add('settings-li-active');
  GitHub.classList.remove('settings-li-active');
  Flickr.classList.remove('settings-li-active');
  const fectchPhotos = async () => {
    const url = `https://api.unsplash.com/search/photos?client_id=${client_ID}&per_page=20&query=${timesOfDay}`;
    const response = await fetch(url);
    const data = await response.json();

    states = data;
    setPhotos();
  };
  // рандомное число
  let Num = Math.floor(Math.random() * 20) + 1;
  const client_ID = '-jgvteO7WrQN-mJ5ASfqZKa5oInlW1a9tHTJJI4OeNE';
  let states = [];

  const img = new Image();

  const setPhotos = () => {
    block.style.backgroundImage = `url(${states.results[Num].urls.regular})`;
  };
  fectchPhotos();
});

// клик Flickr
Flickr.addEventListener('click', function () {
  photoProviber = 'Flickr';

  Flickr.classList.add('settings-li-active');
  GitHub.classList.remove('settings-li-active');
  Unsplash.classList.remove('settings-li-active');

  const fectchPhotos = async () => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=68d29422af3bed1b8552ff77824dff4b&tags=${timesOfDay}&per_page=100page=1&format=json&nojsoncallback=1`;
    const response = await fetch(url);
    const data = await response.json();

    states = data;
    setPhotos();
  };
  let states = [];

  // рандомное число
  let Num = Math.floor(Math.random() * 30) + 1;

  const setPhotos = () => {
    let gp = states.photos.photo[Num];
    let farmId = gp.farm;
    let serverId = gp.server;
    let id = gp.id;
    let secret = gp.secret;
    block.style.backgroundImage = `url('https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg')`;
  };
  fectchPhotos();
});

// Рандомный индекс для стрелочки GitHub

let getRandomNum = Math.floor(Math.random() * 20) + 1;
function turnsNumber() {
  if (getRandomNum < 10) {
    getRandomNum = `0${getRandomNum}`;
  }
}

// левая  стрелочка
const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener('click', function getSlidePrev() {
  if (photoProviber === 'Unsplash') {
    const fectchPhotos = async () => {
      const url = `https://api.unsplash.com/search/photos?client_id=${client_ID}&per_page=20&query=${timesOfDay}`;
      const response = await fetch(url);
      const data = await response.json();

      states = data;
      setPhotos();
    };
    // рандомное число
    let Num = Math.floor(Math.random() * 20) + 1;
    const client_ID = '-jgvteO7WrQN-mJ5ASfqZKa5oInlW1a9tHTJJI4OeNE';
    let states = [];

    const img = new Image();

    const setPhotos = () => {
      img.src = `${states.results[Num].urls.regular}`;
      img.onload = () => {
        block.style.backgroundImage = `url(${states.results[Num].urls.regular})`;
      };
    };
    fectchPhotos();
  } else if (photoProviber === 'GitHub') {
    const img = new Image();
    function changeBgImg() {
      img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${getRandomNum}.jpg`;
      img.onload = () => {
        block.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${getRandomNum}.jpg')`;
      };
    }

    turnsNumber();
    changeBgImg();

    // строку делаем числом
    function turnsNumberString(number) {
      let picNum;
      if (number < 10) {
        picNum = `0${number}`;
      } else {
        picNum = `${number}`;
      }
      return picNum;
    }
    let pic;
    if (getRandomNum < 20) {
      getRandomNum--;
      pic = turnsNumberString(getRandomNum);
    } else {
      getRandomNum = 20;
      pic = turnsNumberString(getRandomNum);
    }

    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${pic}.jpg`;
    img.onload = () => {
      block.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${pic}.jpg')`;
    };
  } else if ((photoProviber = 'Flickr')) {
    const fectchPhotos = async () => {
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=68d29422af3bed1b8552ff77824dff4b&tags=${timesOfDay}&per_page=100page=1&format=json&nojsoncallback=1`;
      const response = await fetch(url);
      const data = await response.json();
      states = data;

      setPhotos();
    };
    let states = [];

    // рандомное число
    let Num = Math.floor(Math.random() * 30) + 1;

    const img = new Image();

    const setPhotos = () => {
      let gp = states.photos.photo[Num];
      let farmId = gp.farm;
      let serverId = gp.server;
      let id = gp.id;
      let secret = gp.secret;
      img.src = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
      img.onload = () => {
        block.style.backgroundImage = `url('https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg')`;
      };
    };
    fectchPhotos();
  }
});

// правоя стрелочка
const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', function getSlideNext(e) {
  if (photoProviber === 'Unsplash') {
    const fectchPhotos = async () => {
      const url = `https://api.unsplash.com/search/photos?client_id=${client_ID}&per_page=20&query=${timesOfDay}`;
      const response = await fetch(url);
      const data = await response.json();

      states = data;
      setPhotos();
    };
    // рандомное число
    let Num = Math.floor(Math.random() * 20) + 1;
    const client_ID = '-jgvteO7WrQN-mJ5ASfqZKa5oInlW1a9tHTJJI4OeNE';
    let states = [];

    const img = new Image();

    const setPhotos = () => {
      img.src = `${states.results[Num].urls.regular}`;
      img.onload = () => {
        block.style.backgroundImage = `url(${states.results[Num].urls.regular})`;
      };
    };
    fectchPhotos();
  } else if (photoProviber === 'GitHub') {
    const img = new Image();
    function changeBgImg() {
      img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${getRandomNum}.jpg`;
      img.onload = () => {
        block.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${getRandomNum}.jpg')`;
      };
    }

    turnsNumber();
    changeBgImg();

    // строку делаем числом
    function turnsNumberString(number) {
      let picNum;
      if (number < 10) {
        picNum = `0${number}`;
      } else {
        picNum = `${number}`;
      }
      return picNum;
    }
    let pic;
    if (getRandomNum < 20) {
      getRandomNum++;
      pic = turnsNumberString(getRandomNum);
    } else {
      getRandomNum = 1;
      pic = turnsNumberString(getRandomNum);
    }

    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${pic}.jpg`;
    img.onload = () => {
      block.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${pic}.jpg')`;
    };
  } else if ((photoProviber = 'Flickr')) {
    const fectchPhotos = async () => {
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=68d29422af3bed1b8552ff77824dff4b&tags=${timesOfDay}&per_page=100page=1&format=json&nojsoncallback=1`;
      const response = await fetch(url);
      const data = await response.json();
      states = data;

      setPhotos();
    };
    let states = [];

    // рандомное число
    let Num = Math.floor(Math.random() * 30) + 1;

    const img = new Image();

    const setPhotos = () => {
      let gp = states.photos.photo[Num];
      let farmId = gp.farm;
      let serverId = gp.server;
      let id = gp.id;
      let secret = gp.secret;
      img.src = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
      img.onload = () => {
        block.style.backgroundImage = `url('https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg')`;
      };
    };
    fectchPhotos();
  }
});
