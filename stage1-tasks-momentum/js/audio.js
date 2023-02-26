const player = document.querySelector('.player');
const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');
const audio = document.querySelector('.player-audio');
const progressConteiner = document.querySelector('.progress-conteiner');
const progress = document.querySelector('.player-progress');
const pause = document.querySelector('.pause');
const title = document.querySelector('.player-name');
const playList = document.querySelector('.play-list').children;
const List = document.querySelectorAll('.list');
const timeDuration = document.querySelector('.time-duration');
const timeMax = document.querySelector('.time-max');

// названия песен
const songs = [
  'Валентин Стрыкало – Так гріє',
  'Нервы – Батареи',
  'Дайте танк (!) – Люди',
  'Lizer - Голосом',
  'Lady Gaga - Paparazzi',
];

// Песня по умолчанию

let songIndex = 0;

// Init
function loadSong(song) {
  title.innerHTML = song;
  audio.src = `./audio/${song}.mp3`;
}
loadSong(songs[songIndex]);

// play

function playSong() {
  player.classList.add('playing');
  playBtn.classList.add('pause');
  playList[songIndex].classList.add('item-active');
  audio.play();
}

function pauseSong() {
  player.classList.remove('playing');
  playBtn.classList.remove('pause');
  playList[songIndex].classList.remove('item-active');
  audio.pause();
}

playBtn.addEventListener('click', () => {
  const isPlaying = player.classList.contains('playing');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

List.forEach(function (li, i) {
  li.addEventListener('click', function () {
    songIndex = i;
    loadSong(songs[songIndex]);
    const isPlaying = playList[songIndex].classList.contains('item-active');
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });
});

// next song

function nextSong() {
  playList[songIndex].classList.remove('item-active');
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
  x();
}
nextBtn.addEventListener('click', nextSong);

// prev song

function prevSong() {
  playList[songIndex].classList.remove('item-active');
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
  x();
}
prevBtn.addEventListener('click', prevSong);

// Progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
audio.addEventListener('timeupdate', updateProgress);

// set progress

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
progressConteiner.addEventListener('click', setProgress);

// Воспроизведены по кругу

audio.addEventListener('ended', nextSong);

// время трека
function songTime() {
  if (audio.duration) {
    let minutesCur = Math.floor(audio.currentTime / 60);
    let secondsCur = Math.floor(audio.currentTime % 60);

    let minutesDur = Math.floor(audio.duration / 60);
    let secondsDur = Math.floor(audio.duration % 60);

    if (minutesDur < 10) minutesDur = '0' + minutesDur;
    if (secondsDur < 10) secondsDur = '0' + secondsDur;

    if (minutesCur < 10) minutesCur = '0' + minutesCur;
    if (secondsCur < 10) secondsCur = '0' + secondsCur;

    timeDuration.innerHTML = `${minutesCur}:${secondsCur}`;
    timeMax.innerHTML = `${minutesDur}:${secondsDur}`;
  } else {
    timeDuration.innerHTML = '00' + ':' + '00';
    timeMax.innerHTML = '00' + ':' + '00';
  }
}

audio.addEventListener('timeupdate', songTime);

// Включить/ выключить звук
const muteButton = document.querySelector('.mute-button');
muteButton.addEventListener('click', function () {
  if (!audio.volume == 0) {
    audio.volume = 0;
    muteButton.classList.add('switch-activ');
  } else {
    audio.volume = 1;
    muteButton.classList.remove('switch-activ');
  }
});
// Ползузнок звука
const soundVolume = document.querySelector('.sound-volume');
soundVolume.onchange = function () {
  audio.volume = parseFloat(this.value / 10);
};
