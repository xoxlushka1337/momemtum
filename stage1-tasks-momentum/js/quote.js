const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

async function getQuotes() {
  const url = '../js/data.json';
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
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

const quotes = getQuotes();
