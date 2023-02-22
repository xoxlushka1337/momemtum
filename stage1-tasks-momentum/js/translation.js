const select = document.querySelector('.lange');
const allLange = ['en', 'ru'];
select.addEventListener('change', changeURL);

function changeURL() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguaga() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLange.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;
  document.querySelector('.greeting').innerHTML = langArr['good'].hash;
}
changeLanguaga();
