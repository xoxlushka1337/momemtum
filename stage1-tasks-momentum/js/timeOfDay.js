const greeting = document.querySelector('.greeting');
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

// save local Storage
document.addEventListener('DOMContentLoaded', function () {
  let input = document.querySelector('.name');

  if (input) {
    input.value = localStorage.getItem('name') || '';

    input.addEventListener('input', function () {
      localStorage.setItem('name', this.value);
    });
  }
});

// рандомное число картинки
let getRandomNum = Math.floor(Math.random() * 20) + 1;
function turnsNumber() {
  if (getRandomNum < 10) {
    getRandomNum = `0${getRandomNum}`;
  }
}

let block = document.querySelector('.body');
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
// правая стрелочкаа
const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', function getSlideNext(e) {
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
});

// левая стрелочкаа
const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener('click', function getSlidePrev(e) {
  let pic;
  if (getRandomNum > 1) {
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
});
