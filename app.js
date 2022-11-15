"use strict";

console.log("Let's get this party started!");

console.log('s');

const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

let form = $('form').on('submit', searchGiphy);

console.log(form);

async function searchGiphy(evt) {
  evt.preventDefault();
  let search = $('#term').val();
  console.log(search);

  let response = await axios.get("http://api.giphy.com/v1/gifs/search",
    {params: {q: search, api_key: API_KEY}});

  console.log("Response=", response);
}