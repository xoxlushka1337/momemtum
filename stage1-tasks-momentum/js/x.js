function unsplash() {
  const Unsplash = document.querySelector('.Unsplash');
  Unsplash.addEventListener('click', function () {
    photoProviber = 'Unsplash';
    const fectchPhotos = async () => {
      const url = `https://api.unsplash.com/search/photos?client_id=${client_ID}&per_page=20&query=${timesOfDay}`;
      const response = await fetch(url);
      const data = await response.json();

      states = data;
      setPhotos();
    };
    // рандомное число
    let Num = Math.floor(Math.random() * 20) + 1;
    const client_ID = '-jgvteO7WrQN-mJ5ASfqZKa5oInlW1a9tHTJJI4OeNE';
    let states = [];

    const img = new Image();

    const setPhotos = () => {
      block.style.backgroundImage = `url(${states.results[Num].urls.regular})`;
    };
    fectchPhotos();
  });
}
