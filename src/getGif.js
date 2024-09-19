export default function intialGif(gif) {
  const img = document.querySelector('img');
  const key = '5ADxxE12cFzR1x4oBeTqsQn1oGU3tW5a';
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${gif}`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    });
}
