export default function intialGif(gif) {
  const img = document.querySelector('img');
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=84bbjIY88igM5FQdGqNXKmW0A5ajiRxH&s=${gif}`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    });
}
