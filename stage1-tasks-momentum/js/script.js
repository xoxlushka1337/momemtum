function showTime() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  let time = `${hours}:${minutes}:${seconds}`;
  document.querySelector('.time').innerHTML = time;
  showDate();
  setTimeout(showTime, 1000);
}
showTime();

function showDate() {
  const date = new Date();
  const options = {
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
    weekday: 'long',
  };
  const currentDate = date.toLocaleDateString(
    `${currentLanguage}-${currentLanguage.toUpperCase()}`,
    options,
  );
  document.querySelector('.date').innerHTML = currentDate;
}
showDate();
