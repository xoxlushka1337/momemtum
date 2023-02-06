function showGreeting() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours <= 11) document.querySelector('.greeting').innerHTML = 'Good morning';
  if (hours >= 12 && hours <= 17) {
    document.querySelector('.greeting').innerHTML = 'Good afternoon';
  }
  if (hours >= 18 && hours <= 23) {
    document.querySelector('.greeting').innerHTML = 'Good evening';
  }
  if (hours >= 00 && hours <= 5) {
    document.querySelector('.greeting').innerHTML = 'Good night';
  }
  setTimeout(showGreeting, 1000);
}
showGreeting();
document.addEventListener('DOMContentLoaded', function () {
  let input = document.querySelector('.name');

  if (input) {
    input.value = localStorage.getItem('name') || '';

    input.addEventListener('input', function () {
      localStorage.setItem('name', this.value);
    });
  }
});
