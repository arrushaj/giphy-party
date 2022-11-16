"use strict";

const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

$('form').on('submit', searchGiphy);
$('#remove').on('click', removeGifs);

function removeGifs(evt) {
  $('#gifs').empty();
}

function addGif(gifUrl) {
  const $newGif = $('<img>').attr('src', gifUrl);
  $('#gifs').append($newGif);
}

async function searchGiphy(evt) {
  evt.preventDefault();

  const search = $('#term').val();
  const response = await axios.get("http://api.giphy.com/v1/gifs/search",
    {params: {q: search, api_key: API_KEY}});

  const gifUrl = response.data.data[0].images.original.url;
  addGif(gifUrl);
}