const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const select = document.querySelector('.lange');

async function getQuotes() {
  let url = `./js/data${currentLanguage}.json`;

  const res = await fetch(url);
  const data = await res.json();
  let quoteIndex = Math.floor(Math.random() * 78);

  changeQuote.addEventListener('click', function () {
    if (quoteIndex === 77) {
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
