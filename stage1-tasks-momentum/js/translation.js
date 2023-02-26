const languages = document.querySelectorAll('.lang');

languages.forEach((language) => {
  if (language.classList.contains(currentLanguage)) {
    language.classList.add('settings-li-active');
  }

  language.addEventListener('click', function (event) {
    currentLanguage = event.target.classList[2];
    changeURL();
  });
});

function changeURL() {
  location.href = window.location.pathname + '#' + currentLanguage;
  location.reload();
}

function changeLanguaga() {
  hash = hash.substring(1);

  // названия блоков в настройках
  const subtitles = document.querySelectorAll('.subtitle');
  for (let i = 0; i < subtitles.length; i++) {
    subtitles[i].innerHTML = langArr['settingsBlock'][currentLanguage][i];
  }

  // language
  const languageTitle = document.querySelector('.title-Language');
  languageTitle.innerHTML = langArr['languageTitle'][currentLanguage];

  for (let i = 0; i < languages.length; i++) {
    languages[i].innerHTML = langArr['lang'][currentLanguage][i];
  }

  //slider Title
  const sliderTitle = document.querySelector('.title-slider');
  sliderTitle.innerHTML = langArr['sliderTitle'][currentLanguage];

  //To-do list
  const titleToDoList = document.querySelector('.title-toDo_List');
  titleToDoList.innerHTML = `— ${langArr['toDoList'][currentLanguage]} —`;

  const btnAdd = document.querySelector('.button-toDo_List');
  btnAdd.innerHTML = langArr['btnAdd'][currentLanguage];

  // Приветствие
  document.querySelector('.name').placeholder = langArr['name'][currentLanguage];
  translatedGreeting = langArr[timesOfDay][currentLanguage];

  // Город по умолчанию, не сохраняем в localStorage
  if (localStorage.getItem('city') === 'Минск' || localStorage.getItem('city') === 'Minsk') {
    localStorage.removeItem('city');
  }
  getQuotes();
  getWeather();
}

changeLanguaga();
