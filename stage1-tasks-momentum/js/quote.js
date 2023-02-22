const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const select = document.querySelector('.lange');

async function getQuotes() {
  let url = './js/dataEn.json';

  // select.addEventListener('change', function () {
  //   let lang = select.value;
  //   if (lang === 'ru') {
  //     url = './js/data.json';
  //   }
  // });

  // select.addEventListener('change', change);
  const res = await fetch(url);
  const data = await res.json();
  let quoteIndex = Math.floor(Math.random() * 100) + 1;

  changeQuote.addEventListener('click', function () {
    if (quoteIndex === data.length) {
      quoteIndex = 0;
    } else {
      quoteIndex++;
    }
    quote.textContent = `"${data[quoteIndex].text}."`;
    author.textContent = data[quoteIndex].author;
  });
  quote.textContent = `"${data[quoteIndex].text}."`;
  author.textContent = data[quoteIndex].author;

  return data;
}
getQuotes();
