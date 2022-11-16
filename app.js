"use strict";

const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const BASE_URL = 'http://api.giphy.com/v1';

$('form').on('submit', handleSubmit);
$('#remove').on('click', removeGifs);

/**
 * removeGifs: Remove all gifs from #gifs div element in HTML
 *  */

function removeGifs(evt) {
  $('#gifs').empty();
}

/**
 * addGif: Given a gif url, add the gif to the #gifs div element in HTML
 *  */

function addGif(gifUrl) {
  const $newGif = $('<img>').attr('src', gifUrl);
  $('#gifs').append($newGif);
}

/**
 * searchGiphy: Using the input text box value, search giphy for a related gif
 * and return the url of the first one found
 *
 * return: string with gif url
 */

async function searchGiphy() {
  const search = $('#term').val();
  const response = await axios.get(`${BASE_URL}/gifs/search`,
    {params: {q: search, api_key: API_KEY}});

  const gifUrl = response.data.data[0].images.original.url;
  return gifUrl;
}

/**
 * handleSubmit: Form submission handler that searches for a gif with the
 * term in the form input and adds it to the gif display area
 */
async function handleSubmit(evt) {
  evt.preventDefault();

  let gifUrl = await searchGiphy();
  addGif(gifUrl);
}