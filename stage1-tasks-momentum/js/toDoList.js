const inputList = document.querySelector('.input-toDo_List');
const buttonList = document.querySelector('.button-toDo_List');
const textList = document.querySelector('.conteiner-text-toDo_List');

const titleList = document.querySelector('.title-toDo_List');
const Lists = document.querySelector('.toDo_List');
const conteinerList = document.querySelector('.conteiner-toDo_List');
const iconDelete = document.querySelector('.icon');

const toDo = JSON.parse(localStorage.getItem('toDo') || '[]');

buttonList.addEventListener('click', function (e) {
  if (inputList.value === '') {
    return;
  }
  createDeleteElements(inputList.value);
  toDo.push(inputList.value);
  localStorage.setItem('toDo', JSON.stringify(toDo));
  inputList.value = '';
});

titleList.addEventListener('click', function () {
  if (
    (conteinerList.classList.contains('active-toDo_List'),
    Lists.classList.contains('background-active-toDo_List'))
  ) {
    conteinerList.classList.remove('active-toDo_List');
    Lists.classList.remove('background-active-toDo_List');
  } else {
    conteinerList.classList.add('active-toDo_List');
    Lists.classList.add('background-active-toDo_List');
  }
});

for (let i = 0; i < toDo.length; i++) {
  createDeleteElements(toDo[i]);
}

function createDeleteElements(value) {
  const div = document.createElement('div');
  div.className = 'text-toDo_List';
  div.textContent = value;

  const img = document.createElement('img');
  img.className = 'icon-toDo_List';
  img.src = './assets/img/rubbish.png';

  div.appendChild(img);

  img.addEventListener('click', function (e) {
    toDo.splice(Array.prototype.slice.call(textList.children).indexOf(div), 1);
    localStorage.setItem('toDo', JSON.stringify(toDo));
    textList.removeChild(div);
  });

  textList.appendChild(div);
}
